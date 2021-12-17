<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script src="https://ajaxzip3.github.io/ajaxzip3.js" charset="UTF-8"></script>
    <title>Document</title>
    <?php
    session_start();

    $error_message = '';
if(isset($_SESSION['error']) ){
    $error_message = $_SESSION['error'];
    unset($_SESSION['error']);
}
    ?>
</head>
<body>
    <form action="u_con.php" method="POST">

    <input type="text" name="id" placeholder="学籍番号" value="<?php if(!empty($_SESSION['id'])) echo $_SESSION['id']; ?>">
    <?php if(isset($error_message['id'])) echo $error_message['id']; ?><br>

    <input type="text" name="password" placeholder="パスワード">
    <?php if(isset($error_message['password'])) echo $error_message['password']; ?><br>

    <input type="text" name="repassword" placeholder="確認用パスワード">
    <?php if(isset($error_message['repassword'])) echo $error_message['repassword']; ?><br>

    <input type="text" name="mail" placeholder="メールアドレス" value="<?php if(!empty($_SESSION['mail'])) echo $_SESSION['mail']; ?>">
    <?php if(isset($error_message['mail'])) echo $error_message['mail']; ?><br>

    <input type="text" name="remail" placeholder="確認用メールアドレス" value="<?php if(!empty($_SESSION['remail'])) echo $_SESSION['remail']; ?>">
    <?php if(isset($error_message['remail'])) echo $error_message['remail']; ?><br>

    <select name="school" id="school"> <!--school-->
        <option data-subgroup="" value="">未選択</option>
        <option data-subgroup="HAL" value="HAL">HAL</option>
        <option data-subgroup="MODE" value="MODE">MODE</option>
        <option data-subgroup="IKOU" value="IKOU">IKOU</option>
    </select>

    <select name="faculty" id="faculty"> <!--faculty-->
        <option data-group="" value="">未選択</option>
        <option data-group="HAL" data-subgroup="IT" value="IT">IT</option>
        <option data-group="HAL" data-subgroup="CG" value="CG">CG</option>
        <option data-group="HAL" data-subgroup="ゲーム" value="ゲーム">ゲーム</option>
        <option data-group="HAL" data-subgroup="ミュージック" value="ミュージック">ミュージック</option>
        <option data-group="HAL" data-subgroup="カーデザイン" value="カーデザイン">カーデザイン</option>
        <!-- HAL -->

        <option data-group="MODE" data-subgroup="ファッション" value="ファッション">ファッション</option>
        <option data-group="MODE" data-subgroup="ファッションビジネス" value="ファッションビジネス">ファッションビジネス</option>
        <option data-group="MODE" data-subgroup="インテリア" value="インテリア">インテリア</option>
        <option data-group="MODE" data-subgroup="グラフィック" value="グラフィック">グラフィック</option>
        <option data-group="MODE" data-subgroup="メイク・ネイル" value="メイク・ネイル">メイク・ネイル</option>
        <option data-group="MODE" data-subgroup="ヘアメイク" value="ヘアメイク">ヘアメイク</option>
        <!-- MODE -->

        <option data-group="IKOU" data-subgroup="救急・臨床" value="救急・臨床">救急・臨床</option>
        <option data-group="IKOU" data-subgroup="看護" value="看護">看護</option>
        <option data-group="IKOU" data-subgroup="歯科医療" value="歯科医療">歯科医療</option>
        <option data-group="IKOU" data-subgroup="リハビリテーション" value="リハビリテーション">リハビリテーション</option>
        <option data-group="IKOU" data-subgroup="スポーツ" value="スポーツ">スポーツ</option>
        <option data-group="IKOU" data-subgroup="東洋医療" value="東洋医療">東洋医療</option>
        <option data-group="IKOU" data-subgroup="福祉" value="福祉">福祉</option>
        <!-- IKOU -->
    </select>

    <select name="subject" id="subject"><!--subject-->
        <option data-group="" value="">未選択</option>
        <option data-group="IT" value="高度情報処理">高度情報処理</option>
        <option data-group="IT" value="WEB">WEB</option>
    
        <option data-group="CG" value="CG映像">CG映像</option>
        <option data-group="CG" value="グラフィックデザイン">グラフィックデザイン</option>
        <option data-group="CG" value="アニメ・イラスト">アニメ・イラスト</option>
    
        <option data-group="ゲーム" value="ゲームデザイン">ゲームデザイン</option>
        <option data-group="ゲーム" value="ゲーム企画">ゲーム企画</option>
        <option data-group="ゲーム" value="ゲーム制作">ゲーム制作</option>
        
        <option data-group="ミュージック" value="ミュージック">ミュージック</option>
        <option data-group="カーデザイン" value="カーデザイン">カーデザイン</option>
        <!-- HAL -->
    
        <option data-group="ファッション" value="ファッションデザイン高度専門士">ファッションデザイン高度専門士</option>
        <option data-group="ファッション" value="ファッションビジネス・テクノロジー">ファッションビジネス・テクノロジー</option>

        <option data-group="ファッションビジネス" value="ファッションビジネス">ファッションビジネス</option>

    
        <option data-group="インテリア" value="インテリア">インテリア</option>
    
        <option data-group="グラフィック" value="グラフィック">グラフィック</option>
    
        <option data-group="メイク・ネイル" value="メイクアップ・ネイル">メイクアップ・ネイル</option>
    
        <option data-group="ヘアメイク" value="ヘアメイク・アーティスト">ヘアメイク・アーティスト</option>
        <option data-group="ヘアメイク" value="美容">美容</option>
        <option data-group="ヘアメイク" value="美容・通信">美容・通信</option>
        <!-- MODE -->
    
        <option data-group="救急・臨床" value="臨床工学">臨床工学</option>
        <option data-group="救急・臨床" value="救急救命">救急救命</option>
        <option data-group="救急・臨床" value="臨床工学技士">臨床工学技士</option>
    
        <option data-group="看護" value="高度専門士看護">高度専門士看護</option>
        <option data-group="看護" value="高度看護保健">高度看護保健</option>
        <option data-group="看護" value="実践看護">実践看護</option>
        <option data-group="看護" value="助産師">助産師</option>
    
        <option data-group="歯科衛生" value="歯科衛生">歯科衛生</option>
    
        <option data-group="理学療法" value="理学療法">理学療法</option>
        <option data-group="理学療法" value="作業療法">作業療法</option>
        <option data-group="理学療法" value="言語聴覚">言語聴覚</option>
    
        <option data-group="スポーツ" value="アスレティックトレーナー">アスレティックトレーナー</option>
        <option data-group="スポーツ" value="スポーツトレーナー">スポーツトレーナー</option>
    
        <option data-group="東洋医療" value="鍼灸">鍼灸</option>
        <option data-group="東洋医療" value="柔道整復">柔道整復</option>
    
        <option data-group="福祉" value="介護福祉">介護福祉</option>
        <option data-group="福祉" value="精神保健福祉士">精神保健福祉士</option>
        <option data-group="福祉" value="社会福祉士">社会福祉士</option>
        <!-- IKOU -->
    </select>

    <?php if(isset($error_message['school']) || isset($error_message['faculty']) || isset($error_message['subject'])) echo "未選択です"; ?><br>
   

    <select name="s_year">
        <?php
            $maxyear = date('Y');
            $minyear = $maxyear - 4;    
            for($minyear; $minyear <= $maxyear; $minyear++){
               
                print "<option value='$minyear'>".$minyear."</option>";
            }
        ?>
    </select>

    <select name="s_month">
        <option value="04">04</option>
        <option value="10">10</option>
    </select><br>

    <input type="text" name="name" placeholder="お名前" value="<?php if(!empty($_SESSION['name'])) echo $_SESSION['name']; ?>">
    <?php if(isset($error_message['name'])) echo $error_message['name']; ?><br>

    <input type="text" name="name_kana" placeholder="お名前(カナ)" value="<?php if(!empty($_SESSION['name_kana'])) echo $_SESSION['name_kana']; ?>">
    <?php if(isset($error_message['name_kana'])) echo $error_message['name_kana']; ?><br>

    <select name="b_year" id="">
        <?php
        $minyear2 = $maxyear - 50;
            for($minyear2; $minyear2 <= $maxyear; $minyear2++){
                print "<option value='$minyear2'>".$minyear2."</option>";
            }
        ?>
    </select>

    <select name="b_month" id="">
        <?php
            $minmonth = 1;
            $maxmonth = 12;
            for($minmonth; $minmonth <= $maxmonth; $minmonth++){
                echo "<option value='".sprintf('%02d',$minmonth)."'>".sprintf('%02d',$minmonth)."</option>";
            }
        ?>
    </select>

    <select name="b_day" id="">
        <?php
            $minday = 1;
            $maxday = 31;
            for($minday; $minday <= $maxday; $minday++){
                print "<option value='".sprintf('%02d',$minday)."'>".sprintf('%02d',$minday)."</option>";
            }
        ?>
    </select><br>

    <input type="radio" id="gen1" name="gender" value="男性" checked="checked"><label for="gen1">男性</label>
    <input type="radio" id="gen2" name="gender" value="女性"><label for="gen2">女性</label>
    <input type="radio" id="gen3" name="gender" value="その他"><label for="gen3">その他</label><br>


    <select name="pref">
        <option value="" selected>都道府県</option>
        <option value="北海道">北海道</option>
        <option value="青森県">青森県</option>
        <option value="岩手県">岩手県</option>
        <option value="宮城県">宮城県</option>
        <option value="秋田県">秋田県</option>
        <option value="山形県">山形県</option>
        <option value="福島県">福島県</option>
        <option value="茨城県">茨城県</option>
        <option value="栃木県">栃木県</option>
        <option value="群馬県">群馬県</option>
        <option value="埼玉県">埼玉県</option>
        <option value="千葉県">千葉県</option>
        <option value="東京都">東京都</option>
        <option value="神奈川県">神奈川県</option>
        <option value="新潟県">新潟県</option>
        <option value="富山県">富山県</option>
        <option value="石川県">石川県</option>
        <option value="福井県">福井県</option>
        <option value="山梨県">山梨県</option>
        <option value="長野県">長野県</option>
        <option value="岐阜県">岐阜県</option>
        <option value="静岡県">静岡県</option>
        <option value="愛知県">愛知県</option>
        <option value="三重県">三重県</option>
        <option value="滋賀県">滋賀県</option>
        <option value="京都府">京都府</option>
        <option value="大阪府">大阪府</option>
        <option value="兵庫県">兵庫県</option>
        <option value="奈良県">奈良県</option>
        <option value="和歌山県">和歌山県</option>
        <option value="鳥取県">鳥取県</option>
        <option value="島根県">島根県</option>
        <option value="岡山県">岡山県</option>
        <option value="広島県">広島県</option>
        <option value="山口県">山口県</option>
        <option value="徳島県">徳島県</option>
        <option value="香川県">香川県</option>
        <option value="愛媛県">愛媛県</option>
        <option value="高知県">高知県</option>
        <option value="福岡県">福岡県</option>
        <option value="佐賀県">佐賀県</option>
        <option value="長崎県">長崎県</option>
        <option value="熊本県">熊本県</option>
        <option value="大分県">大分県</option>
        <option value="宮崎県">宮崎県</option>
        <option value="鹿児島県">鹿児島県</option>
        <option value="沖縄県">沖縄県</option>
        <option value="海外">海外</option>
    </select>
    <?php if(isset($error_message['pref'])) echo $error_message['pref']; ?><br>


    <input type="submit" value="送信">
    </form>



    <form action="c_con.php" method="POST">
    <input type="text" name="mail" placeholder="HALtokyo@gmail.com" value="<?php if(!empty($_SESSION['mail'])) echo $_SESSION['mail']; ?>">
    <?php if(isset($error_message['mail'])) echo $error_message['mail']; ?><br>

    <input type="text" name="remail" placeholder="HALtokyo@gmail.com" >
    <?php if(isset($error_message['remail'])) echo $error_message['remail']; ?><br>

    <input type="text" name="company" placeholder="株式会社OOO">
    <?php if(isset($error_message['company'])) echo $error_message['company']; ?><br>

    <input type="text" name="name" placeholder="HAL太郎">
    <?php if(isset($error_message['name'])) echo $error_message['name']; ?><br>

    <input type="text" name="name_kana" placeholder="ハルタロウ">
    <?php if(isset($error_message['name_kana'])) echo $error_message['name_kana']; ?><br>

    <input type="text" name="department" placeholder="人事部">
    <?php if(isset($error_message['department'])) echo $error_message['department']; ?><br>

    <input type="tel" name="tel" placeholder="例：09011112222" value="<?php if(!empty($_SESSION['tel'])) echo $_SESSION['tel']; ?>">
    <?php if(isset($error_message['tel'])) echo $error_message['tel']; ?><br>

    <input type="text" name="zip21" size="4" maxlength="3" placeholder="000" value="<?php if(!empty($_SESSION['zip21'])) echo $_SESSION['zip21']; ?>"> － <input type="text" name="zip22" size="5" maxlength="4" onKeyUp="AjaxZip3.zip2addr('zip21','zip22','addr21','addr21');" placeholder="0000" value="<?php if(!empty($_SESSION['zip22'])) echo $_SESSION['zip22']; ?>">
    <?php if(isset($error_message['pos_error'])) echo $error_message['pos_error']; ?><br>

    <input type="text" name="addr21" size="40" placeholder="住所" value="<?php if(!empty($_SESSION['addr21'])) echo $_SESSION['addr21']; ?>"><br>
    <input type="submit" value="送信">
    </form>
    







