<script setup>
import { getImageUrl } from "../helpers/getImageUrl";
// Swiperを導入
import { register } from "swiper/element/bundle";
register();
// swiper : pagenationの設定
const pagenationSettings = {
  hideOnClick: false,
  renderBullet: (index, className) => {
    return `<span class='${className} workPagination'></span>`;
  },
};
</script>

<template>
  <swiper-container
    :pagination="pagenationSettings"
    :speed="2000"
    :loop="true"
    :autoplay="{
      delay: 4000,
    }"
    class="mv-swiper"
  >
    <swiper-slide>
      <RouterLink :to="{ name: 'article', params: { id: 'cat01'} }">
        <img :src="getImageUrl('cat01')" class="list__item-image" alt="" />
      </RouterLink>
    </swiper-slide>
    <swiper-slide>
      <RouterLink :to="{ name: 'article', params: { id: 'cat07'} }">
      <img :src="getImageUrl('cat07')" class="list__item-image" alt="" />
      </RouterLink>
    </swiper-slide>
    <swiper-slide>
      <RouterLink :to="{ name: 'article', params: { id: 'cat11'} }">
      <img :src="getImageUrl('cat11')" class="list__item-image" alt="" />
      </RouterLink>
    </swiper-slide>
    <swiper-slide>
      <RouterLink :to="{ name: 'article', params: { id: 'cat15'} }">
      <img :src="getImageUrl('cat15')" class="list__item-image" alt="" />
      </RouterLink>
    </swiper-slide>
    <swiper-slide>
      <RouterLink :to="{ name: 'article', params: { id: 'cat18'} }">
      <img :src="getImageUrl('cat18')" class="list__item-image" alt="" />
      </RouterLink>
    </swiper-slide>
  </swiper-container>
</template>
