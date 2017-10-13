<?php

include 'connect.php';
include 'header.php';

echo ('<h2>Create a new topic</h3>');
// Check if user is signed in
if (!$_SESSION['signed_in']) {
	echo ('You must be signed in to create a topic!');
}
else {
	//user is signed in, check if form has been posted
	if ($_SERVER['REQUEST_METHOD'] != 'POST') {
		// Form not yet submitted; display. Retrieve category information from DB for use in form
		$stmt = $db->query('SELECT categories.cat_id, categories.cat_name, categories.cat_description FROM categories');
		// No categories exist yet for new topic to be placed into
		if ($stmt->rowCount() == 0) {
			if ($_SESSION['user_level']==1) {
				echo ('You need to <a href="new_cat.php">create a category</a> before any topics can be created.');
			}
			else {
				echo ('You cannot create a new topic until an admin has created at least one category!');
			}
		}
		// User signed in and categories exist, show form
		else {
			echo ('<form method = "post" action = "new_topic.php">');
			echo ('<input type = "text" name = "topic_subject" placeholder ="Subject"></input><br />');
			// Create dropdown list of possible categories for topic
			echo ('<select name ="topic_cat" required>');
				// Placeholder/label
				echo ('<option value="" disabled selected>Select category</option>');
				// Categories
				while ($row = $stmt->fetch()) {
					echo ('<option value="' .$row['cat_id'] . '">' . $row['cat_name'] . '</option>');
				}
			echo ('</select><br />');
			// --- End of dropdown list ---
			echo ('<textarea name = "post_content" placeholder = "Write your post here!"></textarea>');
			echo ('<input type = "submit" value = "Create topic!"></input>');
		
		}
	}
}	


include 'footer.php';
?>