<!--顶部搜索框-->
<template>
<div class="cui-hd-cnt">
  <div class="cui-hd">
    <div class="logo">
      <a title="携程旅行网" href="#"></a>
    </div>
    <div class="search">
      <input type="text" placeholder="搜索旅行地/酒店/旅游/景点门票/交通"/>
      <button title="搜索"></button>
      <!--展示搜索结果-->
      <div></div>
    </div>
    <div class="tel">
      <ul class="tel-list">
        <li>境内：95010</li>
        <li>（或）400-830-6666</li>
      </ul>
      <font-awesome-icon icon="caret-down" class="tel-narrow"/>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'HeaderContent',
};
</script>

<style scoped>
.cui-hd-cnt{
  background: #fff;
}

.cui-hd-cnt .cui-hd{
  position: relative;
  min-width: 980px;
  max-width: 1180px;
  margin: 0 auto;
  height: 80px;
  background: #fff;
}

.cui-hd .logo {
  position: absolute;
  width: 203px;
  height: 34px;
  margin: 23px 0;
  display: inline-block;
  z-index: 10;
  left: 0;
}

.cui-hd .logo a {
  display: block;
  width: 100%;
  height: 100%;
  background: url("https://pic.c-ctrip.com/platform/online/login/c_logo2020.png") no-repeat;
  background-size: 100% 100%;
}

.cui-hd .search {
  position: absolute;
  top: 25px;
  left: 253px;
  width: 28%;
}

.cui-hd .search input[type="text"] {
  border-radius: 4px;
}

.cui-hd .search input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 28px;
  padding: 0 45px 0 5px;
  font-size: 12px;
  border: 1px solid #8ebefc;
  box-shadow: 2px 2px 1px 0 rgb(164 203 255 / 25%) inset;
}

.cui-hd .search button {
  position: absolute;
  top: 1px;
  right: -51px;
  width: 42px;
  height: 28px;
  cursor: pointer;
  border: 0 none;
  background-color: #a4cbff;
  background-position: -52px -603px ;
  background-image: url("https://pic.c-ctrip.com/platform/online/home/un_header_footer20160610.png");
  background-repeat: no-repeat;
}

.cui-hd .tel {
  position: absolute;
  right: 0;
  top: 10px;
  padding: 10px 20px 0 16px;
  border: 1px solid #fff;
  font-family: Arial, tahoma, verdana, "Microsoft YaHei", Simsun, sans-serif;
}

.cui-hd .tel .tel-list {
  text-align: right;
  color: #666;
  font-size: 12px;
  line-height: 20px;
}

.cui-hd .tel .tel-narrow{
  position: absolute;
  top: 28px;
  right: 9px;
  font-size: 10px;
  color: #666;
}
</style>
