<template>
  <div class="g-banner" id="banner">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="http://images.zjlsp.cn/home_banner_1.jpg" alt="banner"></div>
      <div class="swiper-slide"><img src="http://images.zjlsp.cn/home_banner_1.jpg" alt="banner"></div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  mounted: function() {
    new Swiper('#banner', { autoplay: 4000 });
  }
}
</script>
