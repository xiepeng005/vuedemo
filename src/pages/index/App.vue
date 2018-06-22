<template>
  <div id="app">
    <Header :nowNav = '0'/>
    <HelloWorld/>
    <div class="swiper-container">
      <Swiper :options="imgOptions"/>
    </div>
    <button @click="showToast">显示Toast</button>
  </div>
</template>

<script>
import Header from '../../components/Header'
import HelloWorld from '../../components/HelloWorld'
import Swiper from '../../components/Swiper'
export default {
  name: 'App',
  components: {Header, HelloWorld, Swiper},
  data () {
    return {
      imgOptions: {
        imgGroup: [
          {
            id: 1,
            src: require('../../assets/img/banner1.jpg'),
            href: ''
          },
          {
            id: 2,
            src: require('../../assets/img/banner2.jpg'),
            href: ''
          },
          {
            id: 3,
            src: require('../../assets/img/banner3.jpg'),
            href: ''
          }
        ],
        innerTime: 3000
      }
    }
  },
  methods: {
    showToast: function () {
      alert('提示信息')
    }
  }
}
</script>

<style>
  @import '../../assets/css/reset.css';
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .swiper-container{
    width: 750px;
    margin: 0 auto;
  }
</style>
