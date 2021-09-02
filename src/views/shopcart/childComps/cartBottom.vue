<!--  -->
<template>
  <div class="" v-show="cartListLength">
    <div class="left">
      <span class="selecter" @click="allClick"
        ><img
          :class="{ active: selectAll }"
          src="~/assets/img/cart/tick.svg"
          alt=""
      /></span>
      <span class="all">全选</span>
      <span class="total">合计:￥{{ totalPrice }}</span>
    </div>
    <div class="right">去计算({{ totalcount }})</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["cartList", "cartListLength"]),

    selectAll() {
      return this.cartList.every((value) => {
        return value.checked == true;
      });
    },
    totalPrice() {
      return this.cartList
        .filter((value) => {
          return value.checked == true;
        })
        .reduce((total, value) => {
          let price = parseFloat(value.newPrice.slice(1));
          return total + value.count * price;
        }, 0);
    },
    totalcount() {
      return this.cartList
        .filter((value) => {
          return value.checked == true;
        })
        .reduce((total, value) => {
          return total + value.count;
        }, 0);
    },
  },
  watch: {},
  methods: {
    allClick() {
      let temp = this.cartList.every((value) => {
        return value.checked == true;
      });

      if (temp) {
        this.cartList.forEach((value) => {
          value.checked = false;
        });
      } else {
        this.cartList.forEach((value) => {
          value.checked = true;
        });
      }
    },
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
.left {
  background-color: black;
  width: 72%;
  color: #fff;
}

img {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid gray;
  background-color: #fff;
}
.selecter {
  position: relative;
  bottom: -4px;
  left: 10px;
}
.all {
  margin-left: 20px;
  margin-right: 50px;
}
.right {
  width: 28%;
  background-color: orange;
  text-align: center;
  color: black;
}
.active {
  background-color: red;
  border: 1px solid red;
}
</style>