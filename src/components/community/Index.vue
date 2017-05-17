<template>
  <div id="community">
    <NavView v-show=getCommunityIndexState></NavView>
    <keep-alive exclude="community_contents">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
import NavView from './Nav.vue'

export default {
  computed: mapGetters([
    'getCommunityIndexState'
  ]),
  components: {
    NavView
  }
}
</script>