<script>
        setHierarchySelectEvent('#school', '#faculty');
        setHierarchySelectEvent('#faculty', '#subject');
        //セレクトボックスの初期値
        $('#school').val('1').change();
        $('#faculty').val('2').change();
        $('#subject').val('2').change();

        function setHierarchySelectEvent(parentSelect, childSelect){
            var initCategorySmallHtml = $(childSelect).html();
            $(parentSelect).change(function(){
                if( 1 < $(this).find('option:selected').length ){//複数選択時に処理
                    $(childSelect).find("option").each(function(index, element){
                        $(element).remove();
                    });
                }else{
                    var subgroup =  $(this).find('option:selected').attr('data-subgroup');
                    $(childSelect).html(initCategorySmallHtml);
                    $(childSelect).find("option").each(function(index, element){
                        var group = $(element).attr('data-group');
                        if( group ){
                            if( subgroup == group ){
                                //$(element).css('display', 'block');//IEではoptionタグに対してdisplayは効かないため
                            }else{
                                //$(element).css('display', 'none');//IEではoptionタグに対してdisplayは効かないため
                                $(element).remove();
                            }
                        }
                    });
                }
                $(childSelect).val('').change();//未選択時の値は''じゃない場合は書き換えてね
            });
        }
    </script>
</body>
</html>