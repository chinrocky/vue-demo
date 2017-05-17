<template>
  <div class="NoData">
    <div>
      <img src="http://images.zjlsp.cn/NoData.png" alt="暂无数据">
      <p>抱歉~，该目录下暂无数据~</p>
      <p>看看其他吧！</p>
    </div>
  </div>
</template>

<style scoped>
  .NoData{position:fixed; background: #fff; width:100%; height:100%; top:0px; left:0px; font-size: 0.001px; z-index: 998;}
  .NoData:before{content:''; display: inline-block; height: 100%; vertical-align: middle;}
  .NoData>div{display: inline-block; font-size: 1.6rem; max-width: 100%; vertical-align: middle; text-align: center; width:100%;}
  .NoData img{width:60%; margin-bottom:10px;}
  .NoData p{font-size:0.48rem; line-height: 1rem;}
</style>
