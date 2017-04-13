$(function(){

    var box = document.getElementById("box");
    var screen = box.children[0];
    var ul = screen.children[0];
    var lisUl = ul.children;
    var ol = screen.children[1];
    var lisOl=ol.children;
    var arr = box.children[1];
    var arrLeft = arr.children[0];
    var arrRight = arr.children[1];

    var imgWid = screen.offsetWidth;
    //var bgc=["#EFEDEE","#F2F2F2"]
    //��ÿһ��li����¼�Ч��

    lisOl[0].className = "current";
    //box.style.backgroundColor=bgc[0];
    for (var i = 0; i < lisOl.length; i++) {
        lisOl[i].index = i;

        lisOl[i].onclick = function () {
            //�����
            if (pic == lisUl.length - 1) {
                ul.style.left = 0 + "px";
            }


            for (var i = 0; i < lisOl.length; i++) {
                lisOl[i].className = "";
            }

            this.className = "current";
            //��ul�˶�
            animate(ul, -imgWid * this.index);

            pic = this.index;
        };
    }


    //���Ұ�ť���Ч��
    var pic = 0;
    //��¡��һ��ͼƬ
    var firstPic = lisUl[0].cloneNode(true);
    ul.appendChild(firstPic);

    //����Ұ�ť
    arrRight.onclick = play;


    arrLeft.onclick = function () {
        if (pic == 0) {
            ul.style.left = -ul.offsetWidth + imgWid + "px";
            pic = lisUl.length - 1;
        }
        pic--;
        animate(ul, -pic * imgWid);

        for (var i = 0; i < lisOl.length; i++) {
            lisOl[i].className = "";
        }
        lisOl[pic].className = "current";

    };

    //�Զ�����
    var timer = null;


    timer = setInterval(play, 5000);

    //�����Ƴ�
    box.onmouseover = function () {
        arr.style.display = "block";
        clearInterval(timer);
    };

    box.onmouseout = function () {
        arr.style.display = "none";
        timer = setInterval(play, 5000);
    };


    function play() {
        if (pic == lisUl.length - 1) {
            //���
            ul.style.left = 0 + "px";
            //pic����
            pic = 0;
        }
        //������
        pic++;
        animate(ul, -pic * imgWid);
        //box.style.backgroundColor=bgc[pic];

        //ʹ��pic��Ϊ����ֵ
        for (var i = 0; i < lisOl.length; i++) {
            lisOl[i].className = "";
        }

        //�����ʾ���Ǽٵĵ�һ��
        if (pic == lisUl.length - 1) {
            lisOl[0].className = "current";
        } else {
            lisOl[pic].className = "current";
        }

    }


    function animate(tag, target) {
        clearInterval(tag.timer);
        tag.timer = setInterval(function () {
            var leader = tag.offsetLeft;
            //step = ( target - leader ) / 10
            var step = (target - leader) / 10;
            //����һ��step��ֵ����step��������ȡ��
            step = leader > target ? Math.floor(step) : Math.ceil(step);
            //leader = leader +  step
            leader = leader + step;

            //���ø�leftֵ
            tag.style.left = leader + "px";
            if (leader == target) {
                clearInterval(tag.timer);
            }
        }, 17);
    }
    var recommend=document.getElementById("recommend");
    var wrap=document.getElementById("wrap");
    window.onscroll = function () {

        if (myScroll().top > recommend.offsetHeight) {
            wrap.style.display="block";
        } else {
            wrap.style.display="none";
        }

    };




    var picTop = document.getElementById("hehe")
    var timer = null

    picTop.onclick = function(){
        clearInterval(timer)
        //���ö�ʱ��
        timer = setInterval(function(){
            //��ȡ��ǰλ��
            var leader = myScroll().top
            ////Ŀ��λ��
            var target = 0
            //���ò���
            var step = (target-leader)/10
            step = Math.floor(step)
            //�����˶�
            leader += step
            //�����˶���ʽ
            //document.body.style.offsetTop = leader+"px"
            window.scrollTo(0,leader)
            if(leader == 0){
                clearInterval(timer)
            }

        },17)

    }


    $(".login-l").click(function () {
        $(".loginhh").show();
    });
    $(".span_exit").click(function () {
        $(".loginhh").hide();
    });

    $(".login_inner-top").mousedown(function (e) {
        var X = e.clientX- $(".loginhh").offset().left;
        var Y = e.clientY- $(".loginhh").offset().top;
        $(document).mousemove(function (e) {
            $(".loginhh").css("left",e.clientX-X+"px").css("top",e.clientY-Y+"px");

        });
    });
    $(".login_inner-top").mouseup(function () {
        $(document).off("mousemove");
    });




})