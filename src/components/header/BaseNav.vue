<!--基础导航栏-->
<template>
<div class="cui-nav">
  <div class="base-nav">
    <ul class="nav-ul" >
      <div v-for="(item,index) in navList" :key="index">
        <li>
          <a>
            {{item.title}}
            <font-awesome-icon v-if="item.open" icon="caret-down" class="narrow"/>
          </a>
        </li>
        <li class="divider"></li>
      </div>
    </ul>
  </div>
</div>
<!--  境外直通车-->
  <sub-way />
</template>

<script>
import SubWay from '@/components/header/SubWay.vue';

export default {
  name: 'BaseNav',
  components: { SubWay },
  data() {
    return {
      navList: [
        {
          title: '首页',
          open: false,
        }, {
          title: '酒店',
          open: true,
        },
        {
          title: '旅游',
          open: true,
        }, {
          title: '跟团游',
          open: false,
        },
        {
          title: '自由行',
          open: false,
        }, {
          title: '机票',
          open: true,
        },
        {
          title: '火车',
          open: true,
        }, {
          title: '汽车 · 船',
          open: true,
        },
        {
          title: '用车',
          open: true,
        }, {
          title: '门票',
          open: true,
        },
        {
          title: '攻略',
          open: false,
        }, {
          title: '全球购',
          open: true,
        },
        {
          title: '礼品卡',
          open: true,
        }, {
          title: '商旅',
          open: true,
        },
        {
          title: '邮轮',
          open: false,
        }, {
          title: '目的地',
          open: false,
        },
        {
          title: '金融',
          open: false,
        }, {
          title: '更多',
          open: true,
        },
      ],
    };
  },
};
</script>

<style scoped>
.cui-nav {
  font-family: 'microsoft yahei', Arial, sans-serif;
  font: 12px/1.5 "Microsoft yahei", arial, Simsun, sans-serif;
  text-align: left;
  width: 100%;
  color: #333;
}

.cui-nav .base-nav {
  margin-bottom: 10px;
  width: 100%;
  height: 40px;
  background-color: #2577e3;
}

.cui-nav .base-nav .nav-ul {
  position: relative;
  z-index: 25;
  min-width: 980px;
  max-width: 1180px;
  margin: 0 auto;
  padding: 0;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  background-color: #257ee3;
}

.cui-nav .base-nav .nav-ul li {
  float: left;
  height: 40px;
  display: inline-block;
}

.cui-nav .base-nav .nav-ul li a {
  position: relative;
  display: block;
  height: 40px;
  padding: 0 11px;
  color: #fff !important;
  cursor: pointer;
  font-width: non;
}

.cui-nav .base-nav .nav-ul li a .narrow{
  font-size: 8px;
  margin-bottom: 2px;
}

.cui-nav .base-nav .nav-ul li.divider {
  width: 1px;
  height: 14px;
  padding-left: 0;
  margin: 13px 0 0;
  background-color: #1767dd;
}

</style>
