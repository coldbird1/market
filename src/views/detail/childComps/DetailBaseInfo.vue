<!--  -->
<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{ goods.title }}</div>
    <div class="info-price">
      <span class="n-price">{{ goods.newPrice }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <span class="discount">{{ goods.discount }}</span>
    </div>
    <div class="info-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info-service">
      <span
        class="info-service-item"
        v-for="index in goods.services.length - 2"
        :key="index"
      >
        <img :src="goods.services[index].icon" />
        <span>{{ goods.services[index].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
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
};
</script>
<style scoped>
.base-info {
  padding: 10px;
}
.info-title {
  font-weight: 500;
}
.info-price {
  padding: 18px 0;
}
.n-price {
  font-size: 24px;
  color: red;
}
.o-price {
  margin-left: 10px;
  margin-right: 6px;
  text-decoration: line-through;
  color: darkgray;
}
.discount {
  font-size: 5px;
  background-color: red;
  color: #fff;
  border-radius: 10px;
  padding: 1px 5px;
  position: relative;
  top: -7px;
}
.info-other {
  display: flex;
  justify-content: space-between;
  color: grey;
  font-size: 13px;
}
.info-service {
  margin: 10px 0;
  display: flex;

  font-size: 14px;
  padding: 20px 0;
  border-top: solid 1px rgba(0, 0, 0, 0.1);
  border-bottom: solid 5px rgba(0, 0, 0, 0.06);
}
.info-service span {
  width: 33.3%;
}
.info-service img {
  height: 14px;
}
</style>