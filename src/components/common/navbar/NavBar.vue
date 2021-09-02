<!--  -->
<template>
  <div class="NavBar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
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
.NavBar {
  height: 44px;
  display: flex;
  text-align: center;
  line-height: 44px;
}
.right,
.left {
  width: 60px;
}
.center {
  flex: 1;
}
</style>