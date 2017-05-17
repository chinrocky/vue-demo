<template>
  <div>
    <div class="g-header-seat">
      <div id="header" class="m-default-hader">
        <a class="ico-left icon-back" onclick="window.history.go(-1)"></a>
        <a class="ico-right icon-search" href="javascript:void(0)"></a>
        <h1>{{getListTitle}}</h1>
      </div>
    </div>
    <ShopListView></ShopListView>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
import ShopListView from './ShopList.vue'
export default{
  components: {
    ShopListView
  },
  computed: mapGetters([
    'getListTitle'
  ])
}
</script>
