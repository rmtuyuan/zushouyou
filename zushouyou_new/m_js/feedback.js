/**
 * Created by Administrator on 2017/6/9.
 */
$(function () {

    $(".textarea-box>textarea").keyup(function () {
        var leng = $(this).val().length;
        if (leng <= 300) {
            $(".m-count").html(leng)
        }

    });
})