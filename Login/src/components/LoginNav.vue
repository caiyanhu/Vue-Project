<template>
  <div class="container-fluid">
    <div class="row">
      <div id="left">
        <img src="../assets/client.png" alt="client" style="width: 20px;height: 16px; padding: 0 15px">
        <span>客户端</span>
      </div>
      <div id="right">
        <a href="#">登陆</a>
        <a href="#">注册</a>
        <a href="#">管理控制台</a>
        <a href="#">帮助中心</a>
      </div>
    </div>
  </div>
</template>
<style scoped>
  #left {
    float: left
  }

  #right {
    float: right
  }
  a{
    color: white;
    border-right: 1px solid white;
  }
</style>
