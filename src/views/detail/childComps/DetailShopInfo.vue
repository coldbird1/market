<!--  -->
<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo" />
      <span class="title">{{ shop.name }}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">
            {{ shop.sells | sellCountFilter }}
          </div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">
            {{ shop.goodsCount }}
          </div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{ item.name }}</td>
            <td class="score" :class="{ 'score-better': item.isBetter }">
              {{ item.score }}
            </td>
            <td class="better" :class="{ 'better-more': item.isBetter }">
              <span>{{ item.isBetter ? "高" : "低" }}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
  filters: {
    sellCountFilter: function (value) {
      if (value < 10000) return value;
      return (value / 10000).toFixed(1) + "万";
    },
  },
};
</script>
<style scoped>
.shop-info {
  padding: 25px 8px;
  border-bottom: 5px solid #f2f5f8;
}

.shop-top {
  height: 45px;
  display: flex;
}
.shop-top img {
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
}
.title {
  line-height: 45px;
  margin-left: 10px;
}
.shop-middle {
  display: flex;

  margin-top: 20px;
  margin-bottom: 15px;
}
.shop-middle-left,
.shop-middle-right {
  display: flex;
  flex: 1;
  justify-content: center;
  font-size: 13px;
  color: black;
}

.info-sells,
.info-goods {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
.info-goods {
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}
.sells-count,
.goods-count {
  font-size: 18px;
}
.shop-middle-right {
  font-size: 13px;
  color: #333;
}
.shop-middle-right table {
  width: 120px;
}

.shop-middle-right table td {
  padding: 5px 0;
}
.score {
  color: green;
}
.score-better {
  color: red;
}
.better span {
  text-align: center;
  color: #fff;
  background-color: green;
}
.better-more span {
  background-color: red;
}
.shop-bottom {
  display: flex;
  justify-content: center;
}
.enter-shop {
  width: 150px;
  height: 30px;
  background-color: black;
  color: #fff;
  text-align: center;
  line-height: 30px;
  border-radius: 10px;
}
</style>