<!--  -->
<template>
  <!-- 导航栏 -->
  <div class="Home">
    <NavBar class="home-nav">
      <h3 slot="center">购物街</h3>
    </NavBar>
    <TabControl
      :titles="['流行', '新款', '精选']"
      @itemClick="tabClick"
      v-show="isTabFixed"
      class="top-tab-control"
      ref="tabControl1"
    />
    <Scroll
      class="content"
      ref="scroll"
      @scrollToEnd="loadMore"
      @scroll="contentScroll"
      :listenScroll="true"
      :pullup="true"
      :probe-type="3"
    >
      <!-- 轮播图 -->
      <Swiper>
        <SwiperItem v-for="(item, index) in banners" :key="index">
          <a :href="item.link"> <img :src="item.image" /></a>
        </SwiperItem>
      </Swiper>
      <!-- 推荐栏 -->
      <div class="recommend">
        <div v-for="(item, index) in recommends" :key="index">
          <a :href="item.link"
            ><img :src="item.image" alt="" />
            <div>{{ item.title }}</div>
          </a>
        </div>
      </div>
      <!-- 本周流行 -->
      <div class="weekend">
        <img src="~assets/img/home/recommend_bg.jpg" alt="" />
      </div>
      <!-- 分类栏 -->
      <TabControl
        :titles="['流行', '新款', '精选']"
        @itemClick="tabClick"
        ref="tabControl2"
      />
      <GoodsList :goods="goods[currentType].list" @imgLoad="imgLoad" />
    </Scroll>
    <BackTop class="backtop" @click.native="backTop" v-show="isShow" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { Swiper, SwiperItem } from "components/common/swiper";
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/TabControl";
import GoodsList from "components/content/GoodsList";
import BackTop from "../../components/content/BackTop";
import { debounce } from "common/utils";

import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  components: {
    NavBar,
    Swiper,
    SwiperItem,
    Scroll,
    TabControl,
    GoodsList,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isTabFixed: false,
      isShow: false,
      saveY: null,
    };
  },
  computed: {},
  watch: {},
  methods: {
    contentScroll(position) {
      this.isTabFixed = -position.y > this.$refs.tabControl2.$el.offsetTop;
      this.isShow = -position.y > 1000;
    },

    tabClick(index) {
      switch (index) {
        case 0: {
          this.currentType = "pop";
          break;
        }
        case 1: {
          this.currentType = "new";
          break;
        }
        case 2: {
          this.currentType = "sell";
          break;
        }
      }
      this.$refs.tabControl1.activeIndex = index;
      this.$refs.tabControl2.activeIndex = index;
    },

    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 150);
    },

    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = ++this.goods[type].page;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.unshift(...res.data.list);
      });
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
    imgLoad() {
      debounce(this.$refs.scroll.refresh(), 200);
    },
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {},
};
</script>
<style scoped>
.home-nav {
  background-color: black;
  color: #fff;
}
.recommend {
  display: flex;
  align-items: center;
  height: 130px;
  border-bottom: 5px solid rgba(0, 0, 0, 0.1);
}
.recommend > div {
  flex: 1;
  text-align: center;
}
.recommend img {
  width: 90%;
}
.weekend img {
  width: 100%;
}
.home {
  height: 100vh;
  position: relative;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.top-tab-control {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.backtop {
  position: fixed;
  bottom: 50px;
  right: 5px;
}
</style>