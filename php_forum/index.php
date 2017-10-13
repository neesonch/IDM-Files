<?php

include 'connect.php';
include 'header.php';


// -------- Test DB query -----------

// --- Original version ---
/* $query ='SELECT * FROM users';
$result =mysql_query($query);
while ($row=mysql_fetch_array($result)) {
	echo($row['user_name'] . ", " . $row['user_email']);
	} */

// --- PDO version ---
/*$stmt = $db->query('SELECT * FROM users');
while ($row = $stmt->fetch()) {
	echo($row['user_name'] . ", " . $row['user_email']);
	}*/
// ---------- End test query --------

// Retrieve category information from DB
$stmt = $db->query('SELECT categories.cat_id, categories.cat_name, categories.cat_description FROM categories'); //categories.cat_id, categories.cat_name, categories.cat_description

// ---- DEBUG ----
/*echo ($stmt->rowCount() . ' rows returned: <br />');
while ($row = $stmt->fetch()) {
	echo ($row['cat_name'] . ' ' . $row['cat_description'] . '<br />');
}*/
// ----- END DEBUG --------

// Quick forum overview
// No categories defined
if ($stmt->rowCount() == 0) {
	echo ('No categories have been created yet.');
}
// Categories defined, display in table
else {
	echo '<table>';
		echo '<tr><th>Category</th><th>Last Topic</th></tr>';
		// Iterate through categories returned from DB, print table
		while ($row = $stmt->fetch()) {
		echo '<tr>';
			echo '<td class="leftpart">';
				echo ('<h3><a href="category.php?id=' . $row['cat_id'] . '">' . $row['cat_name'] . '</a></h3>' . $row['cat_description']);
			echo '</td>';
			echo '<td class="rightpart">';
				echo '<a href="topic.php?id=">Topic subject</a> at 10-10';
			echo '</td>';
		echo '</tr>';
		}
	echo '</table>';
}


include 'footer.php';
?>