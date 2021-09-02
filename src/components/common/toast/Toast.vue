<!--  -->
<template>
  <div class="toast" v-show="isShow">
    {{ message }}
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      isShow: false,
      message: null,
    };
  },
  computed: {},
  watch: {},
  methods: {
    show(message = "默认文本", time = 2000) {
      (this.isShow = true),
        (this.message = message),
        setTimeout(() => {
          this.isShow = false;
        }, time);
    },
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
.toast {
  color: #fff;
  background-color: rgba(0, 0, 0, 0.75);
  text-align: center;
  z-index: 999;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 5px;
}
</style>