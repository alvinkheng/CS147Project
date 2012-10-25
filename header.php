<!DOCTYPE html>
<div data-role="header">
  <?php
     if ($isModal) {
     ?>
  <a href="index.php" data-icon="delete">Cancel</a>
  <?php
     }
     ?>
  <h1><?= $title; ?></h1>
  
  <?php
     if ($isModal) {
     ?>
  <a href="index.php" data-icon="check" data-theme="b">Save</a>
  <?php
     }
     ?>   
  
</div><!-- /header -->
