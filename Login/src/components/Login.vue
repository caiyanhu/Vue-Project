<template>
  <div>
    <form role="form">
      <p class="form-heading">请登陆</p>
      <div class="input-group">
        <span class="input-group-addon">
            <span class="glyphicon glyphicon-user"></span>
        </span>
        <input type="text" class="form-control" v-model='username' placeholder="请输入用户名">
      </div>
      <div class="input-group">
        <span class="input-group-addon">
          <span class="glyphicon glyphicon-lock"></span>
        </span>
        <input type="password" class="form-control" v-model='password' placeholder="请输入密码">
      </div>
      <div class="form-group">
        <input type="text" class="form-control" v-model='verifycode' placeholder="请输入验证码" style="width: 50%;">
        <span id="checkCode" style="cursor: pointer;"></span>
      </div>
      <div class="form-group">
        <div class="checkbox">
          <input type="checkbox">记住密码
          <button type="button" class="btn btn-link">忘记密码</button>
        </div>
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-warning" @click="createCode">登陆</button>
      </div>
    </form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        verifycode: ''
      }
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
<style>
  a:visited,
  a:link {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

</style>
