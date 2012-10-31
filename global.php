<!DOCTYPE html> 
<html>

<head>
  <title>Dashboard</title> 
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
  
  <script type="text/javascript">
    function switchView(id, hideId) {
        document.getElementById(id).style.display = "block";
        document.getElementById(hideId).style.display = "none";
    }
  </script>


</head>
  
<body> 

<div data-role="page">
  <?php
     $title="emochi";
     include("header.php");
     ?>
  
	<fieldset data-role="controlgroup" data-type="horizontal" data-mini="true" class="ui-btn-right">
	  <input type="radio" name="radio-choice"
	     	 id="radio-choice-1" value="choice-1" checked="checked"
	     	 onclick="switchView('displayGlobalFeed', 'displayGlobalDashboard')"/>
	  <label for="radio-choice-1">Feed</label>
	  
	  <input type="radio" name="radio-choice"
	     	 id="radio-choice-2" value="choice-2"
	     	 onclick="switchView('displayGlobalDashboard', 'displayGlobalFeed')"/>
	  <label for="radio-choice-2">Dashboard</label>
	</fieldset>
	
	<div data-role="content">	
	
	<div id="displayGlobalFeed">
		<?php
		   include("globalfeed.php");
		   ?>
	</div> <!-- displayGlobalFeed -->
	
	<div id="displayGlobalDashboard">
		<?php
		   include("globaldashboard.php");
		   ?>
	</div>	<!-- displayGlobalDashboard -->
		
	</div> <!-- content -->
	
	<?php
	   $select1 = "ui-btn-active";
	   include("footer.php");
	   ?>
	
	</div><!-- /page -->

</body>
</html>
