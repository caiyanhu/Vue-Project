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
              <img src="../static/images/user2.png" alt="userlogo" style="width: 15px;height: 17px;">
            </span>
            <input class="form-control" style="height:44px; background-color: #1A344F;opacity: 0.4;border: thin solid #47627F;font-size: 14px;
  font-family: 'Microsoft YaHei';
  color: white;
  line-height: 2.929;z-index: 79;" id="username" type="text" v-model.lazy="username" @keyup.enter="releaseEnter" placeholder="请输入用户名">
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4"></div>
      </div>
      <div class="row inputRow" style="margin-bottom: 30px;">
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4"></div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <div class="input-group">
            <span class="input-group-addon" style="background-color: #1A344F;opacity: 0.4;border: thin solid #47627F">
              <img src="../static/images/lock2.png" alt="locklogo" style="width: 15px;height: 17px">
            </span>
            <input class="form-control" style="height:44px; background-color: #1A344F;opacity: 0.4;border: thin solid #47627F;color:white;"
              id="password" type="password" v-model.lazy='password' @keyup.enter="releaseEnter" placeholder="请输入密码">
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4"></div>
      </div>
      <div class="row inputRow" style="margin-bottom: 30px;">
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4"></div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <div class="row">
            <div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">
              <input class="form-control" style="height:44px; background-color: #1A344F;opacity: 0.4;border: thin solid #47627F;font-size: 14px;
  font-family: 'Microsoft YaHei';
  color: white;
  line-height: 2.929;z-index: 98;
" id="verifycode" type="text" v-model.lazy='verifycode' @keyup.enter="releaseEnter" placeholder="请输入验证码">
            </div>
            <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
              <div class="form-control" id="checkCode" style="height:44px; cursor: pointer;text-align: center;background-color: #FFF;padding: 0px;border: 0;">
                <img id="yzmPic" alt="logo1" style="border-radius: 4px;margin-top: 11px;" onclick="this.src='../../validate.so?'+new Date().getTime()">
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
          <button type="submit" class="btn btn-default btn-block" @click="doLogin" style="height:44px;background-color: #FFBA26;
    color: #FFF;font-size: 16px;font-family: 'Microsoft YaHei';z-index: 115;">登陆</button>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4"></div>
      </div>
    </div>
  </div>
</template>
<script>
  import $ from 'jquery'
  import '../static/js/jbase64.js'
  import '../static/js/Md5.js'
  export default {
    data() {
      return {
        username: '',
        password: '',
        verifycode: '',
        validationRules: {
          isNull: function (str) {
            return (str == "" || typeof str != 'string');
          },
          betweenLength: function (str, _min, _max) {
            return (str.length >= _min && str.length <= _max);
          }
        }
      }
    },
    // 当Vue挂载完成后，自动调用下面的函数。这样页面一加载，验证码就出来了
    mounted: function () {
      $('#checkCode img').attr('src', '../../validate.so');
    },
    watch: {
      password: function () {
        this.password = hex_md5(this.password);
      }
    },
    methods: {
      setCookie: function (name, value, expiredays) {
        let expdate = new Date();
        expdate.setDate(expdate.getDate() + expiredays);
        document.cookie = name + "=" + value + ((expiredays == null) ? "" : ";expires=" + expdate.toString());
      },
      strTrim: function (str) {
        return str.replace(/(^\s*)|(\s*$)/g, "");
      },
      // 三个输入框下按下enter键
      releaseEnter: function () {
        if (this.verifycode.length == 4) {
          this.doLogin();
        }
      },
      // 对比输入的验证码和session中的验证码
      compareYzm: function () {
        let result = false;
        if (this.verifycode != "") {
          $.ajax({
            url: "../../login!gotValidation.action",
            async: false,
            type: "POST",
            data: {
              validatcode: this.verifycode
            },
            success: function (msg) {
              result = msg.compare;
              if (!result) {
                // 提示验证码输入错误
                alert("验证码输入错误");
              }
            }
          });
        }
        return result;
      },
      // 对输入的内容进行非空检验，然后比较输入的验证码是否正确
      check: function () {
        let result = false;
        let loginName = this.strTrim(this.username);
        let loginPwd = this.strTrim(this.password);
        let loginYzm = this.strTrim(this.verifycode);
        if (this.validationRules.isNull(loginName)) {
          // 提示用户名为空
          alert("用户名为空");
          result = false;
        } else if (!this.validationRules.isNull(loginName) && this.validationRules.isNull(loginPwd)) {
          // 提示密码为空
          alert("密码为空");
          result = false;
        } else if (!this.validationRules.isNull(loginName) && !this.validationRules.isNull(loginPwd) && this.validationRules
          .isNull(loginYzm)) {
          // 提示验证码为空
          alert("验证码为空");
          result = false;
        } else if (!this.validationRules.isNull(loginName) && !this.validationRules.isNull(loginPwd) && !this.validationRules
          .isNull(loginYzm)) {
          result = this.compareYzm();
        }
        // 在检查发现错误的情况下，验证码图片要刷新
        if (!result) {
          $('#yzmPic').click();
        }
        return result;
      },
      // 点击登录按钮
      doLogin: function () {
        if (!this.check()) {
          return;
        }
        let loginName = this.strTrim(this.username);
        let orignPwd = this.strTrim(this.password);
        let loginPwd = BASE64.encoder(this.password);
        let loginYzm = this.verifycode;
        // 勾选了记住密码
        if ($('#verifycode').prop('checked')) {
          this.setCookie("timerember", "true", 31);
          this.setCookie("loginname", loginName, 31);
          this.setCookie("loginpwd", orignPwd, 31);
        } else {
          this.setCookie("timerember", "false", -1);
          this.setCookie("loginname", "", -1);
          this.setCookie("loginpwd", "", -1);
        }
        $.ajax({
          url: '../../login!validUser.action',
          async: false,
          cache: false,
          type: "POST",
          data: {
            userId: loginName,
            accType: 1
          },
          success: function (msg) {
            if (msg.bOk == false) {
              alert(msg.message);
              return;
            } else {
              if (msg.message != null && msg.message != "" && msg.message != "正常") {
                if (!confirm(msg.message)) {
                  return;
                }
              }
              $.ajax({
                url: '../../login!doLogin.action',
                async: false,
                cache: false,
                type: 'POST',
                data: {
                  userId: loginName,
                  passWord: loginPwd,
                  accType: 1,
                  accId: msg.accId,
                  validatcode: loginYzm
                },
                success: function (msg) {
                  if (msg.bOk == false) {
                    $('#yzmPic').click();
                    alert(msg.message);
                    return;
                  }
                  // 登录成功，刷新页面
                  if (msg.total > 1) {
                    alert("跳转");
                    window.location.href = 'roleselect.jsp';
                  } else {
                    window.location.href = '../../index.jsp';
                  }
                }
              });
            }
          }
        });
      } //end doLogin
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
