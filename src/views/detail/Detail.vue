<!--  -->
<template>
  <div class="detail">
    <DetailNav :titles="titles" ref="nav" @themeClick="themeClick" />
    <Scroll
      class="scrollContent"
      :listen-scroll="true"
      @scroll="detailScroll"
      :probe-type="3"
      ref="scroll"
    >
      <DetailSwiper :top-images="topImages" class="swiperContent" ref="base" />
      <DetailBaseInfo :goods="Goods" />
      <DetailShopInfo :shop="shop" />
      <DetailGoodsInfo :detail-info="detailInfo" @imageLoad="imageLoad" />
      <DetailParamInfo :param-info="paramInfo" ref="param" />
      <DetailCommentInfo :comment-info="commentInfo" ref="comment" />
      <DetailRecommendInfo :recommend-list="recommendList" ref="recommend" />
    </Scroll>
    <DetailBottomBar @cartClick="cartClick" />
  </div>
</template>

<script>
import DetailNav from "./childComps/DetailNav.vue";
import Scroll from "components/common/scroll/Scroll";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailRecommendInfo from "./childComps/DetailRecommendInfo";
import DetailBottomBar from "./childComps/DetailBottomBar";
import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "network/detail";

export default {
  components: {
    DetailNav,
    Scroll,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailRecommendInfo,
    DetailBottomBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      topImages: [],
      Goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommendList: [],
      itemImgListener: null,
      themeTopYs: [],
      contentY: null,
    };
  },
  computed: {},
  watch: {},
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh();
      this.themeTopYs = [];
      this.themeTopYs.push(this.$refs.base.$el.offsetTop);
      this.themeTopYs.push(this.$refs.param.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop * 10);
    },

    detailScroll(position) {
      let positionY = -position.y;
      for (let i = 0; i < this.themeTopYs.length - 1; i++) {
        if (
          positionY >= this.themeTopYs[i] - 30 &&
          positionY < this.themeTopYs[i + 1] - 30
        ) {
          this.$refs.nav.currentIndex = i;
        }
      }
    },

    themeClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 150);
    },

    cartClick() {
      const obj = {};
      obj.image = this.topImages[0];
      obj.iid = this.$route.params.iid;
      obj.title = this.Goods.title;
      obj.desc = this.Goods.desc;
      obj.newPrice = this.Goods.newPrice;
      this.$store.dispatch("addCart", obj).then((res) => {
        this.$toast.show(res, 300);
      });
    },
  },
  created() {
    getDetail(this.$route.params.iid).then((res) => {
      this.topImages = res.result.itemInfo.topImages;
      const data = res.result;
      this.Goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      this.shop = new Shop(data.shopInfo);
      this.detailInfo = data.detailInfo;
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      if (data.rate.list) {
        this.commentInfo = data.rate.list[0];
      }
      getRecommend().then((res) => {
        this.recommendList = res.data.list;
      });
    });
  },
  mounted() {},
};
</script>
<style scoped>
.detail {
  position: relative;
  height: 100vh;
}
.scrollContent {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.swiperContent {
  height: 200px;
  overflow: hidden;
}
</style>