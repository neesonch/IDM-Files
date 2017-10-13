<?php

include 'connect.php';
include 'header.php';
// Import PHPass (download below file and place in same folder)
require("PasswordHash.php");

echo '<h3>Sign Up</h3>';

// Check if form has been posted
if ($_SERVER['REQUEST_METHOD'] != 'POST') {
	// If not, display signup form
	echo '<form action="signup.php" method="post">';
		echo '<input name="userName" type="text" placeholder="Username" size="30"></input><br/>';
		echo '<input name="userPass" type="password" placeholder="Password" size="30"></input><br/>';
		echo '<input name="userPassCheck" type="password" placeholder="Confirm password" size="30"></input><br/>';
		echo '<input name="userEmail" type="email" placeholder="Email" size="30"></input><br/>';
		echo '<input name ="userEmailCheck" type="email" placeholder="Confirm email" size="30"></input><br/>';
		echo '<button type="submit">Submit</button>';
	echo '</form>';
	}
	
else {
	// Check for errors in form and store in array
	$errors = array();
	
	// Remove spaces and other allowed special chars from username for alphanumeric character check
	$usernameFiltered = str_replace([" ", "!", "?", ".", ",", "'"], "", $_POST['userName']);
	if (!ctype_alnum($usernameFiltered) && strlen($_POST['userName'])>0) {
		$errors[] = "Your username may only contain letters, numbers, spaces, and the following characters: ! ? . , ' ";
		}
	/* 	else {						DEBUG
		echo $usernameFiltered;
		} */
		
	if (!isset($_POST['userName']) || strlen($_POST['userName'])<1) {
		$errors[] = 'You must enter a username';
		}
		
	if (strlen($_POST['userName'])>20) {
		$errors[] = 'Your username is too long';
		}
		
	if (!isset($_POST['userPass']) || strlen($_POST['userPass'])<1) {
		$errors[] = 'You must enter a password';
		}
		
	if ($_POST['userPass'] != $_POST['userPassCheck'] ) {
		$errors[] = 'The password and password confirmation did not match';
		}
		
	if ($_POST['userEmail'] != $_POST['userEmailCheck'] ) {
		$errors[] = 'The email address and email confirmation did not match';
		}
	// To cater for non-HTML5: server-side check if email address is valid (non-exahustive - simply checks for '@' character in provided address
	if (strpos($_POST['userEmail'], '@') == false) {
		$errors[] = 'Please enter a valid email address';
		}
		
	// ---- End error checks for signup form ---
	
	// If errors found, print notifications
	if(!empty($errors)) {
		echo '<div><h4>There were some problems with your details...</h4>';
		echo '<ul>';
		// Loop through list of errors and print each one
		foreach($errors as $key => $value) {
			echo '<li>' . $value . '</li>';
			}
		echo '</ul></div>';
		}
	
	// Form checks out, create new record
	else {
		// Create new instance of PHPass object
		$hasher = new PasswordHash(8, false);
		// Prepare query with parameters
		$stmt = $db->prepare("INSERT INTO users(user_name, user_pass, user_email, user_date, user_level) values(:user_name, :user_pass, :user_email, NOW(), :user_level)");
		//Bind placeholders to value
		$stmt->bindValue(':user_name', $_POST['userName'], PDO::PARAM_STR);
		// Hash password provided by user before binding
		$hashedPW = $hasher->HashPassword($_POST['userPass']);
		$stmt->bindValue(':user_pass', $hashedPW, PDO::PARAM_STR);
		$stmt->bindValue(':user_email', $_POST['userEmail'], PDO::PARAM_STR);
		/*// Take timestamp
		$dateTime = new DateTime();
		$stmt->bindValue(':user_date', $dateTime, PDO::PARAM_INT); */ // Used in-built SQL 'NOW()' function instead
		$stmt->bindValue(':user_level', 0, PDO::PARAM_INT);
		// Execute query with values given to parameters
		$stmt->execute();
		// Check if query executed (1 if success, 0 if fail)
		$rows=$stmt->rowCount();
		if ($rows==1) {
			echo ('Registration succesful - welcome to the forum! Click <a href="signin.php">here</a> to sign in!');
			}
		else {
			echo ('There was a problem with your registration - please try again later.');
			}
		}
		
	}
	



include 'footer.php';
?>