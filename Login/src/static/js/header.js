/**
 * Created by zgy03 on 2017/2/16 0016.
 */
var isopen = false;//弹出menu是否已经显示
var isShowing = false;//弹出menu是否正在动画显示中
var lastTime = new Date().getTime();//弹出menu上次点击时间
//$(function(){})的执行是在DOM准备好之后执行,相当于 $(document).ready(function(){})
//window.onload是在页面加载完成之后，包括加载完各种js、css、image资源才执行
//第一个;号是防止前面的代码没有结束导致错误,首先这是个自执行的匿名函数，为一个函数表达式。window是传给该匿名函数的参数
//;( function(window) {

//})(window);
//用于存放开发插件的代码，执行其中代码时DOM不一定存在，所以直接自动执行DOM操作的代码请小心使用。
//(function($){

//})(jQuery);

//如下两个相同，用于存放操作DOM对象的代码，执行其中代码时DOM对象已存在。不可用于存放开发插件的代码，因为jQuery对象没有得到传递，外部通过jQuery.method也调用不了其中的方法（函数）。
//$(function($){

//});
jQuery(function($){

});

//设置menu item样式
function setMenuStyle(openDiv){
    openDiv.style.width = 64+"px";
    openDiv.style.height = 64+"px";
    openDiv.style.borderRadius = "32px";
    openDiv.style.background = "rgba(0,48,102,0.5)";//"#003066";
    openDiv.style.position = "absolute";
    openDiv.style.lineHeight = "64px";
    openDiv.style.color = "#fff";
    openDiv.style.fontSize = "12px";
    openDiv.style.textAlign="center";
    openDiv.style.cursor="pointer";
    openDiv.style.boxShadow="0 0 5px #fff";
    openDiv.style.visibility = "hidden";
    openDiv.style.zIndex="1111";
    openDiv.onmouseover = function (){
        openDiv.style.background = "linear-gradient(#c6ff00, #2eeac4)";
        openDiv.style.color = "#000";
    }
    openDiv.onmouseout = function (){
        openDiv.style.background = "rgba(0,48,102,0.5)";;
        openDiv.style.color = "#fff";
    }
}
//鼠标移动到menu打开按钮触发事件
function first_show_popu_menu(){
    var curn = new Date().getTime();
    var delay = curn-lastTime;
    lastTime = curn;

    if(delay<500 || isopen==true){
        return;
    }

    isShowing = true;
    setTimeout(function () {
        isShowing = false;
    },1100);

    $("#rotepic").rotate({
        angle: 0,
        animateTo:-45
    });

    isopen = true;
    var rotPic = $('#rotepic');
    var cx = rotPic.offset().top;
    var cy = rotPic.offset().left;

    var openDiv,openDiv1,openDiv2,openDiv3,openDiv4;
    openDiv = document.getElementById("nav_popu_sta");

    if(openDiv==null){
        openDiv = document.createElement("div");
        openDiv.id="nav_popu_sta";
        openDiv.innerHTML="站点分布";

        setMenuStyle(openDiv);

        openDiv.onclick = function(){
            document.location="../pages/dist/dist.jsp?pageNo=1";
        }

        document.body.appendChild(openDiv);
    }
    openDiv.style.left=cy-150+"px";
    openDiv.style.top=cx+10+"px";

    eleShowOrHide(openDiv,true,1);

    openDiv1 = document.getElementById("nav_popu_besp");
    if(openDiv1==null){
        openDiv1 = document.createElement("div");
        openDiv1.id="nav_popu_besp";
        openDiv1.innerHTML="充电预约";

        setMenuStyle(openDiv1);

        openDiv1.onclick = function(){
            document.location="../pages/bspk/bspk.jsp?pageNo=2";
        }

        document.body.appendChild(openDiv1);
    }

    openDiv1.style.left=cy-90+"px";
    openDiv1.style.top=cx+60+"px";

    eleShowOrHide(openDiv1,true,2);

    openDiv2 = document.getElementById("nav_popu_info");
    if(openDiv2==null){
        openDiv2 = document.createElement("div");
        openDiv2.id="nav_popu_info";
        openDiv2.innerHTML="平台介绍";

        setMenuStyle(openDiv2);

        openDiv2.onclick = function(){
            document.location="../pages/plat/plat.jsp?pageNo=3";
        }

        document.body.appendChild(openDiv2);
    }

    openDiv2.style.left=cy-10+"px";
    openDiv2.style.top=cx+80+"px";

    eleShowOrHide(openDiv2,true,3);

    openDiv3 = document.getElementById("nav_popu_nav");
    if(openDiv3==null){
        openDiv3 = document.createElement("div");
        openDiv3.id="nav_popu_nav";
        openDiv3.innerHTML="导航信息";

        setMenuStyle(openDiv3);

        openDiv3.onclick = function(){
            document.location="../pages/nav/nav.jsp?pageNo=4";
        }

        document.body.appendChild(openDiv3);
    }

    openDiv3.style.left=cy+70+"px";
    openDiv3.style.top=cx+60+"px";

    eleShowOrHide(openDiv3,true,4);

    openDiv4 = document.getElementById("nav_popu_pers");
    if(openDiv4==null){
        openDiv4 = document.createElement("div");
        openDiv4.id="nav_popu_pers";
        openDiv4.innerHTML="个人信息";
        openDiv4.onclick = indInfoOpen;

        setMenuStyle(openDiv4);

        document.body.appendChild(openDiv4);
    }

    openDiv4.style.left=cy+130+"px";
    openDiv4.style.top=cx+10+"px";

    eleShowOrHide(openDiv4,true,5);
}
//显示或隐藏menu
function show_hide_popu_menu(){
    if(isShowing){
        return;
    }
    var curn = new Date().getTime();
    var delay = curn-lastTime;
    lastTime = curn;
    var animal = true;
    if(delay<1000){
        animal = false;
    }

    if(!isopen){
        $("#rotepic").rotate({
            angle: 0,
            animateTo:-45
        });
    }else{
        $("#rotepic").rotate({
            angle: -45,
            animateTo:0
        });
    }
    isopen = !isopen;

    var openDiv,openDiv1,openDiv2,openDiv3,openDiv4;
    openDiv = document.getElementById("nav_popu_sta");

    if(openDiv!=null){
        eleShowOrHide(openDiv,animal,1);
    }

    openDiv1 = document.getElementById("nav_popu_besp");
    if(openDiv1!=null){
        eleShowOrHide(openDiv1,animal,2);
    }

    openDiv2 = document.getElementById("nav_popu_info");
    if(openDiv2!=null){
        eleShowOrHide(openDiv2,animal,3);
    }

    openDiv3 = document.getElementById("nav_popu_nav");
    if(openDiv3!=null){
        eleShowOrHide(openDiv3,animal,4);
    }

    openDiv4 = document.getElementById("nav_popu_pers");
    if(openDiv4!=null){
        eleShowOrHide(openDiv4,animal,5);
    }
}

