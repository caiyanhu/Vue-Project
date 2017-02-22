<template>
  <div>
    <div class="container container1">
      <div class="row" style="margin-bottom: 30px;">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <h2 id="loginTitle" class="text-center">用户登陆</h2>
        </div>
      </div>
    </div>
    <div class="container container1">
      <div class="row inputRow" style="margin-bottom: 30px;">
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4"></div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <div class="input-group">
            <span class="input-group-addon" style="background-color: #1A344F;opacity: 0.5;border: thin solid #47627F">
              <img src="../static/images/user1.png" alt="userlogo" style="width: 15px;height: 17px;">
            </span>
            <input class="form-control" style="height:44px; background-color: #1A344F;opacity: 0.5;border: thin solid #47627F;font-size: 14px;
  font-family: 'Microsoft YaHei';
  color: rgb(191, 235, 255);
  line-height: 2.929;z-index: 79;" id="username" type="text" v-model.lazy="username" placeholder="请输入用户名">
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4"></div>
      </div>
      <div class="row inputRow" style="margin-bottom: 30px;">
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4"></div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <div class="input-group">
            <span class="input-group-addon" style="background-color: #1A344F;opacity: 0.5;border: thin solid #47627F">
              <img src="../static/images/lock1.png" alt="locklogo" style="width: 15px;height: 17px">
            </span>
            <input class="form-control" style="height:44px; background-color: #1A344F;opacity: 0.5;border: thin solid #47627F;color:#FFF;"
              id="password" type="password" v-model.lazy='password' placeholder="请输入密码">
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4"></div>
      </div>
      <div class="row inputRow" style="margin-bottom: 30px;">
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4"></div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <div class="row">
            <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">
              <input class="form-control" style="height:44px; background-color: #1A344F;opacity: 0.5;border: thin solid #47627F;font-size: 14px;
  font-family: 'Microsoft YaHei';
  color: rgba(191, 235, 255, 0.251);
  line-height: 2.929;z-index: 98;
" id="verifycode" type="text" v-model='verifycode' placeholder="请输入验证码">
            </div>
            <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
              <div class="form-control" id="checkCode" style="height:44px; cursor: pointer;text-align: center;background-color: #FFF;padding: 12px;"
                @click='createCode'>
                <span id="1"></span>
                <span id="2"></span>
                <span id="3"></span>
                <span id="4"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4"></div>
      </div>
      <div class="row inputRow" style="margin-bottom: 30px;">
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4"></div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <div style="display: inline;">
            <input type="checkbox" style="width: 16px;height: 16px;background-color: #1A344F;opacity: 0.5;border: thin solid #47627F;margin-right: 14px; vertical-align: middle;">
            <span style="vertical-align: middle;font-size: 14px;
  font-family: 'Microsoft YaHei';
  color: rgba(191, 235, 255, 0.4);
  line-height: 2.929;z-index: 110
">记住密码</span>
          </div>
          <div style="float: right;font-size: 14px;
  font-family: 'Microsoft YaHei';
  color: rgba(191, 235, 255, 0.4);
  line-height: 2.929;z-index: 110">
            <a href="#">忘记密码?</a>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4"></div>
      </div>
      <div class="row inputRow" style="margin-bottom: 30px;">
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4"></div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <button type="submit" class="btn btn-default btn-block" @click="alertU" style="height:44px;background-color: #FFBA26;
    color: #FFF;font-size: 16px;font-family: 'Microsoft YaHei';z-index: 115;">登陆</button>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4"></div>
      </div>
    </div>
  </div>
</template>
<script>
  import $ from 'jquery'
  export default {
    data() {
      return {
        username: '',
        password: '',
        verifycode: ''
      }
    },
    // 当Vue挂载完成后，自动调用下面的函数。这样页面一加载，验证码就出来了
    mounted: function () {
      this.createCode()
    },
    watch: {
      username: function () {
        alert("after lazy");
      }
    },
    methods: {
      alertU: function () {
        alert(typeof (this.password));
      },
      createCode: function () {
        var code = "";
        var codeLength = 4; //验证码的长度
        var checkCode = document.getElementById("checkCode");
        var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
          'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
          'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
          'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
          'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //所有候选组成验证码的字符，当然也可以用中文的
        for (var i = 0; i < codeLength; i++) {
          var charNum = Math.floor(Math.random() * 52);
          code += codeChars[charNum];
        }
        for (let i = 0; i < codeLength; i++) {
          let id = "" + (i + 1);
          var temp = document.getElementById(id);
          temp.innerHTML = code[i] + "";
          let anotherId = '#' + (i + 1);
          var $current = $(anotherId);
          $current.css("color", this.randomColor())
        }
      },
      randomColor: function () {
        let color1 = Math.floor(Math.random() * 255);
        let color2 = Math.floor(Math.random() * 255);
        let color3 = Math.floor(Math.random() * 255);
        return "rgb(" + color1 + "," + color2 + "," + color3 + ")";
      }
    }
  }

</script>
<style scoped>
  .container1 {
    width: 870px;
    /*将容器宽度设置成row的宽度*/
  }







  #loginTitle {
    height: 36px;
    line-height: 36px;
    text-align: center;
    padding: 0;
    margin: 0;
  }







  .inputRow {
    width: 870px;
    /*定稿中每个input占260px(左右padding各15px，共290px)，而input占row的1/3，所以row占870px*/
  }







  h2 {
    font-size: 18px;
    font-family: "Microsoft YaHei";
    color: rgb(255, 255, 255);
    line-height: 0.556;
    z-index: 73;
  }







  a:visited,
  a:link {
    text-decoration: none;
  }







  a:hover {
    text-decoration: underline;
  }

</style>
