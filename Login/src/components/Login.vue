<template>
  <div>
    <span class="color1">用户登陆</span><br>
    <input type="text" v-model="username" placeholder="请输入用户名"><br>
    <input type="password" v-model='password' placeholder="请输入密码"><br>
    <input type="text" v-model='verifycode' placeholder="请输入验证码">
    <span id="checkCode" style="cursor: pointer;" @click='createCode'></span><br>
    <input class="color2" type="checkbox">记住密码
    <a href="#" class="color2">忘记密码</a><br>
    <button type="submit">登陆</button>
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
  .color1 {
    color: #FEFEFD;
  }

  .color2 {
    color: #567489;
  }

  button {
    background-color: #FFBA26;
    color: #FEFEFD;
  }

  a:visited,
  a:link {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

</style>
