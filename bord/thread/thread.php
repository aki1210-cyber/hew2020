
    <?php
    session_start();
    $bord = $_GET['bord'];

    $pageId = $_GET['pageId'];

    switch($bord){
        case 1:
            $bord = "質問";
            break;
        case 2:
            $bord = "企業";
            break;
        case 3:
            $bord = "リクエスト";
            break;
        default:
        break;
    }
    //パラメータで受け取った値を文字列に変化

    try {
        $dbh = new PDO('mysql:host=127.0.0.1; dbname=cocno; charset=utf8', 'root');

            if($_GET['bord'] != 2){
                $sql = "SELECT name,id FROM students WHERE id = (SELECT members_id FROM threads WHERE id = :pageid)";
                $statement = $dbh->prepare($sql);
                $statement->bindparam(':pageid',$pageId);
                $statement->execute();
                $row = $statement->fetch(PDO::FETCH_ASSOC);
                //質問、リクエスト掲示板の、投稿者名を取得する
                
                $sql = "SELECT title,comment,post_at FROM threads a JOIN answers b WHERE a.id = b.threads_id AND a.id = :pageId;";
                $statement = $dbh->prepare($sql);
                $statement->bindparam(':pageId',$pageId);
                $statement->execute();
                $baw = $statement->fetch(PDO::FETCH_ASSOC);
                //スレッドのタイトル、コメント、投稿日時を取得

            }else{
                $sql = "SELECT company,id FROM companies WHERE id = (SELECT members_id FROM threads WHERE id = :pageid)";
                $statement = $dbh->prepare($sql);
                $statement->bindparam(':pageid',$pageId);
                $statement->execute();
                $row = $statement->fetch(PDO::FETCH_ASSOC);
                //企業掲示板名の、投稿者名を取得
                
                $sql = "SELECT title,comment,post_at FROM threads a JOIN answers b WHERE a.id = b.threads_id AND a.id = :pageId;";
                $statement = $dbh->prepare($sql);
                $statement->bindparam(':pageId',$pageId);
                $statement->execute();
                $baw = $statement->fetch(PDO::FETCH_ASSOC);
                //スレッドのタイトル、コメント、投稿日時を取得
            }

            //上記スレッド部分取得

            $sql = "SELECT * FROM answers WHERE threads_id = :threads_id AND id > 0";
            $statement = $dbh->prepare($sql);
            $statement->bindparam(':threads_id',$pageId);
            $statement->execute();
            $th_ans = $statement->fetchAll(PDO::FETCH_ASSOC);
            //スレッドにおける返信リストを取得


        } catch (\Exception $e) {
          echo $e->getMessage() . PHP_EOL;
        }
    
    
    ?>
  

    <?php
    require("../../common/header.php"); 
    ?>
    
    <?php
    if($_GET['bord'] == 2){
        $thread_username = $row['company'];
        $thread_userid = $row['id'];
        $view_link = "../../mypage/mypage_company_view.php?id=$thread_userid";
    }else{
        $thread_username = $row['name'];
        $thread_userid = $row['id'];
        $view_link = "../../mypage/mypage_view.php?id=$thread_userid";
    }
    ?>

    <div class="container">

    <div class="thread_main_box">
        <div class="thread_line">
            <p class="thread_id">ID:<?= $_GET['pageId'];?></p>
            <p class="thread_title">タイトル:<?= $baw['title']; ?></p>
            <p class="thread_user">
                <a href="<?= $view_link; ?>"><?= $thread_username; ?></a>
            </p>
        </div>
            <p class="thread_time"><img class="thread_time_logo" src="../../images/site/tokei.png">投稿日時：<?= $baw['post_at']; ?></p>
            <p class="thread_comment"><?= nl2br($baw['comment']); ?>
    </div><!--thread_main_box-->

    <?php 

        foreach($th_ans as $val){//返信リストを格納
            if(is_numeric($val['members_id'])){
                $sql = "SELECT * FROM students WHERE id = :id";
                $statement = $dbh->prepare($sql);
                $statement->bindparam(':id',$val['members_id']);
                $statement->execute();
                $ans_info = $statement->fetch(PDO::FETCH_ASSOC);
                $ans_user_name = $ans_info['name'];
                $ans_id = $ans_info['id'];
                //質問、リクエストの場合返信者IDを元に、学生テーブルから返信者情報を取得
                //$val['comment']に返信コメント
                //$ans_nameに返信者名
                
            }else{
                $sql = "SELECT * FROM companies WHERE id = :id";
                $statement = $dbh->prepare($sql);
                $statement->bindparam(':id',$val['members_id']);
                $statement->execute();
                $ans_info = $statement->fetch(PDO::FETCH_ASSOC);
                $ans_user_name = $ans_info['company'].$ans_info['name'];
                $ans_id = $ans_info['id'];
            }
            echo "<div class='thread_ansuser_box'>";
            if(is_numeric($ans_id)){
                echo "<a href='../../mypage/mypage_view.php?id=".$ans_id."'><p class='thread_ansuser_name'>".$ans_user_name."</p></a>";
            }else{
                echo "<a href='../../mypage/mypage_company_view.php?id=".$ans_id."'><p class='thread_ansuser_name'>".$ans_user_name."</p></a>";
            }
            echo "<p class='thread_ansuser_comment'>".$val['comment']."</p></div>";
        }

    ?>

  

    
    <form class="thread_ans_form" action="con_answer.php" method="POST">
        <p>新規回答</p>
        <input type="hidden" name="thread_cate_id" value="<?php echo $_GET['bord']; ?>">
        <input type="hidden" name="thread_id" value="<?php echo $pageId ?>">
        <textarea name="comment" id="" cols="50" rows="10">
        </textarea><br>
        <input type="submit" value="送信">
    </form>
    </div>
    
</body>
</html>