/**
 * Created by Administrator on 2017/2/21.
 */

$(function () {
    $(".slider-extra li").eq(0).css("borderColor","#a05051");
    var lastPosition=0;
    $(".slider-extra li").mouseenter(function () {
        $(this).css({"cursor":"pointer","borderColor":"#a05051"}).siblings().css("borderColor","transparent");
        $(".slider-extra li").eq(lastPosition).css("borderColor","#a05051");
        $(this).click(function(){
            lastPosition=$(this).index();
            $(".slider-extra li").eq(lastPosition).css("borderColor","#a05051").siblings().css("borderColor","transparent");
        });
        //$(".slider-extra li").mouseleave(function () {
        //    $(this).css("borderColor","transparent");
        //});
    });
    var length, currentIndex = 0,
        length = $('.slider-panel').length;
    //�����˵�һ��ͼƬ����
    $('.slider-panel:not(:first)').hide();
    //����һ��slider-item��Ϊ����״̬
    $('.slider-item:first').addClass('slider-item-selected');
    //������ǰ����󷭰�ť
    $('.slider-page').hide();
    //�������ʱ��ʾ��ǰ����󷭰�ť,ֹͣ����������뿪ʱ������ǰ����󷭰�ť����ʼ����
    $('.slider-panel, .slider-pre, .slider-next').hover(function() {
        stop();
        $('.slider-page').show();
    }, function() {
        $('.slider-page').hide();
        start();
    });
    $('.slider-item').click(function() {
        stop();
        var preIndex = $(".slider-item").filter(".slider-item-selected").index();
        currentIndex = $(this).index();
        play(preIndex, currentIndex);
    });
    $('.slider-pre').unbind('click');
    $('.slider-pre').bind('click', function() {
        pre();
    });
    $('.slider-next').unbind('click');
    $('.slider-next').bind('click', function() {
        next();
    });
    /**
     * ��ǰ��ҳ
     */
    function pre() {
        var preIndex = currentIndex;
        currentIndex = (--currentIndex + length) % length;
        play(preIndex, currentIndex);
    }
    /**
     * ���ҳ
     */
    function next() {
        var preIndex = currentIndex;
        currentIndex = ++currentIndex % length;
        play(preIndex, currentIndex);
    }
    /**
     * ��preIndexҳ����currentIndexҳ
     * preIndex ��������ҳ����ʼҳ
     * currentIndex ��������������ҳ
     */
    function play(preIndex, currentIndex) {
        $('.slider-panel').eq(preIndex).fadeOut(500)
            .parent().children().eq(currentIndex).fadeIn(1000);
        $('.slider-item').removeClass('slider-item-selected');
        $('.slider-item').eq(currentIndex).addClass('slider-item-selected');
    }


    var lastPosition=0;
    $(".banner-right-select li").mouseenter(function () {
        $(this).css({"cursor":"pointer","borderColor":"#989898"}).siblings().css("borderColor","transparent");
        $(".banner-right-select li").eq(lastPosition).css("borderColor","#989898");
        $(this).click(function(){
            lastPosition=$(this).index();
            $(".banner-right-select li").eq(lastPosition).css({"borderColor":"#a05051"}).siblings().css("borderColor","transparent");
        });
        //$(".banner-right-select li").mouseleave(function () {
        //    $(this).css("borderColor","transparent");
        //});
    });


    $(".banner-right-count .brco").mouseenter(function () {
        $(this).css("cursor","pointer");
        $(".banner-right-count .brco").click(function () {
            var sum = $(".banner-right-count input").val();
            if(sum>1) {
                sum--;
                $(".banner-right-count input").val(sum);
            }
        })

    })
    $(".banner-right-count .brct").mouseenter(function () {
        $(this).css("cursor","pointer");
        $(".banner-right-count .brct").click(function () {
            var sum = $(".banner-right-count input").val();
            if(sum <= 50) {
                sum++;
                $(".banner-right-count input").val(sum);
            }
        })

    })



    $(document).scroll(function () {
        if($(this).scrollTop() > $(".banner-left").height()) {
            $("#hehe").css("display","block");
        } else {
            $("#hehe").css("display","none");
        }
    })
});