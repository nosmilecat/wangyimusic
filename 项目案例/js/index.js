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
    //将除了第一张图片隐藏
    $('.slider-panel:not(:first)').hide();
    //将第一个slider-item设为激活状态
    $('.slider-item:first').addClass('slider-item-selected');
    //隐藏向前、向后翻按钮
    $('.slider-page').hide();
    //鼠标上悬时显示向前、向后翻按钮,停止滑动，鼠标离开时隐藏向前、向后翻按钮，开始滑动
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
     * 向前翻页
     */
    function pre() {
        var preIndex = currentIndex;
        currentIndex = (--currentIndex + length) % length;
        play(preIndex, currentIndex);
    }
    /**
     * 向后翻页
     */
    function next() {
        var preIndex = currentIndex;
        currentIndex = ++currentIndex % length;
        play(preIndex, currentIndex);
    }
    /**
     * 从preIndex页翻到currentIndex页
     * preIndex 整数，翻页的起始页
     * currentIndex 整数，翻到的那页
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