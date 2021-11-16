<template>
  <div class="comment-content-container">
    <h2>{{ aside }}</h2>
    <ul>
      <li v-for="item in list" :key="item.id">
        <Avatar :url="item.avatar" :size="40" />
        <div class="item">
          <div class="title">
            <div class="name">
              {{ item.nickname }}
            </div>
            <div class="time">
              <!-- {{ item.createDate | dateFormat(true) }} -->
              {{ item.createDate }}
            </div>
          </div>
          <div class="content">
            {{ item.content }}
          </div>
        </div>
      </li>
    </ul>
    <div v-show="loading" class="loading">加载中...</div>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
export default {
  data() {
    return {
    };
  },
  props: {
    list: {
      type: Array,
      required: true,
      default: () => [],
    },
    aside: {
      type: String,
    },
    loading:{
      type: Boolean,
    }
  },
  components: {
    Avatar,
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/color.less";
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  display: flex;
  border-bottom: 1px dotted rgba(0, 0, 0, 0.5);
  padding: 10px;
  .item {
    margin-left: 10px;
    flex: 1;
    color: @words;
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .time {
        color: @lightWords;
      }
    }
    .content {
      text-indent: 2rem;
    }
  }
}
.loading {
  text-align: center;
  margin: 20px 0;
  color: rgba(0, 0, 0, 0.5);
}
</style>


