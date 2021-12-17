<?php
session_start();
$error_message = '';
if( isset($_SESSION['error']) ){
    $error_message = $_SESSION['error'];
    unset($_SESSION['error']);
}
?>
<form method="post" action="user_confirm.php">
    ID:<input type="text" name="id"><br>
    <?php echo $error_message ?>
    <input type="submit">
</form>


