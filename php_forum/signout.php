<?php

include 'connect.php';
include 'header.php';

	// If user is signed in, empty all session variables to sign out
	if ($_SESSION['signed_in']){
		foreach($_SESSION as $sesh) {
			unset($sesh);
			}
		$_SESSION['signed_in'] = false;
		// (Hacky/inelegant, revise if possible) Refresh page to update messages and clear references to previously logged-in username
		echo('<script>location.reload();</script>');
		}
	// After refresh, display message confirming signout
	else {
		echo('Signout successful!');
	}
include 'footer.php';
?>