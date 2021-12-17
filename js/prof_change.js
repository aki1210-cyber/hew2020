$(function(){
    $("#prof_change_form").hide();
    $("#mask").hide();

    $("#prof_change_button").click(function(){
        $("#mask").fadeIn();
        $("#prof_change_form").fadeIn();

        $("#close").click(function(){
            $("#mask").fadeOut();
            $("#prof_change_form").fadeOut();
        })
    })


    $("#prof_p2_box").hide();
    $("#prof_p3_box").hide();
    $("#prof_p4_box").hide();
    $("#prof_p5_box").hide();

    $("#prof_p1").click(function(){
        $("#prof_p1_box").show();
        $("#prof_p2_box").hide();
        $("#prof_p3_box").hide();
        $("#prof_p4_box").hide();
        $("#prof_p5_box").hide();
    })

    $("#prof_p2").click(function(){
        $("#prof_p1_box").hide();
        $("#prof_p2_box").show();
        $("#prof_p3_box").hide();
        $("#prof_p4_box").hide();
        $("#prof_p5_box").hide();
    })

    $("#prof_p3").click(function(){
        $("#prof_p1_box").hide();
        $("#prof_p2_box").hide();
        $("#prof_p3_box").show();
        $("#prof_p4_box").hide();
        $("#prof_p5_box").hide();
    })
    
    $("#prof_p4").click(function(){
        $("#prof_p1_box").hide();
        $("#prof_p2_box").hide();
        $("#prof_p3_box").hide();
        $("#prof_p4_box").show();
        $("#prof_p5_box").hide();
    })

    $("#prof_p5").click(function(){
        $("#prof_p1_box").hide();
        $("#prof_p2_box").hide();
        $("#prof_p3_box").hide();
        $("#prof_p4_box").hide();
        $("#prof_p5_box").show();
    })

})