<!--  -->
<template>
  <div class="ListView">
    <div v-for="(item, index) in listData" :key="index" class="list-item">
      <div class="icon">
        <img
          :src="require('../../../assets/img/profile/' + item.image + '.svg')"
          alt=""
        />
      </div>
      <div class="title">{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    listData: {
      type: Array,
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
.ListView {
  border-top: 12px solid #f6f6f6;
}
list-item {
  display: flex;
}
.icon {
  width: 22px;
  height: 22px;
}
img {
  width: 100%;
  margin: 15px;
}
.title {
  border-bottom: 2px solid #f6f6f6;
  padding: 0 0 12px;
  margin-left: 10px;
  margin-top: -10px;
  position: relative;
  top: 4px;
  left: 35px;
}
</style>