$(function(){
    var item;

    $("#cate_hal").click(function(){
        $(".cate1").show();
        $(".cate2").hide();
        $(".cate3").hide();
    })

    $("#cate_mode").click(function(){
        $(".cate1").hide();
        $(".cate2").show();
        $(".cate3").hide();
    })

    $("#cate_ikou").click(function(){
        $(".cate1").hide();
        $(".cate2").hide();
        $(".cate3").show();
    })
    
    // $(".top_cate").click(function(){
    //     var cate_id = Number($(".top_cate").val());
    //     console.log(cate_id);
    //     switch(cate_id){
    //         case 1:
    //             item = "HAL";
    //             $(".cate1").show();
    //             $(".cate2").hide();
    //             $(".cate3").hide();
    //             break;
    //         case 2:
    //             item = "MODE";
    //             $(".cate1").hide();
    //             $(".cate2").show();
    //             $(".cate3").hide();
    //             break;
    //         case 3:
    //             item = "IKOU";
    //             $(".cate1").hide();
    //             $(".cate2").hide();
    //             $(".cate3").show();
    //             break;
    //         default:
    //             item = "HAL";
    //             break;

    //     }


    // });
})