$(function(){   

   $(".th_wrap .th_box").hide();
   $("#th_wrapA .th_box").show();


   $("#tabA").click(function(){
    $(".th_wrap .th_box").hide();
    $("#th_wrapA .th_box").show();
    return false;
   })

   $("#tabB").click(function(){
    $(".th_wrap .th_box").hide();
    $("#th_wrapB .th_box").show();
    return false;
   })

   $("#tabC").click(function(){
    $(".th_wrap .th_box").hide();
    $("#th_wrapC .th_box").show();
    return false;
   })

});