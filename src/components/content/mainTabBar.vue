<!--  -->
<template>
  <div class="main-tabbar">
    <TabBar>
      <TabBarItem path="/home">
        <img src="~assets/img/tabbar/home.svg" slot="tabbar-item-img" />
        <img
          slot="tabbar-item-img-active"
          src="~assets/img/tabbar/home_active.svg"
        />
        <div slot="tabbar-item-text">首页</div>
      </TabBarItem>
      <TabBarItem path="/category">
        <img src="~assets/img/tabbar/category.svg" slot="tabbar-item-img" />
        <img
          slot="tabbar-item-img-active"
          src="~assets/img/tabbar/category_active.svg"
        />
        <div slot="tabbar-item-text">分类</div>
      </TabBarItem>
      <TabBarItem path="/shopCart">
        <img src="~assets/img/tabbar/shopcart.svg" slot="tabbar-item-img" />
        <img
          slot="tabbar-item-img-active"
          src="~assets/img/tabbar/shopcart_active.svg"
        />
        <div slot="tabbar-item-text">购物车</div>
      </TabBarItem>
      <TabBarItem path="/profile">
        <img src="~assets/img/tabbar/profile.svg" slot="tabbar-item-img" />
        <img
          slot="tabbar-item-img-active"
          src="~assets/img/tabbar/profile_active.svg"
        />
        <div slot="tabbar-item-text">个人</div>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  components: {
    TabBar,
    TabBarItem,
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
</style>