<?php

// PDO connection code
$db= new PDO('mysql:host=localhost;dbname=forum_test;charset=utf8', 'root', 'ChxnSQL1');

/* // ------ Original connection code -------
$server='localhost';
$username='root';
$password='ChxnSQL1';
$database='forum_test';

if (!mysql_connect($server, $username, $password)) {
		exit('Error: could not establish connection to server');
	}
if (!mysql_select_db($database)) {
		exit('Error: could not select database');
	}
*/

?>