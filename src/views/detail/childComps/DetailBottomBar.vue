<!--  -->
<template>
  <div class="content">
    <div class="left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="right">
      <div class="addShopCart" @click="addCart">加入购物车</div>
      <div class="buy" @click="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    addCart() {
      this.$emit("cartClick");
    },
    buy() {
      this.addCart();
      this.$router.push("/shopCart");
    },
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
.content {
  display: flex;
  height: 54px;
  position: fixed;
  background-color: #fff;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  text-align: center;
}
.left,
.right {
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.left {
  font-size: 14px;
}

.left .icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 10px auto 3px;
  background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
}

.left .service {
  background-position: 0 -54px;
}

.left .shop {
  background-position: 0 -98px;
}
.addShopCart {
  background-color: black;
  color: #fff;
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.buy {
  flex: 1;
  background: red;
  height: 100%;
  color: #fff;
  align-items: center;
  display: flex;
  justify-content: center;
}
</style>