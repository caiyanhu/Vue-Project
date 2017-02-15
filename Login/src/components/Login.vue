<template>
  <div class="container">
    <div class="row">
      <div class="center-block">
        <span class="color1">用户登陆</span><br>
        <!--创建基本表单的步骤：
          向父 <form> 元素添加 role="form"。
          把标签和控件放在一个带有 class .form-group 的 <div> 中。这是获取最佳间距所必需的。
          向所有的文本元素 <input>、<textarea> 和 <select> 添加 class .form-control。
        -->
        <!--向 .form-control 添加前缀或后缀元素的步骤如下：
          把前缀或后缀元素放在一个带有 class .input-group 的 <div> 中。
          接着，在相同的 <div> 内，在 class 为 .input-group-addon 的 <span> 内放置额外的内容。
          把该 <span> 放置在 <input> 元素的前面或者后面。
        -->
        <form role="form">
          <div class="row form-group input-group">
            <span class="input-group-addon">
              <i class="icon-user"></i>
            </span>
            <input class="form-control" id="username" type="text" v-model="username" placeholder="请输入用户名">
          </div>
          <div class="row form-group input-group">
            <span class="input-group-addon">
              <i class="icon-lock"></i>
            </span>
            <input class="form-control" id="password" type="password" v-model='password' placeholder="请输入密码">
          </div>
          <div class="row form-group">
            <div class="col-md-6">
              <input class="form-control" id="verifycode" type="text" v-model='verifycode' placeholder="请输入验证码">
            </div>
            <div class="col-md-6">
              <span class="form-control col-md-6" id="checkCode" style="cursor: pointer;" @click='createCode'></span>
            </div>
          </div>
          <div class="checkbox">
            <input class="color2" type="checkbox">记住密码
            <a href="#" class="color2">忘记密码</a>
          </div>
          <button type="submit" class="btn btn-default">登陆</button>
        </form>
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
  .center-block {
    display: table;
    float: none;
    width: auto;
    margin-left: auto;
    margin-right: auto;
  }

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
