<template>
  <div class="head" id="header">
    <div class="main">
      <div class="logo"><img src="../assets/logo.png"/></div>
      <div class="nav">
        <ul>
          <li><a href="/" @click="nowNav = 0" :class="{active: nowNav === 0}">首页</a> </li>
          <li><a href="/about.html" @click="nowNav = 1" :class="{active: nowNav === 1}">关于我们</a></li>
          <li><a href="/contact" @click="nowNav = 2" :class="{active: nowNav === 2}">联系我们</a> </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  props: ['nowNav']
}
</script>
<style scoped>
  .head{
    height:80px;
    line-height: 80px;
  }
  .head .logo{
    float: left;
    height:80px;
  }
  .head .logo img{
    max-height: 80px;
  }
  .head .nav{
    float: right;
  }
  .head .nav ul{
    margin: 0;
    list-style: none;
  }
  .head .nav li{
    list-style: none;
    float: left;
  }
  .head .nav li + li{
    margin-left: 30px;
  }
  .head .nav li a{
    display: block;
    text-decoration: none;
    padding:0 10px;
  }
  .head .nav li a.active,
  .head .nav li a:hover{
    color:#fff;
    background: red;
  }
</style>
