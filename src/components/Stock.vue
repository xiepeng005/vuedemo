<template>
  <div class="common-stock-market">
    <ul>
      <li v-for="(item, index) in stockList" :key="index">
        <p>{{item[0]}}</p>
        <div :class="{'font-red': item[3] > 0, 'font-green': item[3] < 0}">
          <strong>{{item[1]}}</strong>
          <span>{{item[2] | transNumber}}</span>
          <span>{{item[3] | transNumber}}%</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  props: ['stockList'],
  filters: {
    transNumber: function (value) {
      let _value = Number(value)
      if (_value > 0) {
        return '+' + _value
      }
      return _value
    }
  }
}
</script>
<style>
  .common-stock-market ul {
    display: flex;
    margin: 20px;
    padding: 20px 0;
    background: #fff;
    border-radius: 10px;
  }

  .common-stock-market li {
    flex: 1;
    text-align: center;
  }

  .common-stock-market li + li {
    border-left: 1px solid #eee;
  }

  .common-stock-market li > p {
    font-size: 26px; /*px*/
    padding: 0;
  }

  .common-stock-market li > div {
    padding: 0;
    font-family: Arial;
  }

  .common-stock-market li > div strong {
    font-size: 40px; /*px*/
    display: block;
  }

  .common-stock-market li > div span {
    font-size: 26px; /*px*/
  }

  .common-stock-market li > div span + span {
    margin-left: 5%;
  }
</style>
