<template>
<div class="m-search">
  <div class="m-searchbox">
    <ul class="m-searchbox-ui">
      <li v-for="(item,index) in UIList" :key="index" @click="switchUI(index)"
          :class="item.checked ? 'ui-current':'ui-nocurrent'">
        <b>{{item.title}}</b>
      </li>
    </ul>
  </div>
  <hotel v-if="checkedIndex === 0"></hotel>
</div>
</template>

<script>
import Hotel from '@/components/container/search-box-container/Hotel.vue';

export default {
  name: 'Search',
  components: [Hotel],
  data() {
    return {
      UIList: [{ checked: true, title: '酒店' }, { checked: false, title: '机票' },
        { checked: false, title: '旅游' }, { checked: false, title: '跟团游' },
        { checked: false, title: '火车' }],
      checkedIndex: 0,
    };
  },
  methods: {
    switchUI(index) {
      this.checkedIndex = index;
      const lastIndex = this.UIList.findIndex((it) => it.checked);
      this.UIList[lastIndex].checked = false;
      this.UIList[index].checked = true;
    },
  },
};
</script>

<style scoped>
.m-search {
  width: 1180px;
  margin: -340px auto 0;
  height: 340px;
}

.m-search:after {
  clear: both;
}

.m-search .m-searchbox {
  position: absolute;
  z-index: 10;
  margin: 20px 0;
  width: 580px;
  height: 300px;
  box-shadow: 0 1px 5px rgb(0 0 0/20%);
  background-color: #fff;
}

.searchbox-animate {
  transition: all .3s ease 0s;
  -webkit-transition: all .3s ease 0s;
}

.m-searchbox-ui {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #257ee3;
  width: 90px;
  height: 300px;
}

.m-searchbox-ui li {
  float: left;
  display: inline-block;
  width: 60px;
  height: 42px;
  padding: 0 17px 0 13px;
  margin: 0;
  border-left: 4px solid #257ee3;
  font: 16px/42px "Microsoft YaHei", SimSun,Tahoma,Verdana,Arial,sans-serif;
  text-align: left;
  color: #fff;
  position: relative;
}

.m-searchbox-ui li:hover {
  border-bottom: none;
  border-left: 4px solid #ff9915 !important;
  color: #257ee3 !important;
  background: #fff;
  cursor: pointer;
}

.m-searchbox-ui li b {
  display: block;
  height: 42px;
  border-bottom: 1px dashed #aac3f1;
  font-weight: 400;
  position: relative;
}

.m-searchbox-ui li:last-of-type b {
  border-bottom: none;
}

.m-searchbox-ui li:hover,.ui-current {
  border-bottom: none;
  border-left: 4px solid #ff9915 !important;
  color: #257ee3 !important;
  background: #fff;
}

 /*TODO鼠标形态*/
.ui-current {
  cursor: default;
}

.ui-nocurrent {
  cursor: pointer;
}
</style>
