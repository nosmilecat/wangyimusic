//页面卷曲高度函数
function myScroll(){
    return {
        left:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0,
        top:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0
    }
}



//定时器函数
//var timer = null
//function animate(tag,obj,fn){
//    clearInterval(tag.timer)
//    tag.timer = setInterval(function(){
//        var flag = true
//        for(var k in obj) {
//            if(k == "opacity"){
//                //获取当前位置
//                var leader = (getStyle(tag, k))*100 || 0
//                //设置目标位置
//                var target = obj[k]*100
//                //设置步数
//                var step = (target-leader)/10
//                //判断步长正负值
//                step = step>0?Math.ceil(step):Math.floor(step)
//                //设置运动
//                leader+=step
//                //设置运动公式
//                tag.style[k] = leader/100
//
//            }else if(k=="zIndex"){
//                tag.style.zIndex = obj[k]
//
//            }else{
//                //获取当前位置
//                var leader = parseInt(getStyle(tag, k)) || 0
//                //设置目标位置
//                var target = obj[k]
//                //设置步数
//                var step = (target-leader)/10
//                //判断步长正负值
//                step = step>0?Math.ceil(step):Math.floor(step)
//                //设置运动
//                leader+=step
//                //设置运动公式
//                tag.style[k] = leader + "px"
//
//            }
//            if(leader != target){
//                flag = false
//            }
//        }
//        if(flag){
//            clearInterval(tag.timer)
//            fn || fn()
//        }
//
//    },20)

//}
