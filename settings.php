<!DOCTYPE html> 
<html>

<head>
	<title>Settings</title> 
	<meta charset="utf-8">
	<meta name="apple-mobile-web-app-capable" content="yes">
 	<meta name="apple-mobile-web-app-status-bar-style" content="black">
	<meta name="viewport" content="width=device-width, initial-scale=1"> 

	<link rel="stylesheet" href="jquery.mobile-1.2.0.css" />
	<link rel="stylesheet" href="style.css" />
	<link rel="apple-touch-icon" href="appicon.png" />
	<link rel="apple-touch-startup-image" href="startup.png">
	
	<script src="jquery-1.8.2.min.js"></script>
	<script src="jquery.mobile-1.2.0.js"></script>

</head> 

<body>
<div data-role="page" id="filter">

	<div data-role="header">
		<a href="index.php" data-icon="delete">Cancel</a>
		<h1>Settings</h1>
		<a href="index.php" data-icon="check" data-theme="b">Save</a>

	</div><!-- /header -->

	<div data-role="content">
	
	<form action="submit.php" method="post">
		<div data-role="fieldcontain">
	     <label for="name">Name:</label>
	     <input type="text" name="name" id="name" value="Katherine Chen" />
	     <label for="email">Email:</label>
	     <input type="text" id="email" value="kchen12@stanford.edu" />
		</div>

		<div data-role="fieldcontain">
			<label for="pass">Password:</label>
			<input type="password" name="pass" id="pass" value="hello" />

		</div>
	
		<div data-role="fieldcontain">
		<fieldset data-role="controlgroup">
	    	<legend>Gender:</legend>
	         	<input type="radio" name="gender" id="radio-female" value="f" checked />
	         	<label for="radio-female">Female</label>
	
	         	<input type="radio" name="gender" id="radio-male" value="m" />
	         	<label for="radio-male">Male</label>
	    </fieldset>
	    </div>
	
		<div data-role="fieldcontain">
		<label for="flip-s">Location Services:</label>
		<select name="flip-s" id="flip-s" data-role="slider">
			<option value="off">Off</option>
			<option value="on" selected>On</option>
		</select>
	    </div>

	
		<div data-role="fieldcontain">
			<label for="select-choice-x" class="select">Stories Privacy:</label>
			<select name="select-shipper" id="select-choice-x" >
				<option></option>
				<option value="me">Only Me</option>
				<option value="friends" selected>Friends</option>
				<option value="all">Public</option>
			</select>
		</div>
		
		
		<center> <div>
		
		<a href="logout.php" data-role="button" data-theme="a">Logout</a>
		
		</div> </center>

	</form>
	</div><!-- /content -->

	<?php
		$select3="ui-btn-active";
		include ("footer.php");
	?>
	
	</div><!-- /page -->


</body>
</html>
