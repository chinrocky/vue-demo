<template>
  <div>
    <ListNavView></ListNavView>
    <CardListView></CardListView>
  </div>
</template>

<script>
import Vuex from 'vuex'
import ListNavView from './ListNav.vue'
import CardListView from './CardList.vue'

export default {
  components :{
    ListNavView,
    CardListView
  }
}
</script>
