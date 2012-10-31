<!DOCTYPE html>

<script type="text/javascript">
  function presentStatus() {
  $.mobile.changePage( "addStatus.php", { transition: "slideup"} );
  }
  
  function closeStatus(save) {
      if (save) {
          var request = new XMLHttpRequest();
          request.open("POST", "http://localhost:3000/addStatus", false);
          request.send();
          if (request.status === 200) {
              console.log(request.responseText);
          }
      }
      $.mobile.changePage( "personal.php", { transition: "slidedown"} );
  }

  function presentSettings() {
  $.mobile.changePage( "settings.php", {transition: "slide"} );
  }
</script>

  <?php
     if ($isModal) {
     ?>
  
  <div data-role="header">
    <a data-icon="delete" onclick="closeStatus(0)">Cancel</a>
    <a data-icon="check" data-theme="b" onclick="closeStatus(1)">Add</a>
    
    <?php
       } else {
       ?>
    
    <div data-role="header" data-position="fixed" data-id="sameheader">
      <a data-icon="gear"  onclick="presentSettings()">Settings</a>
      <a data-icon="plus" data-theme="b" onclick="presentStatus()">Add</a>
      
      <?php
	 }
	 ?>
      
      <h1><?= $title; ?></h1>
      
    </div>
    
