<!--  -->
<template>
  <div class="account">
    <div class="balance">
      <div>
        <span>{{ this.balance }}</span
        >元
      </div>
      <div>我的余额</div>
    </div>
    <div class="preferential">
      <div>
        <span>{{ this.preferential }}</span
        >个
      </div>
      <div>我的优惠</div>
    </div>
    <div class="points">
      <div>
        <span>{{ this.points }}</span
        >分
      </div>
      <div>我的积分</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    balance: {
      type: Number,
      default: 0,
    },
    preferential: {
      type: Number,
      default: 0,
    },
    points: {
      type: Number,
      default: 0,
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
.account {
  display: flex;

  text-align: center;
}
.balance,
.preferential,
.points {
  flex: 1;
  color: #666;
  font-size: 13px;
  padding: 18px;
}
.preferential {
  border-right: 2px solid rgb(242, 242, 242);
  border-left: 2px solid rgb(242, 242, 242);
}
span {
  color: red;
  font-size: 24px;
  font-weight: 400;
}
</style>