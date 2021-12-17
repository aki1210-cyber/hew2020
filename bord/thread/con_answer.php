<?php
session_start();
if($_POST){
    $thread_id = $_POST['thread_id'];
    //
    $member_id = $_SESSION['USER_ID'];
    $comment = $_POST['comment'];
    $post_at = date("Y/m/d H:i:s");

    try {
        $dbh = new PDO('mysql:host=127.0.0.1; dbname=cocno; charset=utf8', 'root');
        $sql = "SELECT MAX(id) FROM answers WHERE threads_id = :threads_id";
        $statement = $dbh->prepare($sql);
        $statement->bindparam(':threads_id',$thread_id);
        $statement->execute();
        $row = $statement->fetch(PDO::FETCH_ASSOC);

        $ans_id = $row['MAX(id)'] + 1;//ans_id

        $sql = "INSERT INTO answers(threads_id,id,members_id,comment,post_at) VALUES (:threads_id,:id,:members_id,:comment,:post_at)";
        $statement = $dbh->prepare($sql);
        $statement->bindparam(':threads_id',$thread_id);
        $statement->bindparam(':id',$ans_id);
        $statement->bindparam(':members_id',$member_id);
        $statement->bindparam(':comment',$comment);
        $statement->bindparam(':post_at',$post_at);
        $flag = $statement->execute();

        if($flag){
          header('Location:thread.php?bord=' . $_POST['thread_cate_id'] . '&pageId=' .$thread_id);
          exit;
        }
  
      } catch (\Exception $e) {
        echo $e->getMessage() . PHP_EOL;
      }
}
echo $ans_id;
?>