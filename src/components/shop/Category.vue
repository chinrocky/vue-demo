<template>
  <div class="m-category">
    <div class="list">
      <router-link class="list-data" v-for="value in subList" :to='ParentId+"/"+value.id' >
        <img :src="value.pic" :alt="value.name">
        <p>{{value.name}}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'

export default{
  props: ['categoryData'],
  computed: {
    subList: function () {
      try{
        return this.categoryData[this.$route.params.category].SubCategory;
      }catch(e){ }
    },
    ParentId: function(){
      return this.$route.params.category;
    }
  }
}
</script>
