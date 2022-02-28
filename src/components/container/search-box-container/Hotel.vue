<!--酒店搜索组件-->
<template>
<div class="s-content">
  <p class="s-subtab"></p>
</div>
</template>

<script>
export default {
  name: 'Hotel',
};
</script>

<style scoped>
.s-content {
  margin-left: 90px;
  width: 451px;
  height: 275px;
  padding: 20px 20px 5px;
  text-align: left;
  background-color: red;
}

.s-subtab {
  height: 27px;
  background-position: 0 -96px;
  background-repeat: repeat-x;
  margin-bottom: 8px;
  font-family: "Microsoft YaHei",SimSun,Tahoma,Verdana,Arial,sans-serif;
  position: relative;
  line-height: 20px;
  background-image: url("https://pic.c-ctrip.com/index/un_bg_line_141218.png");
}
</style>
