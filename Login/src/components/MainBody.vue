<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <Welcome></Welcome>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <Login></Login>
      </div>
    </div>
  </div>
</template>
<script>
  import Login from './Login.vue'
  import Welcome from './Welcome.vue'
  export default {
    components: {
      Login,
      Welcome
    }
  }

</script>
<style>


</style>
