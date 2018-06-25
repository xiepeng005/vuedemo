<template>
  <div class="about">
    <Header :nowNav = 'nowNav'/>
    <h1>{{ msg }}</h1>
    <h2>This is my Page</h2>
    <button @click="showToast">显示Toast</button>
  </div>
</template>

<script>
import Header from '../../components/Header'
import { Toast } from 'Pack/index'
export default {
  name: 'About',
  components: {Header},
  data () {
    return {
      msg: 'Welcome to new About Page',
      nowNav: 1
    }
  },
  methods: {
    showToast: function () {
      Toast('你好吗')
    }
  }
}
</script>
<style>
  @import "../../assets/css/reset.css";
</style>
