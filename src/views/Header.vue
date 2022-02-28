<!--头部区域-->
<template>
  <nav-bar/>
  <header-content/>
  <base-nav/>
  <banner/>
  <search/>
</template>

<script>
import NavBar from '@/components/header/NavBar.vue';
import HeaderContent from '@/components/header/HeaderContent.vue';
import BaseNav from '@/components/header/BaseNav.vue';
import Banner from '@/components/container/Banner.vue';
import Search from '@/components/container/Search.vue';

export default {
  name: 'Header',
  components: {
    NavBar, HeaderContent, BaseNav, Banner, Search,
  },
};
</script>

<style scoped>

</style>
