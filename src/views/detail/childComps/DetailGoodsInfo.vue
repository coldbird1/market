<!--  -->
<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{ detailInfo.desc }}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{ detailInfo.detailImage[0].key }}</div>
    <div class="info-list">
      <img
        v-for="(item, index) in detailInfo.detailImage[0].list"
        :src="item"
        alt=""
        :key="index"
        @load="imageLoad"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detailInfo: {
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
  methods: {
    imageLoad() {
      this.$emit("imageLoad");
    },
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
.goods-info {
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
  position: relative;
}

.info-desc .start {
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
  position: relative;
}
.info-desc .end {
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
  position: absolute;
  right: 0;
}
.info-desc .desc {
  padding: 15px 0;
  font-size: 14px;
}
.start::before {
  content: "";
  background-color: black;
  width: 5px;
  height: 5px;
  position: absolute;
  top: 0;
  left: 0;
}
.end::after {
  content: "";
  background-color: black;
  width: 5px;
  height: 5px;
  position: absolute;
  bottom: 0;
  right: 0;
}
.info-key {
  margin: 10px 0;
}
.info-list img {
  width: 100%;
}
</style>