<!DOCTYPE html> 
<html>

<head>
	<title></title> 
	<meta charset="utf-8">
	<meta name="apple-mobile-web-app-capable" content="yes">
 	<meta name="apple-mobile-web-app-status-bar-style" content="black">
	<meta name="viewport" content="width=device-width, initial-scale=1"> 

	<link rel="stylesheet" href="jquery.mobile-1.2.0.css" />

	<link rel="stylesheet" href="style.css" />
	<link rel="apple-touch-icon" href="appicon.png" />
	<link rel="apple-touch-startup-image" href="upstart.png">
	
	<script src="jquery-1.8.2.min.js"></script>
	<script src="jquery.mobile-1.2.0.js"></script>

</head> 

<body> 

<!-- Start of first page: #one -->
<div data-role="page" id="one">

	<div data-role="header">
		<h1></h1>
		
		<fieldset data-role="controlgroup" data-type="horizontal" data-mini="true" class="ui-btn-center">
		     	<input type="radio" name="radio-choice" id="radio-choice-1" value="choice-1" checked="checked" />
		     	<label for="radio-choice-1">Personal</label>
		
		     	<input type="radio" name="radio-choice" id="radio-choice-2" value="choice-2"  />
		     	<label for="radio-choice-2">Global</label>
		</fieldset>
		
	</div><!-- /header -->

	<div data-role="content">	
	
	$(#radio-choice-1).bind("click", function() {
		<?php
		   include("personalfeed.php");
		   ?>
		   });
		   
	$(#radio-choice-2).bind("click", function() {
		<?php
		   include("globalfeed.php");
		   ?>
		   });
		   
	</div><!-- /content -->
	
	<?php
	   $select0 = "ui-btn-active";
	   include("footer.php");
	   ?>
</div>
	
</div>

</body>
</html>
