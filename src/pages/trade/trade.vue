<template>
  <div class="app">
    <div class="m-body"></div>
    <router-view></router-view>
    <Footer :nownav="3"/>
  </div>
</template>
<script>
import Footer from 'Comp/Footer'
export default {
  data () {
    return {}
  },
  components: {Footer}
}
</script>
<style>
</style>
