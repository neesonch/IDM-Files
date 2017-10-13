<?php

include 'connect.php';
include 'header.php';

// Display form if it has not been posted and user is authorized
if ($_SERVER['REQUEST_METHOD'] != 'POST' && $_SESSION['user_level']>0) {
	// Form to create new category
	echo ('<form method = "post" action ="#">
		<label for="catName"> Category name: </label>
		<input type="text" id="catName" name="catName" /><br />
		<label for="catDesc">Description: </label>
		<textarea id="catDesc" name ="catDesc"> </textarea><br />
		<input type="submit" />
	</form>');
}
// User does not have required permission
elseif ($_SESSION['user_level']==0) {
	echo ('You are not authorized to perform that action!');
}
else {
	
	//Prepare query with parameters
	$stmt = $db->prepare('INSERT into categories(cat_name, cat_description) values(:cat_name, :cat_desc)');
	//Bind placeholders to values
	$stmt->bindValue(':cat_name', $_POST['catName'], PDO::PARAM_STR);
	$stmt->bindValue(':cat_desc', $_POST['catDesc'], PDO::PARAM_STR);
	// Execute query with values given to parameters
	$stmt->execute();
	// Check if statement successfully executed (1 if success, 0 if fail)
	$rows = $stmt->rowCount();
	if ($rows == 1) {
		echo ('New category successfully created!');
	}
	else {
		echo ('Something went wrong - please try again later.');
	}
}


include 'footer.php';
?>