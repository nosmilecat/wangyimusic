/**
 * Created by Administrator on 2017/2/20.
 */

$(function () {
    var datas = [{"src": "images/1.jpg", "bgccolor": "#b0b0b0"},
        {"src": "images/2.jpg", "bgccolor": "#24251f"},
        {"src": "images/3.jpg", "bgccolor": "#d1cbbf"},
        {"src": "images/4.jpg", "bgccolor": "#915521"},
        {"src": "images/5.jpg", "bgccolor": "#141414"},
        {"src": "images/6.jpg", "bgccolor": "#020202"}
    ];
    var pic = document.getElementById("pic");
    for (var i = 0; i < datas.length; i++) {
        /*var img = document.createElement("img");
        img.src = datas[i].src;
        img.style.opacity = 0;
        pic.appendChild(img);*/
        $("#pic").append("<img src='"+datas[i].src+"'/>");
    }
    $("#pic").children("img").css("opacity", 0);
    $("#pic img").eq(0).css("opacity", 1);
    pic.parentNode.parentNode.style.backgroundColor = datas[0].bgccolor;
    var ul = document.createElement("ul");
    pic.appendChild(ul);
    for (var i = 0; i < datas.length; i++) {
        var li = document.createElement("li");
        ul.appendChild(li);
    }
    ul.children[0].style.backgroundColor = "#c40c0c";
    ul.style.marginLeft = -ul.offsetWidth / 2 + "px";
    $("#pic li").click(function () {
        $(".top-main").css("backgroundColor", datas[$(this).index()].bgccolor);
        $("#pic img").css("opacity", "0").eq($(this).index()).css("opacity", "1");
        $("#pic li").css("backgroundColor", "#c1c1c1").eq($(this).index()).css("backgroundColor", "#c40c0c");
        count = $(this).index();
    });
    var count = 0;
    $(".rightarr").click(function () {
        if (count == datas.length - 1) {
            count = -1;
        }
        count++;
        $("#pic img").css("opacity", "0").eq(count).css("opacity", "1");
        $("#pic li").css("backgroundColor", "#c1c1c1").eq(count).css("backgroundColor", "#c40c0c");
        $(".top-main").css("backgroundColor", datas[count].bgccolor);
    });
    $(".leftarr").click(function () {
        if (count == 0) {
            count = datas.length;
        }
        count--;
        $("#pic img").css("opacity", "0").eq(count).css("opacity", "1");
        $("#pic li").css("backgroundColor", "#c1c1c1").eq(count).css("backgroundColor", "#c40c0c");
        $(".top-main").css("backgroundColor", datas[count].bgccolor);
    });
    var timer = null;
    timer = setInterval(function () {
        if (count == datas.length - 1) {
            animate($("#pic img")[count], {"opacity": 0}, function () {
                $(".top-main").css("backgroundColor", datas[0].bgccolor);
                animate($("#pic img")[0], {"opacity": 1});
                $("#pic li").css("backgroundColor", "#c1c1c1").eq(0).css("backgroundColor", "#c40c0c");
            });
            count = 0;
        } else {
            animate($("#pic img")[count], {"opacity": 0}, function () {
                count++;
                $(".top-main").css("backgroundColor", datas[count].bgccolor);
                animate($("#pic img")[count], {"opacity": 1});
                $("#pic li").css("backgroundColor", "#c1c1c1").eq(count).css("backgroundColor", "#c40c0c");
            });
        }
    }, 3000);
    $("#pic").mouseenter(function () {
        clearInterval(timer);
    });
    $("#pic").mouseleave(function () {
        timer = setInterval(function () {
            if (count == datas.length - 1) {
                /*animate($("#pic img")[count], {"opacity": 0}, function () {
                    $(".top-main").css("backgroundColor", datas[0].bgccolor);
                    animate($("#pic img")[0], {"opacity": 1});
                    $("#pic li").css("backgroundColor", "#c1c1c1").eq(0).css("backgroundColor", "#c40c0c");
                });
                count = 0;*/
                $("#pic img").eq(count).animate({"opacity": 0},function(){
                    $("#pic img").eq(0).animate({"opacity": 1});
                    $(".top-main").css("backgroundColor", datas[0].bgccolor);
                    $("#pic li").css("backgroundColor", "#c1c1c1").eq(0).css("backgroundColor", "#c40c0c");
                })
                count = 0;
            } else {
                animate($("#pic img")[count], {"opacity": 0}, function () {
                    count++;
                    $(".top-main").css("backgroundColor", datas[count].bgccolor);
                    animate($("#pic img")[count], {"opacity": 1});
                    $("#pic li").css("backgroundColor", "#c1c1c1").eq(count).css("backgroundColor", "#c40c0c");
                });
            }
        }, 2000);
    });

    $(".search-ipt input").focus(function () {
        if($(this)[0].value == "呵呵哒"){
            $(this)[0].value = "";
        }
    });
    $(".search-ipt input").blur(function () {
        if($(this)[0].value == ""){
            $(this)[0].value = "呵呵哒";
        }
    });

    $("#list1 li:even").css("backgroundColor", "#e8e8e8")
    $("#list2 li:even").css("backgroundColor", "#e8e8e8")
    $("#list3 li:even").css("backgroundColor", "#e8e8e8")

    $(".first li").mouseenter(function () {
        $(this).children("div").css("display", "block").siblings("a").css({
            "width": "100px",
            "overflow": "hidden",
            "textOverflow": "ellipsis"
        });
    });
    $(".first li").mouseleave(function () {
        $(this).children("div").css("display", "none").siblings("a").css("width", "180px");
    });
    var count1 = 0;
    var timer2 = null;
    timer2 = setInterval(fun, 2000);
    function fun() {
        if (count1 == 2) {
            $(".xindie-img>div>div").css("left", "0");
            count1 = 0;
        }
        count1++;
        $(".xindie-img>div>div").animate({"left": -count1 * 640})
    }

    $(".xindie-img>div>div").mouseenter(function () {
        clearInterval(timer2);
    });
    $(".xindie-img>div>div").mouseleave(function () {
        timer2 = setInterval(fun, 2000);
    });

    $(".search>a,.search i").mouseenter(function () {
        $(".search i").css("background", "url('images/jlt.png') -228px -418px no-repeat")
        $(".search-denglu").show();
    });
    $(".search>a,.search i").mouseleave(function () {
        $(".search i").css("background", "url('images/jlt.png') -228px -380px no-repeat")
        $(".search-denglu").hide();
    });

    $(".search>a,.search i").click(function () {
        $(".login").show();
    });
    $(".span_exit").click(function () {
        $(".login").hide();
    });

    $(".login_inner-top").mousedown(function (e) {
        var X = e.clientX- $(".login").offset().left;
        var Y = e.clientY- $(".login").offset().top;
        $(document).mousemove(function (e) {
            $(".login").css("left",e.clientX-X+"px").css("top",e.clientY-Y+"px");

        });
    });
    $(".login_inner-top").mouseup(function () {
        $(document).off("mousemove");
    });
    window.onscroll = function () {
        var hehe = myScroll().top;
        if (hehe > 10) {
            $(".top-icon").show();
        } else {
            $(".top-icon").hide();
        }
    };
    var timer3 = null;
    $(".top-main-banner-down a").click(function () {
        clearInterval(timer3);
        var leader = 0;
        timer3 = setInterval(function () {
            var step = (360 - leader) / 10;
            step = Math.ceil(step);
            leader += step;
            $(".top-main-banner-down img")[0].style.transform = "rotate(" + leader + "deg)";
            if (leader == 360) {
                clearInterval(timer3);
            }
        }, 17)
    });

    $(".music-img a").mouseenter(function () {
        $(this).children().eq(1).show();
    });
    $(".music-img a").mouseleave(function () {
        $(this).children().eq(1).hide();
    });

    $(document.body).hide();
    $(document.body).fadeIn(4000);

    $(document).mousemove(function (e) {
        var Y= e.clientY;
        if(Y>500){
            //$(".bottom1").stop(true,true).animate({"height":"44px"},1000);
            $(".bottom1").show();
        }else{
            //$(".bottom1").stop(true,true).animate({"height":0},1000);
            $(".bottom1").hide();
        }
    })



    function myScroll() {
        return {
            top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
            left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
        };
    }

    function animate(tag, obj, fn) {

        clearInterval(tag.timer);
        tag.timer = setInterval(function () {
            var flag = true;//���赱ǰ��һ�ζ�ʱ������ִ�п������������ÿ����ʽ��������ָ��λ�ã�
            //�ȱ���obj
            for (var k in obj) {
                //����obj����һЩ���Կ�����zIndex����opacity����ʱ��Ҫ��������
                if (k == "opacity") {
                    //��͸���ȵ�ǰֵ��Ŀ��ֵ������Ϊ�����ı���������ʱ������Ӧ��������
                    var target = obj[k] * 100;
                    var leader = getStyle(tag, k) * 100 || 0;
                    var step = (target - leader) / 10;
                    //��step����ȡ��
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader = leader + step;
                    //͸���ȵ�������Ҫȥ����λ
                    tag.style[k] = leader / 100;

                } else if (k == "zIndex") {
                    //zIndex����Ҫ���䣬ֱ�����ü���
                    tag.style.zIndex = obj[k];

                } else {
                    var target = obj[k];
                    var leader = parseInt(getStyle(tag, k)) || 0;
                    var step = (target - leader) / 10;
                    //��step����ȡ��
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);

                    leader = leader + step;
                    tag.style[k] = leader + "px";
                }

                //��ȡ��ÿ����������Ҫ�Ĵ���
                if (leader != target) {
                    flag = false;
                }
            }

            if (flag) {
                clearInterval(tag.timer);
                fn && fn();
            }
        }, 20);
    }

    function getStyle(tag, attr) {
        if (tag.currentStyle) {
            return tag.currentStyle[attr];
        } else {
            return getComputedStyle(tag, null)[attr];
        }
    }
});
