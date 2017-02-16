<template>
  <div class="container">
    <div class="row">
      <h2 class="text-center" style="color: #FEFEFD;">用户登陆</h2>
      <form action="" class="form-horizontal" style="border: 1px double">
        <div class="form-group">
          <div class="col-sm-4 col-md-4">
            <img src="../assets/user1.png" style="width: 30px;height: 34px;border-right: 2px solid;" alt="userlogo">
            <input class="form-control" id="username" type="text" v-model="username" placeholder="请输入用户名">
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-4 col-md-4">
            <input class="form-control" id="password" type="password" v-model='password' placeholder="请输入密码">
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-4 col-md-4">
            <div class="row">
              <div class="col-sm-7 col-md-7">
                <input class="form-control" id="verifycode" type="text" v-model='verifycode' placeholder="请输入验证码">
              </div>
              <div class="col-sm-5 col-md-5">
                <span class="form-control" id="checkCode" style="cursor: pointer;" @click='createCode'></span>
              </div>
            </div>
          </div>
        </div>
        <div class="form-group" style="position: relative;left: 13px;">
          <div class="row">
            <div class="col-sm-4 col-md-4">
              <div style="display: inline;">
                <input type="checkbox" style="color: #567489;">记住密码
              </div>
              <div style="float: right;">
                <a href="#">忘记密码?</a>
              </div>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-4 col-md-4">
            <button type="submit" class="btn btn-default btn-block" style="background-color: #FFBA26;
    color: #FEFEFD;">登陆</button>
          </div>
        </div>
      </form>
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
        if (checkCode) {
          checkCode.innerHTML = code;
        }
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
