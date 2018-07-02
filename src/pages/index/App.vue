<template>
  <div id="app">
    <div class="m-body">
      <div class="swiper-container">
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
      <Stock :stockList="stockList"/>
      <div class="index-product">
        <div class="product-flag">免息</div>
        <div class="product-wrap">
          <div class="name"><strong>免息体验</strong><span>0利息</span></div>
          <dl class="des flex-box">
            <dd><span class="font-red">20000</span>元体验金</dd>
            <dd class="separate"></dd>
            <dd class="flex">盈利<span class="font-red">100%</span>归您</dd>
          </dl>
          <a class="btn" href="/trade/interestFree.html">立即申请</a>
        </div>
      </div>
      <div class="index-product">
        <div class="product-flag flag-yel">短线</div>
        <div class="product-wrap">
          <div class="name"><strong>按天操盘</strong><span>按天计息</span></div>
          <dl class="des flex-box">
            <dd><span class="font-yel">3-10</span>倍杠杆</dd>
            <dd class="separate"></dd>
            <dd class="flex">盈利<span class="font-yel">100%</span>归您</dd>
          </dl>
          <a class="btn btn-yel" href="/trade/dayTrade.html">立即申请</a>
        </div>
      </div>
      <div class="index-product">
        <div class="product-flag flag-blue">长线</div>
        <div class="product-wrap">
          <div class="name"><strong>按月操盘</strong><span>按月计息</span></div>
          <dl class="des flex-box">
            <dd><span class="font-blue">3-8</span>倍杠杆</dd>
            <dd class="separate"></dd>
            <dd class="flex">盈利<span class="font-blue">100%</span>归您</dd>
          </dl>
          <a class="btn btn-blue" href="/trade/monthTrade.html">立即申请</a>
        </div>
      </div>
    </div>
    <Footer :nownav="1"/>
  </div>
</template>

<script>
import appConf from 'Conf/appConfig'
import { Toast } from 'Pack/index'
import { Swipe, SwipeItem } from 'mint-ui'
import Stock from 'Comp/Stock'
import Footer from 'Comp/Footer'
export default {
  name: 'App',
  components: {Toast, Swipe, SwipeItem, Stock, Footer},
  data () {
    return {
      adList: [],
      imgs: [
        require('Assets/img/icon_helpcenter.png'),
        require('Assets/img/icon_dealrecord.png')
      ],
      stockList: {}
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
    stock_grial: function () {
      let _self = this
      $.get(appConf.baseUrl + '/tools/list_ajax.ashx', {act: 'stock_grail', t: new Date()}, function (data) {
        let stocklist = data.split('#')
        if (stocklist.length > 0) {
          _self.$set(_self.stockList, 'sh_list', stocklist[0].split(','))
          _self.$set(_self.stockList, 'zs_list', stocklist[1].split(','))
          _self.$set(_self.stockList, 'sc_list', stocklist[2].split(','))
        }
      })
    }
  },
  mounted: function () {
    this.$nextTick(() => {
      this.getAdList()
      this.stock_grial()
      setInterval(this.stock_grial, 5000)
    })
  }
}
</script>
<style src="../../assets/css/reset.css"></style>
<style src="../../assets/css/app.css"></style>
<style>
  .swiper-container {
    max-width: 750px;
    width: 100%;
    margin: 0 auto;
    height: 300px;
  }

  .swiper-container img {
    width: 100%;
  }

  .index-menu ul {
    display: flex;
    margin: 20px;
  }

  .index-menu li {
    flex: 1;
    text-align: center;
    background: #fff;
    border-radius: 10px;
  }

  .index-menu li + li {
    margin-left: 20px;
  }

  .index-menu li a {
    padding: 30px 20px;
  }

  .index-menu li a .icon {
    height: 80px;
    width: 80px;
    line-height: 80px;
    background: #e9484d;
    border-radius: 50%;
    text-align: center;
    justify-content: center;
  }

  .index-menu li a .icon-blue {
    background-color: #59a4e4;
  }

  .index-menu li a .icon img {
    max-height: 40px;
    max-width: 40px;
    vertical-align: middle;
  }

  .index-menu li a > p {
    font-size: 32px; /*px*/
    text-align: left;
    margin: 0 0 0 30px;
  }

  .index-product {
    position: relative;
    background: #fff;
    margin: 20px;
    padding: 30px;
    border-radius: 10px;
  }

  .index-product .product-flag {
    position: absolute;
    left: 20px;
    top: 0;
    height: 128px;
    line-height: 128px;
    width: 60px;
    font-size: 24px; /*px*/
    background: #c80006;
    color: #fff;
    text-align: center;
    overflow: hidden;
  }

  .index-product .product-flag.flag-yel {
    background: #f39800;
  }

  .index-product .product-flag.flag-blue {
    background: #0064b9;
  }

  .index-product .product-flag:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: -34px;
    bottom: -16px;
    border-width: 0 64px 36px;
    border-style: solid;
    border-color: transparent transparent #fff transparent;
  }

  .index-product .product-wrap {
    padding-left: 80px;
    text-align: center;
    color: #333;
  }

  .index-product .product-wrap .name strong {
    font-size: 36px;/*px*/
  }

  .index-product .product-wrap .name span {
    display: inline-block;
    width: 140px;
    font-size: 28px;/*px*/
  }

  .index-product .product-wrap .des {
    padding: 20px 0;
    justify-content: center;
    text-align: center;
  }

  .index-product .product-wrap .des dd {
    font-size: 30px;/*px*/
    height: 60px;
    line-height: 60px;
  }

  .index-product .product-wrap .des dd:first-child {
    width: 40%;
    white-space: nowrap;
  }

  .index-product .product-wrap .des dd.separate {
    width: 10%;
    position: relative;
  }

  .index-product .product-wrap .des dd.separate:after {
    content: '';
    position: absolute;
    left: 50%;
    top: 12px;
    height: 36px;
    width: 1px;
    background: #dcdcdc;
  }

  .index-product .product-wrap .des dd > span {
    font-size: 36px;/*px*/
    font-family: Arial;
  }

  .index-product .product-wrap .btn {
    width: 70%;
    margin: 0 auto;
  }
</style>
