/**
 * Created by Administrator on 2017/6/13.
 */
var AccountDetail={
    init: function () {

        this.ShowMsg();
        this.ModalShow();
        this.ModalHide();
        this.ModalSelect();
        this.SelectBox();
        this.SelectEvaluate();
    },
    ShowMsg: function () {
      //根据参数显示通用 球球 王者荣耀
      //根据参数显示页面内容
    },
    ModalShow: function () {
        $(".select-modal-show span").click(function () {
            $(".modal-meal").show();
            $("body").addClass("overflow-hidden");
        });
    },
    ModalHide: function () {
        $(".close-modal-meal").click(function () {
            $(this).parent(".modal-meal").hide();
            $("body").removeClass("overflow-hidden");
        });
    },
   ModalSelect: function () {
       $(".select-meal-content>div").click(function () {
           $(".select-modal-show span").html($(this).html());
           $(this).parents(".modal-meal").hide();
           $("body").removeClass("overflow-hidden");
       });
    },
    SelectBox: function () {
        //切换评价 商品信息。。。
        $(".account-detail-title>div").click(function () {
            $(this).addClass("active").siblings(".active").removeClass("active");
            $(".account-detail-content ."+$(this).data("item")).show().siblings().hide();
            if($(this).hasClass("zuhao-content")){
                var ow = $(".content-3-front").css("height").slice(0,-2); //上传图片的高
                $(".content-3-back").css("height",ow-10+"px");
            }

        });
    },
    SelectEvaluate: function () {
        //选择评价
        //$(".account-detail-content").on("click",".content-2-title>div", function () {
        //    $(this).addClass("active").siblings(".active").removeClass("active");
        //    $(".account-detail-content ."+$(this).data("item")).show().siblings().hide();
        //});
        $(".content-2-title>div").click(function () {
            $(this).addClass("active").siblings(".active").removeClass("active");
            $(".account-detail-content ."+$(this).data("item")).show().siblings().hide();
        });
    }


};

$(function () {
    AccountDetail.init();
})