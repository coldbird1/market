<!--  -->
<template>
  <div class="goods-list">
    <div
      v-for="(item, index) in goods"
      :key="index"
      class="goods"
      @click="goodsClick(item)"
    >
      <img :src="item | showImg" alt="" @load="imgLoad" />
      <div class="goods-info">
        <p class="title">{{ item.title }}</p>
        <span class="price">{{ item.price }}</span>
        <span class="collect">{{ item.cfav }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  filters: {
    showImg(value) {
      return value.image || value.show.img;
    },
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    imgLoad() {
      this.$emit("imgLoad");
    },
    goodsClick(item) {
      this.$router.push("/detail/" + item.iid);
    },
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-around;
  padding: 8px 2px 0;
}
.goods {
  width: 48.5%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.goods img {
  width: 100%;
}
.goods-info {
  font-size: 13px;
  margin: 4px 0;
  position: relative;
}
.title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.price {
  margin-left: 20px;
  color: red;
}
p {
  margin-bottom: 4px;
}
.collect {
  position: absolute;
  right: 20px;
  bottom: 0;
}
.collect::before {
  content: "";
  width: 14px;
  height: 14px;
  position: absolute;
  bottom: 0;
  left: -15px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style> 