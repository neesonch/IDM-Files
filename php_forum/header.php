<!DOCTYPE html>
<?php
// Initialize super-global session variable
  session_start();
 ?>
<html>
	<head>
		<meta charset = "utf-8"/>
		<link rel="stylesheet" type="text/css" href="assets/css/style.css"></link>
	</head>
	
	<body>
	<div id="wrapper">
		<h1> Welcome to the forum </h1>
			<div id="menu">
				<ul>
					<li><a href="index.php">Home</a></li>
					<li><a href="new_topic.php">Create topic</a></li>
					<li><a href="new_cat.php">New category</a></li>
				</ul>
				
				<?php
				if ($_SESSION['signed_in']){
					echo ('<div id="userbar"> Hello, ' . $_SESSION['user_name'] . '. Not you? <a href="signout.php">Log out</a> </div>');
				}
				else {
					echo ('<div id="userbar"> <a href="signin.php">Sign in </a> or <a href="signup.php">create an account</a>! </div>');
				}
				
				?>
				
			</div><!--menu-->
			
			<div id="content">
			
<!--- End of header --->

