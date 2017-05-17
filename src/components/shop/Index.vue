<template>
  <div>
    <div class="g-header-seat" v-show=getShowIndexState>
      <div id="header" class="m-default-hader">
        <a class="ico-left icon-mark" href="javascript:void(0)"></a>
        <a class="ico-right icon-search" href="javascript:void(0)"></a>
        <h1>商场</h1>
      </div>
    </div>
    <div class="g-shop-class" v-bind:class="{'IndexActive':getShowIndexState}">
      <VerticalNavbar v-show=getShowIndexState :categoryData='shop_category'></VerticalNavbar>
      <keep-alive exclude="shop_content">
        <router-view :categoryData='shop_category'></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'

import VerticalNavbar from './VerticalNavBar.vue'

export default{
  data(){
    return {
      shop_category: []
    }
  },
  components: {
    VerticalNavbar
  },
  computed: mapGetters([
    'getShowIndexState'
  ]),
  mounted: function() {
    this.fetchData(); //获取数据
  },
  methods: {
    fetchData(){
      var _this = this;
      this.$http.get('/data/shop_category.data').then(function(res){
        _this.shop_category = res.data;
      }).catch(function(err) {
        console.log('ShopIndex',err);
      })
    }
  }
}
</script>
