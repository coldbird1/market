<!--  -->
<template>
  <div class="tabbar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="tabbar-item-img"></slot></div>
    <div v-else><slot name="tabbar-item-img-active"></slot></div>
    <div :style="activeStyle"><slot name="tabbar-item-text"></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  components: {},
  data() {
    return {};
  },
  computed: {
    isActive() {
      return this.$route.path == this.path;
    },
    activeStyle() {
      return this.isActive == true ? { color: this.activeColor } : {};
    },
  },

  watch: {},
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    },
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
.tabbar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}
.tabbar-item img {
  width: 29px;
  height: 29px;
  padding-top: 1px;
}
</style>