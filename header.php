<!DOCTYPE html>

<script type="text/javascript">
  function presentStatus() {
  $.mobile.changePage( "addStatus.php", { transition: "slideup"} );
  }
  
  function closeStatus() {
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
    <a data-icon="delete" onclick="closeStatus()">Cancel</a>
    <a data-icon="check" data-theme="b" onclick="closeStatus()">Add</a>
    
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
    
