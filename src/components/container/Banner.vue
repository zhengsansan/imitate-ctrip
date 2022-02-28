<!--搜索框区域-->
<template>
<div class="mod-banner">
  <div class="pic-banner">
    <div class="carousel-container">
      <div class="carousel-wrapper">
        <div class="carousel-slide">
          <img src="https://dimg04.c-ctrip.com/images/0zg6d120009bdrrejC6DE.jpg"/>
        </div>
      </div>
    </div>
  </div>
</div>
<Search />
</template>
<script>

export default {
  name: 'Banner',
};
</script>

<style scoped>
.mod-banner {
  height: 340px;
  overflow: hidden;
}

.mod-banner .pic-banner {
  overflow: hidden;
  width: 100%;
  height: 340px;
  position: relative;
  margin: 0 auto;
}

.carousel-container {
  transform: scale(1) translateY(0) translateX(-320px);
  transform-origin: 0 0;
  width: 1920px;
  height: 320px;
  position: relative;
  margin: 0;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
}

.carousel-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;
}

.carousel-slide {
  width: 1920px;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
  border-radius: 0;
  overflow: hidden;
  background-color: rgb(255, 255, 255);
  flex-shrink: 0;
  transition-property: transform;
}

.carousel-slide img {
  width: 1920px;
  height: 340px;
  left: 0;
  top: 0;
  position: absolute;
  border-radius: 0;
  box-shadow: rgb(0 0 0 / 10%) 0 0 0 0;
  border: none;
  vertical-align: middle;
}
</style>
