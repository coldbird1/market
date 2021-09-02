<!--  -->
<template>
  <div class="">
    <NavBar class="nav-bar">
      <div slot="left" @click="backClick">
        <img src="~assets/img/common/back.svg" />
      </div>
      <div slot="center" class="nav">
        <div
          v-for="(item, index) in titles"
          :key="index"
          :class="{ active: index == currentIndex }"
          @click="itemClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  props: {
    titles: Array,
  },
  components: { NavBar },
  data() {
    return {
      currentIndex: 0,
    };
  },
  computed: {},
  watch: {},
  methods: {
    backClick() {
      this.$router.back();
    },
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("themeClick", index);
    },
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
.nav-bar {
  background-color: black;
  color: #fff;
}
.nav {
  display: flex;
  text-align: center;
  justify-content: space-around;
}
img {
  position: relative;
  top: 5px;
}
.active {
  color: red;
}
</style>