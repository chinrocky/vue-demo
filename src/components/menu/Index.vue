<template>
  <div id="menu">
    <div class="g-header-seat" v-show="getMenuIndexState">
      <div id="header" class="m-default-hader">
        <a class="ico-left icon-mark" href=""></a>
        <a class="ico-right icon-search" href=""></a>
        <ul>
          <router-link to="/menu/popular" tag="li" active-class="router-link-active">
            <a href="javascript:void(0)">流行</a>
          </router-link>
          <router-link to="/menu/newest" tag="li" active-class="router-link-active">
            <a href="javascript:void(0)">最新</a>
          </router-link>
          <router-link to="/menu/recommend" tag="li" active-class="router-link-active">
            <a href="javascript:void(0)">推荐</a>
          </router-link>
        </ul>
      </div>
    </div>
    <keep-alive exclude="menu_content">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'

export default {
  computed: mapGetters([
    'getMenuIndexState'
  ]),
}
</script>
