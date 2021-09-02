<!--  -->
<template>
  <div class="">
    <div class="recommend">精品推荐</div>
    <GoodsList :goods="recommendList" />
  </div>
</template>

<script>
import GoodsList from "components/content/GoodsList";
export default {
  props: {
    recommendList: Array,
  },
  components: {
    GoodsList,
  },
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
.recommend {
  text-align: center;
  margin: 10px 0;
}
</style>