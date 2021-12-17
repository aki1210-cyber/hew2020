$(function(){

    function dispLoading(msg){
        // 引数なしの場合、メッセージは非表示。
        if(msg === undefined ) msg = "";
        
        // 画面表示メッセージを埋め込み
        var innerMsg = "<div id='innerMsg'>" + msg + "</div>";  
        
        // ローディング画像が非表示かどうかチェックし、非表示の場合のみ出力。
        if($("#nowLoading").length == 0){
          $("body").append("<div id='nowLoading'>" + innerMsg + "</div>");
        }
      }

      function removeLoading(){
        $("#nowLoading").remove();
      }  

    $("#mailsend").click(function(){
        const sendmail = $('#email').val();
        $("#signup_close").click();
        dispLoading("処理中...");
    
        $.ajax({
            url:'./signup/signsend.php',
            type:'POST',
            data:{
                'sendmail':sendmail
            }
        })
        .done(data=>{
            let vo = JSON.parse(data);
            $("body").append("<p class='submit_message'></p>");
            $('.submit_message').html(vo.usermail+"への送信が"+vo.text+"しました。");
        })
        .fail(data=>{
            console.log(data);
            $("body").append("<p class='submit_message'></p>");
            $('.submit_message').html(vo.usermail+"への送信が"+vo.text+"しました。");
            // msg = JSON.parse(data);
            // console.log(msg.usermail+"へ"+msg.text+"しました。");
        })
        .always( function(data) {
            // Loading 画像を消す
            removeLoading();
          }); 

    })
})
