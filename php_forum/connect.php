<?php

// PDO connection code
$db= new PDO('mysql:host=localhost;dbname=forum_test;charset=utf8', 'root', '_');

/* // ------ Original connection code -------
$server='localhost';
$username='root';
$password=''; //DB password here
$database='forum_test';

if (!mysql_connect($server, $username, $password)) {
		exit('Error: could not establish connection to server');
	}
if (!mysql_select_db($database)) {
		exit('Error: could not select database');
	}
*/

?>
