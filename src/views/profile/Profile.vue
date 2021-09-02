<!--  -->
<template>
  <div class="profile">
    <div class="content">
      <NavBar class="nav">
        <div slot="center">个人主页</div>
      </NavBar>

      <UserInfo />
      <Account />
      <ListView :listData="this.orderList" />
      <ListView :listData="this.serviceList" />
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import UserInfo from "./childComps/UserInfo";
import Account from "./childComps/account";
import ListView from "./childComps/ListView";

export default {
  components: { NavBar, UserInfo, Account, ListView },
  data() {
    return {
      orderList: [
        { image: "message", title: "我的消息" },
        { image: "pointer", title: "积分商城" },
        { image: "vip", title: "会员卡" },
      ],
      serviceList: [
        { image: "cart", title: "我的购物车" },
        { image: "shopping", title: "下载购物APP" },
      ],
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
.profile {
  height: 100vh;
  position: relative;
}
.content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 49px;
  overflow: hidden;
}
.nav {
  background-color: black;
  color: #fff;
  font-weight: 600;
  font-size: 18px;
}
</style> 