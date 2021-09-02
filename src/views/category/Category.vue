<!--  -->
<template>
  <div class="caregoty">
    <NavBar class="category-nav">
      <div slot="center">商品分类</div>
    </NavBar>
    <Scroll class="category-left">
      <div
        v-for="(item, index) in categoryList"
        :key="index"
        class="category-item"
        :class="{ active: index == currentIndex }"
        @click="itemClick(index)"
      >
        {{ item.title }}
      </div>
    </Scroll>
    <Scroll class="category-right">
      <div class="goods-content">
        <div
          v-for="(item, index) in goodsList"
          :key="index"
          class="category-goods"
        >
          <a :href="item.link">
            <div class="goodsImg"><img :src="item.image" alt="" /></div>
            <div class="goodsTitle">
              {{ item.title }}
            </div>
          </a>
        </div>
      </div>
    </Scroll>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "../../components/common/scroll/Scroll";
import { getCategory, getSubcategory } from "../../network/category";
export default {
  components: {
    NavBar,
    Scroll,
  },
  data() {
    return {
      categoryList: [],
      currentIndex: 0,
      maitKey: null,
      goodsList: [],
    };
  },
  computed: {},
  watch: {},
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this._getSubcategory(index);
    },
    _getSubcategory(index) {
      const key = this.categoryList[index].maitKey;
      getSubcategory(key).then((res) => {
        this.goodsList = res.data.list;
      });
    },
  },
  created() {
    getCategory().then((res) => {
      this.categoryList = res.data.category.list;
      this._getSubcategory(0);
    });
  },
  mounted() {},
};
</script>
<style scoped>
.caregoty {
  position: relative;
  height: 100vh;
}
.category-nav {
  color: #fff;
  background-color: black;
  font-weight: 600;
  position: relative;
}
.category-left {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 70%;
  overflow: hidden;
}
.category-item {
  padding: 12px;
  background: rgba(0, 0, 0, 0.08);
  text-align: center;
}
.category-right {
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 30%;
  overflow: hidden;
}
.goods-content {
  display: flex;
  flex-wrap: wrap;
}
.category-goods {
  width: 30%;
  height: 100px;
  text-align: center;
  margin: 4px;
  padding: 8px;
  font-size: 12px;
}
.category-goods img {
  width: 100%;
}
.active {
  color: red;
  background-color: #fff;
  font-weight: 600;
}
</style>