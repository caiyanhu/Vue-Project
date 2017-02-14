<template>
  <div id="app">
    <Top></Top>
    <MainBody></MainBody>
    <Foot></Foot>
  </div>
</template>
<script>
  import Top from './components/Top.vue'
  import MainBody from './components/MainBody.vue'
  import Foot from './components/Foot.vue'

  export default {
    name: 'app',
    components: {
      Top,
      MainBody,
      Foot
    }
  }

</script>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

</style>
