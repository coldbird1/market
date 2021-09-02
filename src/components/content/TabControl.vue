<!--  -->
<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      :key="index"
      :class="{ active: index == activeIndex }"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {},
  data() {
    return {
      activeIndex: 0,
    };
  },
  computed: {},
  watch: {},
  methods: {
    itemClick(index) {
      this.activeIndex = index;
      this.$emit("itemClick", index);
    },
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
.active span {
  border-bottom: 2px solid red;
  color: red;
}
.tab-control {
  display: flex;
  text-align: center;
  height: 35px;
  line-height: 35px;
}
.tab-control > div {
  flex: 1;
}
</style>