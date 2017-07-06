var personal_msg = {
    init: function () {
        this.ModalShow();
        this.ModalHide();
        this.ModalSelect();
        this.selectAdd();
        this.updataImg();
     
    },
    ModalShow: function () {
        $('.personal-msg-main').on("click", ".modal-show", function () {
            $("body").addClass("overflow-hidden");
            console.log($(this).data("item"))
            $("." + $(this).data("item")).show().siblings("div").hide().parent('.modal-content').show().siblings(".modal-content").hide();
            $(".modal-select").show();
        });
    },
    ModalHide: function () {
        $(".close-modal").click(function () {
            $(this).parents(".setting-modal").hide();
            $("body").removeClass("overflow-hidden");
            // $(".modal-content").hide();
            $('.modal-content-front').css("left", "0");
        });
    },
    ModalSelect: function () {
        $(".modal-content-mid").on("click", ".modal-1>p", function () {
            var html = $(this).html();
            $("." + $(this).parents(".modal-1").data("item")).html(html);
            $(this).parents(".setting-modal").hide();
            $("body").removeClass("overflow-hidden");
        });
    },
    add_text: "",
    selectAdd: function () {
        $(".modal-content-btm").on("touchstart click", "p", function () {
            personal_msg.add_text += $(this).html() + " ";
            $(this).addClass("active").siblings().removeClass("active");
            if ($(this).parent().hasClass("modal-content-front")) {
                $(this).parent('.modal-content-front').siblings(".modal-content-back").show();
                $(this).parent('.modal-content-front').css("left", "-100%");
                //根据参数 更新内容

            } else {

                $(".add-select").html(personal_msg.add_text);
                $(this).parents(".setting-modal").hide();
                $("body").removeClass("overflow-hidden");
                $('.modal-content-front').css("left", "0");
                personal_msg.add_text = "";

            }
        });
    },
    updataImg: function () {
        //上传图片 显示图片
        $("#user_logo_file").change(function () {

            var fileObj = this.files[0]; // 获取文件对象
            var FileController = "http://192.168.12.106:8080/tengda_crm/customer/saveCpic.do"; // 接收上传文件的后台地址
            // FormData 对象
            var form = new FormData();
            form.append("customer_id", "ff422a979b1b43b6ab26d923d3e25e0c"); // 可以增加表单数据
            form.append("file", fileObj); // 文件对象
            // XMLHttpRequest 对象
            var xhr = new XMLHttpRequest();
            xhr.open("post", FileController, true);
            xhr.onreadystatechange = function (data) {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        // alert("成");
                        var json_1 = JSON.parse(data.currentTarget.responseText);
                        // console.log(data)
                        $("#user_logo_file").siblings("img").attr("src", json_1.picurl);
                        // http://192.168.12.106:8080/photo20170616/35a7b57835ca4160885f861cbf926aa0.png
                    } else {
                        alert("失败");
                        // console.log(data)
                    }
                }
            };
            xhr.send(form);
            xhr.onload = function () {
                // 
            };

        });
        //     var imgPath = $(this).val();
        //     var form_1 = new FormData();

        //     //console.log(imgPath)
        //     if (imgPath == "") {
        //         alert("请选择上传图片！");
        //         return;
        //     }
        //     //判断上传文件的后缀名
        //     var strExtension = imgPath.substr(imgPath.lastIndexOf('.') + 1);
        //     if (strExtension != 'jpg' && strExtension != 'gif' &&
        //         strExtension != 'png' && strExtension != 'bmp') {
        //         alert("请选择图片文件");
        //         return;
        //     } else {
        //         var my_files=this.files
        //         console.log(this.files[0]);
        //         form_1.append("customer_id", "5b22ab62daaa4967a2d8b25039496a7e"); 
        //         form_1.append("file", this.files[0]);   
        //         var imgUrl = window.URL.createObjectURL(this.files[0]);
        //        $(this).siblings("img").attr("src",imgUrl);
        //     }
        //     $.ajax({
        //        type: "POST",
        //        url: "http://192.168.12.106:8080/tengda_crm/customer/saveCpic1.do",
        //        data: form_1,
        //        cache: false,
        //        success: function(data) {
        //            alert("上传成功");

        //        },
        //        error: function(XMLHttpRequest, textStatus, errorThrown) {
        //            alert("上传失败，请检查网络后重试");
        //        }
        //     });
        // });

    }

};

personal_msg.init();