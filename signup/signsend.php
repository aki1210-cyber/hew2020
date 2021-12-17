    <?php
    require("u_fun.php");
    if($_POST){
       

            $mail = $_POST['sendmail'];
            $body = "http://localhost/cocno/signup/user.php";
        
        $title = "登録用URL";
    
        mb_language("Japanese");
        mb_internal_encoding("UTF-8");
      
        
    
        if(mb_send_mail($mail,$title,$body))
        {
            $array = array("usermail"=>$mail,"text"=>"成功");
            print json_encode($array);
        }
        else
        {
            $array = array("usermail"=>$_POST['sendmail'],"text"=>'失敗');
            print json_encode($array);
        }
    }
    
    ?>



