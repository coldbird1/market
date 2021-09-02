<!--  -->
<template>
  <div class="shopCart">
    <NavBar class="navbar">
      <div slot="center">购物车({{ cartListLength }})</div>
    </NavBar>
    <Scroll class="scrollContent">
      <ShopCartGoods />
    </Scroll>
    <CartBottom class="cart-bottom" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { mapGetters } from "vuex";
import ShopCartGoods from "./childComps/shopCartGoods";
import Scroll from "components/common/scroll/Scroll";
import CartBottom from "./childComps/cartBottom.vue";
export default {
  components: {
    NavBar,
    ShopCartGoods,
    Scroll,
    CartBottom,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["cartListLength"]),
  },
  watch: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
.shopCart {
  position: relative;
  height: 100vh;
}
.navbar {
  background-color: black;
  color: #fff;
}
.scrollContent {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 85px;
  overflow: hidden;
}
.cart-bottom {
  height: 36px;
  position: absolute;
  bottom: 49px;
  left: 0;
  right: 0;
  line-height: 36px;
}
</style>