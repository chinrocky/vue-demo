<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <FootView v-show="getFootState"></FootView>

  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
import FootView from './components/Foot.vue'

export default {
  data(){
    return {
      communityIndex: /^\/community\/([a-z]\w*)$/,
      menuIndex: /^\/menu\/([a-z]+)$/,
      shopIndex: /^\/shop\/([0-9]+)$/,
      shopContent: /^\/shop\/([0-9]+)\/([0-9]+)\/([0-9]+)$/,
    }
  },
  methods: {
    ...mapActions({
      setCommunityIndexState: 'setCommunityIndexState',
      setShopIndexState: 'setShopIndexState',
      setFootState: 'setFootState'
    }),
    setModularState(url){
      if( url.search(this.communityIndex) == -1 ){
        this.$store.dispatch('setCommunityIndexState', false);
      }else{
        this.$store.dispatch('setCommunityIndexState', true);
      };
      if( url.search(this.menuIndex) == -1 ){
        this.$store.dispatch('setMenuIndexState', false);
      }else{
        this.$store.dispatch('setMenuIndexState', true);
      };
      if( url.search(this.shopIndex) == -1 ){
        this.$store.dispatch('setShopIndexState', false);
      }else{
        this.$store.dispatch('setShopIndexState', true);
      };

      if( url.search(this.shopContent) == -1 ){
        this.$store.dispatch('setFootState', true);
      }else{
        this.$store.dispatch('setFootState', false);
      };
    }
  },
  computed: mapGetters([
    'getFootState'
  ]),
  components :{
    FootView
  },
  watch:{
    $route(to,form){
      this.setModularState(to.path);
    }
  },
  mounted: function() {
    this.setModularState(this.$route.path);
  }
}
</script>
