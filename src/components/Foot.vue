<template>
  <div id="footer">
    <ul>
      <router-link to="/home" tag="li" active-class="router-link-active">
        <a href="javascript:void(0)"><i class="icon-home"></i><p>主页</p></a>
      </router-link>
      <router-link to="/menu" tag="li">
        <a href="javascript:void(0)" ><i class="icon-news_hot"></i><p>菜谱</p></a>
      </router-link>
      <router-link to="/community" tag="li">
        <a href="javascript:void(0)" ><i class="icon-community"></i><p>社区</p></a>
      </router-link>
      <router-link to="/shop" tag="li">
        <a href="javascript:void(0)" ><i class="icon-shop"></i><p>觅食</p></a>
      </router-link>
      <!--<li><a href="#"><i class="icon-news_hot"></i><p>菜谱</p></a></li>
      <li><a href="#"><i class="icon-community"></i><p>社区</p></a></li>
      <li><a href="#"><i class="icon-shop"></i><p>觅食</p></a></li>
      <li><a href="#"><i class="icon-my"></i><p>我的</p></a></li>-->
    </ul>
  </div>
</template>
