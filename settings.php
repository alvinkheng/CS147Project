<!DOCTYPE html> 
<html>

<head>
	<title>Emotionly | Settings</title> 
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
<!-- <body> 

<div data-role="page">

	<div data-role="header">
		<h1>Settings</h1>

	</div><!-- /header -->

	<div data-role="content">	

	</div><!-- /content -->


</body> -->

<body>
<div data-role="page" id="filter">

	<div data-role="header">
		<a href="index.html" data-icon="delete">Save</a>
		<h1>Settings</h1>
		<a href="index.html" data-icon="check">Cancel</a>

	</div><!-- /header -->

	<div data-role="content">	
		<p></p>
	
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
		<div class="ui-block-b"><button type="submit" data-theme="a">Logout</button></div>

	</form>
	</div><!-- /content -->

	<?php
		select3="ui-btn-active";
		include ("footer.php");
	?>
	
	<script type="text/javascript">
		$('#filter').live( 'pageinit',function(event){
			$(".taphold").on('taphold', function(event){
				alert("You tapped and held");
			});
			
			$(".tap").on('tap', function(event){
				alert("You tapped!");
			});
			
			$(".swiperight").on('swiperight', function(event){
				event.stopImmediatePropagation();
				alert("You swiped right!");
			});
			
			$(".swipeleft").on('swipeleft', function(event){
				event.stopImmediatePropagation() 
				alert("You swiped left!");
			});
		});
</script>	
</div><!-- /page -->


</body>
</html>