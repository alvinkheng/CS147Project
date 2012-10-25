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
	  <h2>What's up?</h2> <br>
	  <form>
	    <table border="1">
	      <tr>
		<td>:)</td>
		<td>:|</td>
		<td>:(</td>
	      </tr>
	      <tr>
		<td>
		  Status: <input type="text" name="status">
		</td>
	      </tr>
	      <tr>
		<td>
		  <input type="submit" name ="submit">
		</td>
	      </tr>
	    </table>
	  </form>
	</body>
</html>
