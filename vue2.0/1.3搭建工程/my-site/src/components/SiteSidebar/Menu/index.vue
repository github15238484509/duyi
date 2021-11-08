<template>
  <div class="menu-container">
    <ul>
      <li v-for="item in lists" :key="item.like">
        <a :class="{ active: isActive(item) }" :href="item.link">
          <Icon :type="item.icon" /> {{ item.title }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      lists: [
        {
          link: "/",
          title: "首页",
          icon: "home",
        },
        {
          link: "/blog",
          title: "文章",
          icon: "blog",
          startWith: true, // 只要当前路径以link开头，当前菜单就是选中的
        },
        {
          link: "/about",
          title: "关于我",
          icon: "about",
        },
        {
          link: "/project",
          title: "项目&效果",
          icon: "code",
        },
        {
          link: "/message",
          title: "留言板",
          icon: "chat",
        },
      ],
    };
  },
  methods: {
    isActive(item) {
      var current = location.pathname;
      var itemLInk = item.link;
      if (item.startWith) {
        return current.startsWith(itemLInk);
      } else {
        return current === itemLInk;
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/reset.less";
.menu-container {
  li {
    height: 35px;
    line-height: 35px;
    color: @gray;
    a {
      display: block;
      transition: all 0.3s;
      padding: 0 20px;
      box-sizing: border-box;
      &:hover {
        background: @dark;
        color: white;
      }
      &.active {
        background: @dark;
        color: white;
      }
    }
  }
}
</style>