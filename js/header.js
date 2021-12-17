$(function(){
    $("#pulldown_box").hide();

    $("#pulldown_icon").click(function(){
    $("#pulldown_box").animate({width:'toggle'});
    })

    $("#pulldown_close").click(function(){
        $("#pulldown_box").animate({width:'toggle'});
    
    })
})