<!--境外直通车-->
<template>
<div class="cui-subway-internal">
  <h2 class="line-title">
    境外直通车
    <i class="icon-arrow"></i>
  </h2>
  <ul>
    <li v-for="(item,index) in subWayList" :key="index">
      <i class="icon"></i>
      <a>{{item.title}}</a>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'SubWay',
  data() {
    return {
      subWayList: [
        { icon: 'https://pic.c-ctrip.com/platform/online/home/un_icon_index_type20170111.png', title: '海外酒店' },
        { icon: 'https://pic.c-ctrip.com/platform/online/home/un_icon_index_type20170111.png', title: '国际·港澳台机票' },
        { icon: 'https://pic.c-ctrip.com/platform/online/home/un_icon_index_type20170111.png', title: '境外租车' },
        { icon: 'https://pic.c-ctrip.com/platform/online/home/un_icon_index_type20170111.png', title: '国际／港台火车票' },
        { icon: 'https://pic.c-ctrip.com/platform/online/home/un_icon_index_type20170111.png', title: '出境游' },
        { icon: 'https://pic.c-ctrip.com/platform/online/home/un_icon_index_type20170111.png', title: '高端游' },
        { icon: 'https://pic.c-ctrip.com/platform/online/home/un_icon_index_type20170111.png', title: '门票·活动' },
        { icon: 'https://pic.c-ctrip.com/platform/online/home/un_icon_index_type20170111.png', title: '签证' },
        { icon: 'https://pic.c-ctrip.com/platform/online/home/un_icon_index_type20170111.png', title: '保险' },
        { icon: 'https://pic.c-ctrip.com/platform/online/home/un_icon_index_type20170111.png', title: 'WiＦi·电话卡' },
        { icon: 'https://pic.c-ctrip.com/platform/online/home/un_icon_index_type20170111.png', title: '境外接送机' },
        { icon: 'https://pic.c-ctrip.com/platform/online/home/un_icon_index_type20170111.png', title: '外币兑换' }],
    };
  },
};
</script>

<style scoped>
h2 {
  font-family: "Times New Roman",Simsun
}
.cui-subway-internal {
  min-width: 980px;
  max-width: 1180px;
  height: 22px;
  margin: 0 auto 10px;
  line-height: 22px;
  overflow: hidden;
  background-color: #fff;
}

.cui-subway-internal .line-title{
  position: relative;
  float: left;
  margin-right: 20px;
  padding: 0 5px;
  background-color: #74a8ed;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  border-radius: 2px;
}

.cui-subway-internal .icon-arrow {
  position: absolute;
  right: -8px;
  top: 6px;
  width: 0;
  height: 0;
  border: 4px solid #74a8ed;
  border-color: #fff #fff #fff #74a8ed;
  overflow: hidden;
}
.cui-subway-internal ul li .icon {
  background-position: -26px 0;
  display: inline-block;
  background-image: url("https://pic.c-ctrip.com/platform/online/home/un_icon_index_type20170111.png");
  background-repeat: no-repeat;
  width: 16px;
  height: 16px;
  vertical-align: middle;
  margin-right: 5px;
  margin-top: -1px;
}

.cui-subway-internal ul li {
  float: left;
  margin: 0 13px 0 0;
  line-height: 22px;
}

.cui-subway-internal ul li a {
  color: #666 !important;
}
</style>
