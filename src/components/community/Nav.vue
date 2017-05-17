<template>
  <div class="g-header-seat">
    <div id="header" class="m-default-hader">
      <a class="ico-left icon-mark" href="javascript:void(0)"></a>
      <a class="ico-right icon-search" href="javascript:void(0)"></a>
      <ul>
        <router-link to="/community/broadcast" tag="li" active-class="router-link-active">
          <a href="javascript:void(0)">直播</a>
        </router-link>
        <router-link to="/community/recommend" tag="li" active-class="router-link-active">
          <a href="javascript:void(0)">热帖</a>
        </router-link>
        <router-link to="/community/category" tag="li" active-class="router-link-active">
          <a href="javascript:void(0)">圈子</a>
        </router-link>
      </ul>
    </div>
  </div>
</template>
