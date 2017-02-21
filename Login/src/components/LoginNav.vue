<template>
  <div class="container-fluid" style="height: 30px;">
    <div class="row">
      <div class="col-lg-5 col-md-5" id="client">
        <img src="../static/images/client.png" alt="client">
        <span>&nbsp;客户端</span>
      </div>
      <div class="col-lg-2 col-md-2" id="middle">
        <img src="../static/images/top_nav_center_icon.png" alt="">
      </div>
      <div class="col-lg-5 col-md-5">
        <ul id="menu">
          <li><a href="">登陆</a></li>
          <li><a href="">注册</a></li>
          <li><a href="">管理控制台</a></li>
          <li><a href="">帮助中心</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>


</script>
<style scoped>
  /*左侧*/

  span {
    color: #667789;
    cursor: pointer;
    /*font-size: 15px;
    line-height: 30px;*/
    font-size: 12px;
    font-family: "FZLTXIHJW";
    color: rgba(255, 255, 255, 0.4);
    line-height: 1.2;
  }
  /*中间*/

  #middle {
    position: relative;
    height: 60px;
    background: url("../static/images/top_nav_icon.png") center center no-repeat;
    overflow: visible;
    text-align: center;
    -webkit-background-size: contain;
    background-size: contain;
    cursor: pointer;
  }
  /*右侧*/

  #menu {
    float: right;
    margin-top: 6px;
    padding-left: 0px;
  }

  #menu li {
    list-style: none;
    float: left;
    padding-left: 15px;
    padding-right: 15px;
    border-right: 1px solid #FFF;
    color: #FFF;
    font-size: 12px;
  }

  #menu li:last-child {
    padding-right: 0;
    border-right: 0;
  }

  #menu li a {
    color: #FFF;
    text-decoration: none;
    font-size: 12px;
    font-family: "FZLTXIHJW";
    color: rgb(255, 255, 255);
    line-height: 1.2;
    z-index: 43;
  }

  #menu li a:hover {
    border: none;
    outline: none;
    color: #1FCDFF;
  }

</style>
