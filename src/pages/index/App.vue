<template>
  <div id="app">
    <div class="swiper-container" :style="{'height': bannerHeight + 'px'}">
      <mt-swipe :auto="4000">
        <template v-for="(item, index) in adList">
          <mt-swipe-item :key="index"><img :src="item.img_url"/></mt-swipe-item>
        </template>
      </mt-swipe>
    </div>
    <div class="index-menu">
      <ul>
        <li>
          <a class="flex-box">
            <div class="flex-box icon">
              <img :src="imgs[0]">
            </div>
            <p class="flex">帮助中心</p>
          </a>
        </li>
        <li>
          <a class="flex-box">
            <div class="flex-box icon icon-blue">
              <img :src="imgs[1]">
            </div>
            <p class="flex">规则说明</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import appConf from 'Conf/appConfig'
import { Toast } from 'Pack/index'
import { Swipe, SwipeItem } from 'mint-ui'
export default {
  name: 'App',
  components: {Toast, Swipe, SwipeItem},
  data () {
    return {
      adList: [],
      imgs: [
        require('Assets/img/icon_helpcenter.png'),
        require('Assets/img/icon_dealrecord.png')
      ]
    }
  },
  methods: {
    getAdList: function () {
      let _self = this
      $.ajax({
        type: 'POST',
        url: appConf.baseUrl + '/tools/list_ajax.ashx?act=adlist',
        dataType: 'json',
        timeout: 20000,
        success: function (data, textStatus) {
          if (data !== null || data !== '') {
            _self.adList = data.adList
          }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
          console.log('状态：' + textStatus + '；出错提示：' + errorThrown)
        }
      })
    },
    showToast: function () {
      Toast({
        message: '提示信息',
        position: 'bottom'
      })
    }
  },
  computed: {
    bannerHeight: function () {
      let winH = window.screen.width
      if (winH > 750) {
        winH = 750
      }
      if (winH < 320) {
        winH = 320
      }
      return winH / 750 * 300
    }
  },
  mounted: function () {
    this.$nextTick(() => {
      this.getAdList()
    })
  }
}
</script>

<style>
  @import '../../assets/css/reset.css';
  @import '../../assets/css/app.css';
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
    height:150px;
  }
  .swiper-container img{
    width: 100%;
  }
  .index-menu ul{
    display: flex;
    margin:20px;
  }
  .index-menu li{flex: 1; text-align:center; background:#fff; border-radius:10px;}
  .index-menu li + li{margin-left:20px;}
  .index-menu li a{padding:30px 20px;}
  .index-menu li a .icon{height:80px; width:80px; line-height:80px; background:#e9484d; border-radius:50%; text-align:center;justify-content: center;}
  .index-menu li a .icon-blue{background-color:#59a4e4;}
  .index-menu li a .icon img{max-height:40px; max-width:40px; vertical-align:middle;}
  .index-menu li a > p{font-size:34px; text-align:left; margin-left:30px;}
</style>
