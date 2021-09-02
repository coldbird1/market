<!--  -->
<template>
  <div class="UserInfo">
    <div class="photo">
      <img src="~assets/img/profile/user.png" alt="" />
    </div>
    <div class="info">
      <div class="register">登录/注册</div>
      <div class="phone">
        <span><img src="~assets/img/profile/sj.png" alt="" /></span>
        <span class="sj">暂无绑定手机号</span>
      </div>
    </div>
    <div class="arrow">
      <img src="~assets/img/profile/arrow.png" alt="" />
    </div>
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
.UserInfo {
  display: flex;
  background-color: rgb(255, 129, 152);
  color: #fff;
  padding: 15px;
}
.info {
  color: #fff;
  margin: 20px 20px 0;
}
.phone {
  font-size: 14px;
}
.sj {
  position: relative;
  top: -7px;
}
.arrow {
  position: absolute;
  right: 12px;
  top: 92px;
}
</style>