<?php

include 'connect.php';
include 'header.php';
// Import PHPass (download below file and place in same folder)
require("PasswordHash.php");

// Check if form has already been posted, if not (and user is not already signed in) then display sign-in form
if($_SERVER['REQUEST_METHOD'] != 'POST' && !$_SESSION['signed_in']) {
	echo ('<h3> Sign In </h3>');
	echo ('<form id = "sign-in" method="post" action="signin.php">');
		echo ('<input type ="text" name = "userName" placeholder ="Username"><br />');
		echo ('<input type ="password" name ="userPass" placeholder ="Password"><br />');
		echo ('<input type ="submit"><br />');
	echo ('</form>');
}
// Check if user is already signed in
elseif ($_SESSION['signed_in']){
	echo ('You are already signed in!');
}
else {
	// Declare array to contain any errors with form
	$errors = array();
	//echo('Working'); //DEBUG
	
	if (!isset($_POST['userName']) || strlen($_POST['userName'])<1) {
		$errors[] = 'The username field is empty.';
		}
		
	if (!isset($_POST['userPass']) || strlen($_POST['userPass'])<1) {
		$errors[] = 'The password field is empty.';
		}
		
	// ------- End error checks ------
		
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
		
		// No errors, proceed with sign-in
	else {
		//echo ('Congratulations, you filled in a form correctly, ya genius!');	//DEBUG
		
		// Prepare SQL statement 
		$stmt = $db->prepare("SELECT user_id, user_name, user_level, user_pass FROM users WHERE user_name = :user_name");
		// Bind values
		$stmt->bindValue(':user_name', $_POST['userName'], PDO::PARAM_STR);
		// Execute statement
		$stmt->execute();
		// Return results (fetchAll) or first result (fetch) as array (associative or numerative)
		$rows = $stmt->fetch(PDO::FETCH_ASSOC);
		
		if (!$rows) {
			echo ('We are having technical difficulties, please try again later!');
			}
			
		else {
			// Create new instance of PHPass object
			$hasher = new PasswordHash(8, false);
			// Check provided password against stored hash
			$check = $hasher->CheckPassword($_POST['userPass'], $rows['user_pass']);
			// Valid combination
			if ($check ==1) {
				// Begin session by setting 'signed in' to true
				$_SESSION['signed_in'] = true;
				// Store other useful values in session object
				$_SESSION['user_name'] = $rows['user_name'];
				$_SESSION['user_id'] = $rows['user_id'];
				$_SESSION['user_level'] = $rows['user_level'];
				echo ('Welcome, ' . $_SESSION['user_name'] .  '!' . ' Head on in to <a href="index.php">the forum</a>.');
				}
			// Incorrect combination
			else {
				echo ('Your name and password did not match!');
				}
			}
		}
		
	}
	
	

include 'footer.php';
?>