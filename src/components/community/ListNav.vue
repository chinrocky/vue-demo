<template>
  <div class="g-header-seat">
    <div id="header" class="m-default-hader">
      <a class="ico-left icon-back" onclick="window.history.go(-1)"></a>
      <a class="ico-right icon-info" href="javascript:void(0)"></a>
      <h1>{{getListTitle}}</h1>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default{
  computed: mapGetters([
    'getListTitle'
  ]),
}
</script>
