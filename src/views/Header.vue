<!--头部区域-->
<template>
  <nav-bar />
  <HeaderContent />
</template>

<script>
import NavBar from '@/components/header/NavBar.vue';
import HeaderContent from '@/components/header/HeaderContent.vue';

export default {
  name: 'Header',
  components: { NavBar, HeaderContent },
};
</script>

<style scoped>

</style>
