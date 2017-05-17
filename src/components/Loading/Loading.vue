<template>
  <div class="Loading">
    <div>
      <img src="http://images.zjlsp.cn/Loading2.gif" alt="404">
      <p>页面正在加载中…</p>
    </div>
  </div>
</template>

<style scoped>
  .Loading{position:fixed; background: #fff; width:100%; height:100%; top:0px; left:0px; font-size: 0.001px; z-index: 997;}
  .Loading:before{content:''; display: inline-block; height: 100%; vertical-align: middle;}
  .Loading>div{display: inline-block; font-size: 1.6rem; max-width: 100%; vertical-align: middle; text-align: center; width:100%;}
  .Loading img{width:40%; margin-bottom:10px;}
  .Loading p{font-size:0.48rem; line-height: 1rem;}
</style>
