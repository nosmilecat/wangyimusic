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
    //�ֲ�ͼ����
    //����ȫ�ֱ����Ͷ�ʱ��
    var i = 0 ;
    var timer;
    //��jquery�������õ�һ��ͼƬ��ʾ����������
    $(".download-banner-f .screen ul li").eq(0).show().siblings().hide();
    //����showTime()�������ֲ�������
    showTime();

    $('.tab').hover(function(){
        //��ȡ��ǰi��ֵ������ʾ��ͬʱ��Ҫ�����ʱ��
        i = $(this).index();
        Show();
        clearInterval(timer);
    },function(){
        //
        showTime();
    });




    //����һ��showTime����
    function showTime(){
        //��ʱ��
        timer = setInterval(function(){
            //����һ��Show()����
            Show();
            i++;
            //��ͼƬ�����һ�ŵĺ���ʱ������ͼƬΪ��һ��
            if(i==3){
                i=0;
            }
        },3000);
    }


    //����һ��Show����
    function Show(){
        //���������������jquery�Ķ���,�õ�ǰͼƬ���룬����ͼƬ����
        $(".ig").eq(i).fadeIn(300).siblings(".ig").fadeOut(300);

        //��.tab����һ���µ�ClassΪ�����һ���µ���ʽ
        $('.tab').eq(i).addClass('bg').siblings('.tab').removeClass('bg');

    }
});





