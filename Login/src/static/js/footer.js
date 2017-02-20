/**
 * Created by zgy03 on 2017/2/17 0017.
 */
jQuery(function($){
    //初始化完成后
    setTimeout(function () {
        getVisitNums();//加载访问数量
    },2000);
});

function getVisitNums(){
    $.ajax({
        url : "../login!initHomePage.action",
        async : true,
        cache : false,
        type:"POST",
        success : function(msg) {
            $("#allnum").html("总访问量：" + msg.visits);//访问量
            $("#onlinenum").html("在线人数：" + msg.online);//当前在线
        }
    });
}