function eleShowOrHide(ele,animal,i){
    if(!animal){
        if(isopen){
            ele.style.visibility = "visible";
        }else{
            ele.style.visibility = "hidden";
        }
    }else{
        if(isopen){
            setTimeout(function () {
                ele.style.visibility = "visible";
                ele.className = "animated bounceInDown";
                setTimeout(function () {
                    ele.className = "";
                },1000);
            },200*(i-1));
        }else{
            ele.className = "animated bounceOutDown";
            setTimeout(function () {
                ele.style.visibility = "hidden";
                ele.className = "";
            },1000);
        }
    }
}
//更新meun的位置
function update_popu_menu(){
    var rotPic = $('#rotepic');
    var cx = rotPic.offset().top;
    var cy = rotPic.offset().left;

    var openDiv,openDiv1,openDiv2,openDiv3,openDiv4;
    openDiv = document.getElementById("nav_popu_sta");

    if(openDiv!=null){
        openDiv.style.left=cy-150+"px";
        openDiv.style.top=cx+10+"px";
    }

    openDiv1 = document.getElementById("nav_popu_besp");
    if(openDiv1!=null){
        openDiv1.style.left=cy-90+"px";
        openDiv1.style.top=cx+60+"px";
    }

    openDiv2 = document.getElementById("nav_popu_info");
    if(openDiv2!=null){
        openDiv2.style.left=cy-10+"px";
        openDiv2.style.top=cx+80+"px";
    }

    openDiv3 = document.getElementById("nav_popu_nav");
    if(openDiv3!=null){
        openDiv3.style.left=cy+70+"px";
        openDiv3.style.top=cx+60+"px";
    }

    openDiv4 = document.getElementById("nav_popu_pers");
    if(openDiv4!=null){
        openDiv4.style.left=cy+130+"px";
        openDiv4.style.top=cx+10+"px";
    }
}

//点击个人中心
function indInfoOpen(){
    $.ajax({
        url : "../indLoginPages!isLoginIn.action",
        async : true,
        cache : false,
        data : {
        },
        success : function(msg) {
            if(msg.bOk){
                location.href="../pages/individual/myhome/myhome.jsp?pageNo=5";
            }else{
                location.href="../pages/inilogin/login.jsp?pageNo=5";
            }
        },
        failure : function(msg) {
            return false;
        }
    });
}