<!DOCTYPE html> 
<html>

<head>
	<title>Emotionly</title> 
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
  
  <div data-role="page">
    
    <div data-role="header">
      <h1>Log in</h1>
    </div><!-- /header -->
    
    <div data-role="content">
      <center>
      Welcome to Emotionly!<br>
      Please log in to start tracking your emotions!<br>
      <small><i>Any username and password combination is fine... for now!</small></i><br>
      </center>
      <form action="index.php" method="post">
	<label for="username">Username:</label>
	<input type="text" name="username" id="username">
	<label for="password">Password:</label>
	<input type="password" name="password" id="password">
        <input type="submit" value="Login">
      </form>
   
    </div><!-- /content -->
    
    </script>
  </div><!-- /page -->
  
</body>
</html>
