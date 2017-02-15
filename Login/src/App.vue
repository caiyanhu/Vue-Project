<template>
  <div class="container" id="app">
    <div class="row">
      <LoginNav></LoginNav>
      <LoginTitle></LoginTitle>
      <LoginWelcome></LoginWelcome>
      <Login></Login>
      <LoginFooter></LoginFooter>
    </div>
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
    }
  }

</script>
<style scoped>
  * {
    padding: 0;
    margin: 0;
  }

  #app {}

</style>
