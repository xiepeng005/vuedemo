<template>
  <div id="app">
    <Header :nowNav = '0'/>
    <HelloWorld/>
    <div class="swiper-container">
      <mt-swipe :auto="4000">
        <template v-for="(item, index) in imgOptions.imgGroup">
          <mt-swipe-item :key="index"><img :src="item.src"/></mt-swipe-item>
        </template>
      </mt-swipe>
    </div>
    <button @click="showToast">显示Toast</button>
  </div>
</template>

<script>
import Header from 'Comp/Header'
import HelloWorld from 'Comp/HelloWorld'
import { Toast } from 'Pack/index'
import { Swipe, SwipeItem } from 'mint-ui'
export default {
  name: 'App',
  components: {Header, HelloWorld, Toast, Swipe, SwipeItem},
  data () {
    return {
      imgOptions: {
        imgGroup: [
          {
            id: 1,
            src: require('Assets/img/banner1.jpg'),
            href: ''
          },
          {
            id: 2,
            src: require('Assets/img/banner2.jpg'),
            href: ''
          },
          {
            id: 3,
            src: require('Assets/img/banner3.jpg'),
            href: ''
          }
        ],
        innerTime: 3000
      }
    }
  },
  methods: {
    showToast: function () {
      Toast({
        message: '提示信息',
        position: 'bottom'
      })
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
    max-width: 750px;
    width: 100%;
    margin: 0 auto;
    height:200px;
  }
  .swiper-container img{
    width: 100%;
  }
</style>
