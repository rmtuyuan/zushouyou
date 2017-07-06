/**
 * Created by Administrator on 2017/6/8.
 */
var my_publish = {
    updataImgHt: null,
    init: function () {
        this.ModalHide();
        this.ModalShow();
        this.authorization();
        this.selectChoice();
        this.updataImgH();
        this.commRadFun();
        this.chkFun();
        this.limitShow();
        this.conmitPublishBtn();
        this.wzCommRadFun();
        this.pubishModalSelect();
        this.updataImg();
        this.delUpdataImg();
        this.updataImgModal();
        this.imgToolsClose();
        this.imgToolsDel();
        this.nextStep();
    },
    authorization: function () {
        //点击授权
        $(".authorization-btn").click(function (e) {
            e.preventDefault();
            $(this).parents(".not-authorization").hide().siblings(".red-authorization").show();

        });
    },
    ModalShow: function () {
        //点击弹出modal框
        $(".choice-item>div>span").click(function () {
            $("body").addClass("overflow-hidden");
            $("." + $(this).data("class")).show().siblings("div").hide();
            $(".modal-select").show();
        });
    },
    ModalHide: function () {
        //点击弹窗 关闭
        $(".close-modal").click(function () {
            $(this).parents(".modal-select").hide();
            $("body").removeClass("overflow-hidden");
        });
    },
    selectChoice: function () {
        //选择选项 关闭模态框  更新 文本
        $(".modal-content>div.choice-modal>p").click(function () {
            var text = $(this).html();
            $(this).parents(".modal-select").hide();
            $("body").removeClass("overflow-hidden");
            $(".choice-item  span." + $(this).parent("div").data("item")).html(text);
        });
    },
    nextStep: function () {
        //点击下一步
        $(".next-step.actived").click(function () {
            //满足添加 跳转
          
            $(this).parents(".red-authorization").hide().siblings(".next-publish-step").show();
        });
    },
    updataImgH: function () {
        //图片的高和宽设置一样
        var ow = $(".img-box-con>div").css("width"); //上传图片的高
        $(".img-box-con>div").css("height", ow);
        var ow2 = 2 * parseFloat(ow.slice(0, -2)) + 30;
        $(".img-box-con").css("max-height", ow2 + "px");
        this.updataImgHt = ow;
    },
    commRadFun: function () {
        //最下面单选按钮 动画效果
        $(".updata-limit .radio-box input[type='radio']").change(function () {
            if ($(this).is(":checked")) {
                $(this).siblings("span").addClass("active");
                $(this).parents(".radio-box").siblings(".radio-box").find("span").removeClass("active");
            } else {
                //$(this).siblings("span").removeClass("active");
            }
        });
    },
    wzCommRadFun: function () {
        //王者荣耀单选按钮
        $(".wz-limit-box .radio-box input[type='radio']").change(function () {
            if ($(this).is(":checked")) {
                $(this).siblings("span").addClass("active");
                $(this).parents(".radio-box").siblings(".radio-box").find("span").removeClass("active");
            } else {
                //$(this).siblings("span").removeClass("active");
            }
        });
    },
    limitShow: function () {
        //根据单选按钮 显示是否禁用
        $(".updata-limit .radio-box input[type='radio']").change(function () {
            if ($(this).hasClass("close-swith")) {
                $(".zuyong-count-box").removeClass("active").find("input").attr("disabled", "");
            } else {
                $(".zuyong-count-box").addClass("active").find("input").removeAttr("disabled");
            }
        });
    },
    chkFun: function () {
        //阅读协议checkbox
        $("#read_fabu_chk").change(function () {
            if ($(this).is(":checked")) {
                $(this).siblings("span").addClass("active");
            } else {
                $(this).siblings("span").removeClass("active");
            }
        });
    },
    conmitPublishBtn: function () {
        //点击提交按钮  弹出弹窗
        $(".fabu-btn-item>a.submit-btn").click(function (e) {
            e.preventDefault();
            $("body").addClass("overflow-hidden");
            $("." + $(this).data("class")).show().siblings("div").hide();
            $(".modal-select").show();
        });
    },
    pubishModalSelect: function () {
        //弹窗的确认发布 和 取消发布
        $(".other-modal-1>p>a").click(function (e) {
            e.preventDefault();
            if ($(this).hasClass("quit-publish")) {
                $(this).parents(".modal-select").hide();
                $("body").removeClass("overflow-hidden");
            } else {

            }
        });
    },
    updataImg: function () {
        //上传图片 显示图片
        $(".add-img-btn>input").change(function (e) {

            var imgPath = $(this).val();
            var imgUrl = window.URL.createObjectURL(this.files[0]);

            //console.log(imgPath)
            if (imgPath == "") {
                alert("请选择上传图片！");
                return;
            }
            //判断上传文件的后缀名
            var strExtension = imgPath.substr(imgPath.lastIndexOf('.') + 1);
            if (strExtension != 'jpg' && strExtension != 'gif' &&
                strExtension != 'png' && strExtension != 'bmp') {
                alert("请选择图片文件");
                return;
            } else {
                var div_html = `<div class="img-con" style="height:${my_publish.updataImgHt}">
                              <div><img src="${imgUrl}" alt=""/></div>
                            <span class="del-img"></span>
                        </div>`;
                $(".add-img-btn").before(div_html);
            }
            //$.ajax({
            //    type: "POST",
            //    url: "",
            //    data: {},
            //    cache: false,
            //    success: function(data) {
            //        //alert("上传成功");
            //        var div_html=`<div class="img-con" style="height:${my_publish.updataImgHt}">
            //                  <div><img src="${imgUrl}" alt=""/></div>
            //                <span class="del-img"></span>
            //            </div>`;
            //        $(".add-img-btn").before(div_html);
            //    },
            //    error: function(XMLHttpRequest, textStatus, errorThrown) {
            //        alert("上传失败，请检查网络后重试");
            //    }
            //});
        });

    },

    delUpdataImg: function () {
        //删除图片 代理
        $(".img-box-con").on("click", "span.del-img", function () {
            $(this).parent(".img-con").remove();
        });

    },
    updataImgModal: function () {
        //点击图片出来弹窗 显示原图 代理
        $(".img-box-con").on("click", ".img-con img", function () {
            var imgUrl = $(this).attr("src");
            $(this).parents(".img-con").addClass("active").siblings(".img-con").removeClass("active");
            //$("body").addClass("overflow-hidden");
            $('.img-container>img').attr("src", imgUrl);
            $(".big-img-modal").show();
        });
    },
    imgToolsClose: function () {
        //关闭 弹框
        $(".close-img-modal").click(function () {
            $(this).parents(".big-img-modal").hide();
            $("body").removeClass("overflow-hidden");
        });

    },
    imgToolsDel: function () {
        //删除图片 并关闭弹框
        $(".del-img-modal").click(function () {
            $(this).parents(".big-img-modal").hide();
            //$("body").removeClass("overflow-hidden");
            $(".img-con.active").remove();
        });
    }

};
my_publish.init();