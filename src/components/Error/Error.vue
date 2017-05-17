<template>
  <div class="Eroor">
    <div>
      <img src="http://images.zjlsp.cn/error.png" alt="404">
      <p>sorry 您访问的页面数据丢失了</p>
      <p>赶紧报告系统管理员</p>
    </div>
  </div>
</template>

<style scoped>
  .Eroor{position:fixed; background: #fff; width:100%; height:100%; top:0px; left:0px; font-size: 0.001px; z-index: 998;}
  .Eroor:before{content:''; display: inline-block; height: 100%; vertical-align: middle;}
  .Eroor>div{display: inline-block; font-size: 1.6rem; max-width: 100%; vertical-align: middle; text-align: center; width:100%;}
  .Eroor img{width:40%; margin-bottom:10px;}
  .Eroor p{font-size:0.48rem; line-height: 1rem;}
</style>
