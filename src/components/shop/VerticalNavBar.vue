<template>
  <div class="m-vertical-navbar">
    <ul>
      <router-link v-for="value in categoryData" :to="value.id" tag="li" active-class="router-link-active">
        <a href="javascript:void(0)">{{value.name}}</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default{
  props: ['categoryData']
}
</script>
