<!DOCTYPE html>
<html>
	<head>
		<title>Add Status</title>
		<meta name="apple-mobile-web-app-capable" content="yes">
		<meta name="apple-mobile-web-app-status-bar-style" content="black">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		
		<link rel="stylesheet" href="jquery.mobile-1.2.0.css" />
		
		<link rel="stylesheet" href="addStatus.css" />
		<link rel="apple-touch-icon" href="appicon.png" />
		<link rel="apple-touch-startup-image" href="startup.png">
		
		<script src="jquery-1.8.2.min.js"></script>
		<script src="jquery.mobile-1.2.0.js"></script>
	</head>

	<body>
	
	<?php 
	   $title = "Add Status";
	   $isModal = 1;
	   include("header.php");
	   ?>
	
	<div data-role="content">
	  
	  <h2>What's up?</h2> <br>
	  <fieldset data-role="controlgroup" data-type="horizontal"
		    class="ui-btn-right">
            <input type="radio" name="radio-choice"
                   id="radio-choice-1" value="choice-1"
                   checked="checked" />
            <label for="radio-choice-1"><img src="images/happy.png" /></label>
	    
            <input type="radio" name="radio-choice"
                   id="radio-choice-2" value="choice-2"  />
            <label for="radio-choice-2">:|</label>

	    <input type="radio" name="radio-choice"
		   id="radio-choice-3" value="choice-3" />
	    <label for="radio-choice-3">:(</label>
          </fieldset>
          
	  <label for="textarea-a">Status:</label>
	  <textarea name="textarea" id="textarea-a"></textarea>
	  Location: Stanford, CA
	  
	  </div>
	</body>
</html>
