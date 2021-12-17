<?php 
session_start();
?>
    <?php include("../common/header.php"); ?>

   

<div class="container">

    <!-- <form class="th_search_form" action="">
        <input type="text" placeholder="検索欄">
        <input type="image" src="\cocno\images\serchicon.png">
    </form> -->


    <div class="shadowbox">
    <div class="tab_wrap">
        <ul class="tab_ul">
            <li><a id="tabA" class="tab" href="">質問</a></li>
            <li><a id="tabB" class="tab" href="">企業</a></li>
            <li><a id="tabC" class="tab" href="">リクエスト</a></li>
            <li><a class="tab" href="newthread.php">新規投稿</a></li>
        </ul>
    </div>




    


    <div id="content">

        <?php
        try {
        $dbh = new PDO('mysql:host=127.0.0.1; dbname=cocno; charset=utf8', 'root');

        $sql = "SELECT * FROM threads WHERE members_id LIKE '_____' && boards_id = 1 ORDER BY id DESC";
        $statement = $dbh->prepare($sql);
        $statement->execute();
        $row = $statement->fetchAll(PDO::FETCH_ASSOC);

        echo "<div id='th_wrapA' class='th_wrap'>";
          
            foreach($row as $value){
            $sql = "SELECT * FROM students WHERE id = :id";
            $statement = $dbh->prepare($sql);
            $statement->bindparam(':id',$value["members_id"]);
            $statement->execute();
            $baz = $statement->fetchAll(PDO::FETCH_ASSOC);

                foreach($baz as $value2){
                    echo "<div class='th_box'>
                                <a class='th_img_box' href='thread/thread.php?bord=".$value['boards_id']."&pageId=".$value['id']."'>
                                    <img src='../images/user/$value2[image]'>
                                    <span class='title'>",$value["title"],"</span>
                                </a>";

                    $dt = date('Y年m月d日H時i分s',strtotime($value["create_at"]));
                    echo "<div class='rside'>
                            <span class='name'>",$value2["name"],"</span>
                            <span class='post_time'>",$dt,"</span>
                        </div>
                        </div>";
                }
                

            // echo $value["title"];
                
            };

        echo "</div>";


        echo "<div id='th_wrapB' class='th_wrap'>";
    
            $sql = "SELECT * FROM threads WHERE members_id LIKE 'CO%' && boards_id = 2 ORDER BY id DESC";
            $statement = $dbh->prepare($sql);
            $statement->execute();
            $row = $statement->fetchAll(PDO::FETCH_ASSOC);

        
            foreach($row as $value){
            $sql = "SELECT * FROM companies WHERE id = :id";
            $statement = $dbh->prepare($sql);
            $statement->bindparam(':id',$value["members_id"]);
            $statement->execute();
            $baz = $statement->fetchAll(PDO::FETCH_ASSOC);

              foreach($baz as $value2){
                echo "<div class='th_box'><div class='th_img_box'><a href='thread/thread.php?bord=".$value['boards_id']."&pageId=".$value['id']."'>
                <img src='../images/company/$value2[image]'><span class='title'>",$value["title"],"</span></a></div>";
                
                $dt = date('Y年m月d日H時i分s',strtotime($value["create_at"]));
                echo "<div class='rside'>
                        <span class='name'>",$value2["company"],"</span>
                        <span class='post_time'>",$dt,"</span>
                        </div>
                      </div>";

                
            }

            //   echo $value["title"];

            };

        echo "</div>";
          


        echo "<div id='th_wrapC' class='th_wrap'>";
        
            $sql = "SELECT * FROM threads WHERE members_id LIKE '_____' && boards_id = 3 ORDER BY id DESC";
            $statement = $dbh->prepare($sql);
            $statement->execute();
            $row = $statement->fetchAll(PDO::FETCH_ASSOC);

        
            foreach($row as $value){
                $sql = "SELECT * FROM students WHERE id = :id";
                $statement = $dbh->prepare($sql);
                $statement->bindparam(':id',$value["members_id"]);
                $statement->execute();
                $baz = $statement->fetchAll(PDO::FETCH_ASSOC);

                foreach($baz as $value2){
                    // echo "<div class='th_box'>
                    //     <a href='thread/thread.php?bord=".$value['boards_id']."&pageId=".$value['id']."'>
                    //     <img src='../images/$value2[image]'><span class='title'>",$value["title"],"</a></span>";
                    // $dt = date('Y年m月d日H時i分s',strtotime($value["create_at"]));

                    echo "<div class='th_box'><div class='th_img_box'><a href='thread/thread.php?bord=".$value['boards_id']."&pageId=".$value['id']."'>
                    <img src='../images/user/$value2[image]'>
                    <span class='title'>",$value["title"],"</span></a></div>";

                    $dt = date('Y年m月d日H時i分s',strtotime($value["create_at"]));
                    echo "<div class='rside'>
                            <span class='name'>",$value2["name"],"</span>
                            <span class='post_time'>",$dt,"</span>
                        </div>
                        </div>";
            }

         
          
            };

        echo "</div>";

            

          
        } catch (\Exception $e) {
            echo $e->getMessage() . PHP_EOL;
        }

        ?><!--php-->

    </div>

    <!-- <input type="button" id="more" value="もっと見る"> -->
    </div><!--shadowbox-->
</div><!--container-->
    
</body>
</html>