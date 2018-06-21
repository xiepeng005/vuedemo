<template>
  <div class="swiper">
    <div class="swiper-wrap">
      <div class="swiper-item" v-for="item in options.imgGroup" :key="item.id">
        <a :href="item.href"><img :src="item.src"/> </a>
      </div>
    </div>
    <div class="swiper-pagination">
      <span class="pagination-item" :key="item.id" v-for="(item, index) in options.imgGroup" :class="{'pagination-active': index == nowItem}"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Swiper',
  data () {
    return {
      nowItem: 0
    }
  },
  props: ['options'],
  methods: {
    go: function () {
      this.nowItem++
      if (this.nowItem > this.options.imgGroup.length - 1) {
        this.nowItem = 0
      }
    }
  },
  mounted: function () {
    setInterval(this.go, this.options.innerTime)
  }
}
</script>

<style scoped>
  .swiper{
    width: 100%;
    overflow: hidden;
    position: relative;
  }
  .swiper-wrap{
    display: flex;
    align-items: center;
    width: 100%;
    height:100%;
    position: relative;
    z-index: 1;
  }
  .swiper-item{
    width: 100%;
    height:100%;
    flex-shrink: 0;
  }
  .swiper-item a{
    display: block;
  }
  .swiper-item img{
    width: 100%;
    display: block;
  }
  .swiper-pagination{
    position: absolute;
    bottom: 10px;
    left:0;
    width: 100%;
    text-align: center;
    z-index: 2;
  }
  .swiper-pagination .pagination-item{
    display: inline-block;
    height:8px;
    width: 8px;
    border-radius: 50%;
    background: #fff;
  }
  .swiper-pagination .pagination-item + .pagination-item{
    margin-left: 10px;
  }
  .swiper-pagination .pagination-item.pagination-active{
    background: #ff0000;
  }
</style>
