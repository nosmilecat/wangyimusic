/**
 * Created by Administrator on 2017/2/20.
 */
$(document).ready(function () {
    $(".download-banner-button li").mouseenter(function () {
        $(this).css("opacity","1").siblings().css("opacity","0.5");
    });
    $(".download-banner-button").mouseleave(function () {
        $(this).find("li").css("opacity","1");
    });
    //轮播图代码
    //定义全局变量和定时器
    var i = 0 ;
    var timer;
    //用jquery方法设置第一张图片显示，其余隐藏
    $(".download-banner-f .screen ul li").eq(0).show().siblings().hide();
    //调用showTime()函数（轮播函数）
    showTime();

    $('.tab').hover(function(){
        //获取当前i的值，并显示，同时还要清除定时器
        i = $(this).index();
        Show();
        clearInterval(timer);
    },function(){
        //
        showTime();
    });




    //创建一个showTime函数
    function showTime(){
        //定时器
        timer = setInterval(function(){
            //调用一个Show()函数
            Show();
            i++;
            //当图片是最后一张的后面时，设置图片为第一张
            if(i==3){
                i=0;
            }
        },3000);
    }


    //创建一个Show函数
    function Show(){
        //在这里可以用其他jquery的动画,让当前图片渐入，其他图片渐出
        $(".ig").eq(i).fadeIn(300).siblings(".ig").fadeOut(300);

        //给.tab创建一个新的Class为其添加一个新的样式
        $('.tab').eq(i).addClass('bg').siblings('.tab').removeClass('bg');

    }
});





