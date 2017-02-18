<template>
  <div id="app">
    <LoginNav></LoginNav>
    <LoginTitle></LoginTitle>
    <LoginWelcome></LoginWelcome>
    <Login></Login>
    <LoginFooter></LoginFooter>
  </div>
</template>
<script>
  import LoginNav from './components/LoginNav.vue'
  import LoginTitle from './components/LoginTitle.vue'
  import LoginWelcome from './components/LoginWelcome.vue'
  import Login from './components/Login.vue'
  import LoginFooter from './components/LoginFooter.vue'
  import $ from 'jquery'
  export default {
    name: 'app',
    components: {
      LoginNav,
      LoginTitle,
      LoginWelcome,
      Login,
      LoginFooter
    },
    mounted: function () {
      var innerHeight = window.innerHeight;
      $('#app').css('height', innerHeight + 'px');
    }
  }
  $(window).resize(function () {
    var innerHeight = window.innerHeight;
    $('#app').css('height', innerHeight + 'px');
  })

</script>
<style scoped>
  #app {
    background-color: grey;
    background-image: url('./assets/bg.png');
    background-size: 100% 100%; /*让背景图片宽高自适应不同屏幕尺寸*/
  }

</style>
