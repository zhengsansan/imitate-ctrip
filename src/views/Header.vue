<!--头部区域-->
<template>
  <nav-bar />
  <header-content />
  <base-nav />
</template>

<script>
import NavBar from '@/components/header/NavBar.vue';
import HeaderContent from '@/components/header/HeaderContent.vue';
import BaseNav from '@/components/header/BaseNav.vue';

export default {
  name: 'Header',
  components: { NavBar, HeaderContent, BaseNav },
};
</script>

<style scoped>

</style>
