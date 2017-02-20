<template>
  <div class="container">
    <div class="row" style="margin-bottom: 46px;">
      <h4 class="text-center" style="color: #FEFEFD;">用户登陆</h2>
    </div>
    <div class="row" style="margin-bottom: 30px;">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <div class="input-group">
          <span class="input-group-addon" style="background-color: #1A344F;opacity: 0.5;border: thin solid #47627F">
              <img src="../static/images/user1.png" alt="userlogo" style="width: 15px;height: 17px">
            </span>
          <input class="form-control" style="height:44px; background-color: #1A344F;opacity: 0.5;border: thin solid #47627F" id="username"
            type="text" v-model="username" placeholder="请输入用户名">
        </div>
      </div>
      <div class="col-md-4"></div>
    </div>
    <div class="row" style="margin-bottom: 30px;">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <div class="input-group">
          <span class="input-group-addon" style="background-color: #1A344F;opacity: 0.5;border: thin solid #47627F">
              <img src="../static/images/lock1.png" alt="locklogo" style="width: 15px;height: 17px">
            </span>
          <input class="form-control" style="height:44px; background-color: #1A344F;opacity: 0.5;border: thin solid #47627F" id="password"
            type="password" v-model='password' placeholder="请输入密码">
        </div>
      </div>
      <div class="col-md-4"></div>
    </div>
    <div class="row" style="margin-bottom: 30px;">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <div class="row">
          <div class="col-sm-7 col-md-7">
            <input class="form-control" style="height:44px; background-color: #1A344F;opacity: 0.5;border: thin solid #47627F" id="verifycode"
              type="text" v-model='verifycode' placeholder="请输入验证码">
          </div>
          <div class="col-sm-5 col-md-5">
            <div class="form-control" id="checkCode" style="height:44px; cursor: pointer;text-align: center;background-color: #FFF;padding: 12px;"
              @click='createCode'>
              <span id="1"></span>
              <span id="2"></span>
              <span id="3"></span>
              <span id="4"></span>
              <span id="5"></span>
              <span id="6"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4"></div>
    </div>
    <div class="row" style="margin-bottom: 30px;">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <div style="display: inline;">
          <input type="checkbox" style="width: 16px;height: 16px;background-color: #1A344F;opacity: 0.5;border: thin solid #47627F;margin-right: 14px; vertical-align: middle;">
          <span style="vertical-align: middle;color: #67879C;">记住密码</span>
        </div>
        <div style="float: right;">
          <a href="#">忘记密码?</a>
        </div>
      </div>
      <div class="col-md-4"></div>
    </div>
    <div class="row" style="margin-bottom: 30px;">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <button type="submit" class="btn btn-default btn-block" style="height:44px;background-color: #FFBA26;
    color: #FEFEFD;font-size: 16px;font-family: 'Microsoft YaHei'">登陆</button>
      </div>
      <div class="col-md-4"></div>
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
    methods: {
      alertU: function () {
        alert(this.username + ' ' + this.password)
      },
      createCode: function () {
        var code = "";
        var codeLength = 6; //验证码的长度
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
        for (let i = 0; i < 6; i++) {
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
  a:visited,
  a:link {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

</style>
