//ҳ������߶Ⱥ���
function myScroll(){
    return {
        left:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0,
        top:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0
    }
}



//��ʱ������
//var timer = null
//function animate(tag,obj,fn){
//    clearInterval(tag.timer)
//    tag.timer = setInterval(function(){
//        var flag = true
//        for(var k in obj) {
//            if(k == "opacity"){
//                //��ȡ��ǰλ��
//                var leader = (getStyle(tag, k))*100 || 0
//                //����Ŀ��λ��
//                var target = obj[k]*100
//                //���ò���
//                var step = (target-leader)/10
//                //�жϲ�������ֵ
//                step = step>0?Math.ceil(step):Math.floor(step)
//                //�����˶�
//                leader+=step
//                //�����˶���ʽ
//                tag.style[k] = leader/100
//
//            }else if(k=="zIndex"){
//                tag.style.zIndex = obj[k]
//
//            }else{
//                //��ȡ��ǰλ��
//                var leader = parseInt(getStyle(tag, k)) || 0
//                //����Ŀ��λ��
//                var target = obj[k]
//                //���ò���
//                var step = (target-leader)/10
//                //�жϲ�������ֵ
//                step = step>0?Math.ceil(step):Math.floor(step)
//                //�����˶�
//                leader+=step
//                //�����˶���ʽ
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
