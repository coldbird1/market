<!--  -->
<template>
  <div>
    <div v-if="Object.keys(commentInfo).length !== 0" class="comment-info">
      <div class="info-header">
        <div class="header-title">用户评价</div>
        <div class="header-more">
          更多
          <i class="arrow-right"></i>
        </div>
      </div>
      <div class="info-user">
        <img :src="commentInfo.user.avatar" alt="" />
        <span>{{ commentInfo.user.uname }}</span>
      </div>
      <div class="info-detail">
        <p>{{ commentInfo.content }}</p>
        <div class="info-other">
          <span class="date">{{ commentInfo.created | showDate }}</span>
          <span>{{ commentInfo.style }}</span>
        </div>
        <div class="info-imgs">
          <img
            :src="item"
            v-for="(item, index) in commentInfo.images"
            :key="index"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "../../../common/utils";
export default {
  filters: {
    showDate(value) {
      let date = new Date(value * 1000);
      return formatDate(date, "yyyy-mm-dd");
    },
  },
  props: {
    commentInfo: Object,
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
.comment-info {
  padding: 10px 5px;
}
.info-header {
  display: flex;
  justify-content: space-between;
}
.info-user {
  margin: 10px 0;
}
.info-user img {
  width: 30px;
  height: 30px;
}
.info-user span {
  position: relative;
  bottom: 8px;
  left: 8px;
}
.info-detail {
  font-size: 14px;
}
.info-other {
  margin: 10px 0;
}
.info-other span {
  margin-right: 10px;
}
.info-imgs img {
  width: 100%;
}
</style>