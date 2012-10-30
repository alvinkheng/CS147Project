<!DOCTYPE html>

<script type="text/javascript">
  function presentStatus() {
  $.mobile.changePage( "addStatus.php", { transition: "slideup"} );
  }

  function closeStatus() {
  $.mobile.changePage( "personal.php", { transition: "slidedown"} );
  }
</script>

<div data-role="header" data-position="fixed" data-id="sameheader">
  <?php
     if ($isModal) {
     ?>
  <a data-icon="delete" onclick="closeStatus()">Cancel</a>
  <?php
     }
     ?>
  <h1><?= $title; ?></h1>
  
  <?php
     if ($isModal) {
     ?>
  <a data-icon="check" data-theme="b" onclick="closeStatus()">Add</a>
  <?php
     } else {
     ?>
  <a data-icon="plus" data-theme="b"
  class="ui-btn-right" onclick="presentStatus()">Add</a>
  <?php
     }
     ?>   
  
</div><!-- /header -->
