<?php 
session_start();
require('../common/header.php'); 
require('../signup/u_fun.php');

?>

<div class="container">
        <?php
        if($_POST){


        Vinput($_POST['title'],'title');
        Vinput($_POST['bord_id'],'bord_id');
        Vinput($_POST['comment'],'comment');

        if(isset($_SESSION['error'])){
            header('Location:newthread.php');
            exit;
        }

        $_SESSION['title'] = $_POST['title'];
        $_SESSION['comment'] = $_POST['comment'];

      


        
        $title = $_POST['title'];

        switch($_POST['bord_id']){
            case 1:
                $category = "質問";
                break;
            case 2:
                $category = "企業";
                break;
            case 3:
                $category = "リクエスト";
                break;
            
            default:
            break;
        }

        $comment = $_POST['comment'];

    }
        ?>

        <div class="con_thread_box">
            <p class="con_title">タイトル：<?= $title ?></p>
            <p class="con_category">カテゴリー：<?= $category?></p>
            <p class="con_textbox1">内容</p>
            <p class="con_textbox2"><?= nl2br($comment) ?></p>
        </div>
        <form action="cre_thread.php" method="POST">
        <input type="hidden" name="title" value="<?= $_POST['title'] ?>">
        <input type="hidden" name="bord_id" value="<?= $_POST['bord_id'] ?>">
        <input type="hidden" name="comment" value="<?= $_POST['comment'] ?>">
        <div class="con_buttons">
        <input class="con_submit" type="submit" value="登録">
        <a class="con_repage" href="newthread.php">修正する</a>
        </div>

        </form>
       
        </div><!--container-->
    </body>
    </html>
</body>
</html>