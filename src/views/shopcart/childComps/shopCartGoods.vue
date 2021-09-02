<!--  -->
<template>
  <div>
    <div class="content" v-for="(item, index) in cartList" :key="index">
      <div class="selecter">
        <div
          class="select"
          @click="selectClick(item)"
          :class="{ active: item.checked }"
        >
          <img src="~/assets/img/cart/tick.svg" alt="" />
        </div>
      </div>
      <div class="goodsImg"><img :src="item.image" /></div>
      <div class="info">
        <div class="title">{{ item.title }}</div>
        <div class="text">{{ item.desc }}</div>
        <div class="number">
          <div class="price">{{ item.newPrice }}</div>
          <div class="count-content">
            <button
              class="decrease"
              @click="countDecrease(item)"
              :disabled="!item.count"
            >
              -
            </button>
            {{ item.count }}
            <button class="add" @click="countAdd(item)">+</button>
          </div>
        </div>
      </div>
    </div>
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
    ...mapGetters(["cartList"]),
  },
  watch: {},
  methods: {
    selectClick(item) {
      item.checked = !item.checked;
    },
    countDecrease(item) {
      if (item.count > 0) {
        item.count--;
      }
    },
    countAdd(item) {
      item.count++;
    },
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
.content {
  display: flex;
  padding: 5px;
  border-bottom: 1px solid gray;
}
.selecter {
  display: flex;
  align-items: center;
}
.select {
  width: 18px;
  height: 18px;
  border-radius: 50%;

  border: 1px solid gray;
}
.goodsImg {
  display: flex;
  align-items: center;
  margin: 0 7px;
}
.goodsImg img {
  width: 80px;
  height: 120px;
}
.info {
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.text {
  margin-top: 5px;
  font-size: 12px;
}
.number {
  margin-top: 62px;
  display: flex;
  justify-content: space-between;
  padding: 0 5px;
}
.price {
  color: red;
}
.active {
  background-color: red;
  border: 1px solid red;
}
.decrease,
.add {
  padding: 0 4px;
}
</style>