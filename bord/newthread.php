
<?php 

session_start(); 
require('../common/header.php');

if(isset($_SESSION['error']) ){
    $error_message = $_SESSION['error'];
    unset($_SESSION['error']);
}

?>

<body>
    <form class="newthread_form" action="con_thread.php" method="POST">
            <div class="newthread_box">
                <div class="newthread_title"><p>タイトル：</p><input type="text" name="title" maxlength='20' value="<?php if(!empty($_SESSION['title'])) echo $_SESSION['title'] ?>"></div>

                <?php if(!empty($error_message['title'])) echo $error_message['title'] ?>
                <div class="newthread_category">
                    <p>カテゴリー：</p>
                    <select class="newthread_select" name="bord_id" id="">
                        <option value="">未選択&#9660;</option>
                        <option value="1">質問</option>
                        <option value="2">企業</option>
                        <option value="3">リクエスト</option>
                    </select>
                </div>
            </div>

            <div class="newthread_textbox">
            <?php if(!empty($error_message['bord_id'])) echo $error_message['bord_id']?>
            <textarea placeholder="内容を入力してください" name="comment" id="" cols="100" rows="20" maxlength="3000"><?php if(!empty($_SESSION['comment'])) echo $_SESSION['comment'] ?></textarea><br>
            <?php if(!empty($error_message['comment'])) echo $error_message['comment']?>
            </div>
            <input id="newthread_submit" type="submit" value="投稿">
    </form>
</body>
</html>