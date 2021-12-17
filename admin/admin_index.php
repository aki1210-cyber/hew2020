<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/admin.css">
    <link rel="stylesheet" href="../css/reset.css">
    <title>Document</title>
    <script>
    var flag = true;
    function show(){
       var signup = document.getElementById("signup");
       var sub = document.getElementById("sub");

        if(flag){
            sub.style.display="block";
            flag = false;
        }else{
            sub.style.display="none";
            flag = true;
        }
    }
</script>

<?php
    session_start();
    $err = "";
    if(isset($_SESSION['error_message'])){
        $error_message = $_SESSION['error_message'];
        unset($_SESSION['error_message']);
    }
?>
</head>
<body>
    <div class="box_wrap">
        <div class="main">
            <div class="right">
                    <div class="wrap">
                    <?php  if(isset($error_message)) echo "<p class='er_message'>".$error_message."</p>"; ?>
                            <form class="login_form" action="admin_login.php" method="POST">
                                <input type="text" name="id" placeholder="USER_ID"><br>
                                <input type="text" name="password" placeholder="Password"><br>
                                <input type="submit" value="Login" name="admin"><br>
                            </form>
                    </div><!--wrap-->
            </div>
        </div>
    </div>
</body>
</html>
