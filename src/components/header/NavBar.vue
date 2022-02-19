<!--头部导航栏-->
<template>
  <div class="cui-nav-bar ">
    <div class="nav-bar-cont">
      <div class="slogan">让旅行更幸福</div>
      <ul class="language">
        <font-awesome-icon :icon="['fas', 'globe']"></font-awesome-icon>
        Language
        <font-awesome-icon icon="caret-down" />
      </ul>
      <span class="assist">
        <font-awesome-icon icon="heartbeat"/>
        网站无障碍
      </span>
      <ul class="nav-bar-set">
        <li class="set-list set-logIn"><a class="person-text">您好，请登录</a></li>
        <li class="set-list">免费注册</li>
        <li class="set-list">
          <font-awesome-icon icon="envelope"/>
          消息</li>
        <li class="set-list">
          我的携程
          <font-awesome-icon icon="caret-down" />
        </li>
        <li class="set-list">
          我的订单
          <font-awesome-icon icon="caret-down" />
        </li>
        <li class="set-list">客服中心</li>
        <li class="set-list">
          <a><font-awesome-icon icon="mobile-phone"/></a>
        </li>
        <li class="set-list">
          <a><font-awesome-icon :icon="['fab', 'weixin']"/></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style scoped>
.cui-nav-bar {
  font: 12px/1.5 "Microsoft yahei", arial, Simsun, sans-serif;
  color: #333;
  background: #F4F4F4;
}

.cui-nav-bar .nav-bar-cont {
  position: relative;
  margin: 0 auto;
  height: 36px;
  min-width: 980px;
  max-width: 1180px;
}

.cui-nav-bar .slogan {
  position: absolute;
  left: 0;
  font-size: 12px;
  color: #666;
  display: inline-block;
  margin: 10px 0 0 14px;
}

.cui-nav-bar .language {
  position: absolute;
  left: 103px;
  line-height: 36px;
}
.cui-nav-bar .assist {
  position: absolute;
  left: 223px;
  top: 0;
  padding: 0 15px 0 13px;
  line-height: 35px;
  color: #666;
}

.cui-nav-bar .assist:hover {
  cursor: pointer;
  color: #3983e5;
}

.cui-nav-bar .nav-bar-set {
  position: absolute;
  right: 0;
  height: 36px;
}

.cui-nav-bar .set-logIn.set-list {
  border-right: none;
}

.cui-nav-bar .set-list {
  float: left;
  height: 12px;
  line-height: 12px;
  margin: 11px 0 0 0;
  border-right: 1px solid #DDD;
  position: relative;
  z-index: 31;
  padding: 0 15px;
}

.cui-nav-bar .person-text {
  display: inline-block;
  margin: -12px -1px 0;
  cursor: pointer;
}
</style>
