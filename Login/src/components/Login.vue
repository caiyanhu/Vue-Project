<template>
  <div>
    <p>用户登陆</p>
    <form class="form-horizontal" role="form">
      <div class="form-group">
        <input type="text" class="form-control" v-model='username' placeholder="请输入用户名">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" v-model='password' placeholder="请输入密码">
      </div>
      <div class="form-group">
        <input type="text" class="form-control col-lg-10" v-model='verifycode' placeholder="请输入验证码">
        <img src="" alt="验证码">
      </div>
      <div class="form-group">
        <div class="checkbox">
          <input type="checkbox">记住密码
          <button type="button" class="btn btn-link">忘记密码</button>
        </div>
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-warning">登陆</button>
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
