<template>
  <div class="about">
    <Header :nowNav = 'nowNav'/>
    <h1>{{ msg }}</h1>
    <h2>This is my Page</h2>
  </div>
</template>

<script>
import Header from '../../components/Header'
export default {
  name: 'About',
  components: {Header},
  data () {
    return {
      msg: 'Welcome to new About Page',
      nowNav: 1
    }
  }
}
</script>
<style>
  @import "../../assets/css/reset.css";
</style>
