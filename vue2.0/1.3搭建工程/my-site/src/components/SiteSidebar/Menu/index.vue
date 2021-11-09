<template>
  <div class="menu-container">
    <ul>
      <li v-for="item in lists" :key="item.like">
        <router-link :exact="item.exact" :to="{ name: item.name }">
          <Icon :type="item.icon" /> {{ item.title }}
        </router-link>
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
          name: "Home",
          title: "首页",
          icon: "home",
          exact: true,
        },
        {
          name: "Blog",
          title: "文章",
          icon: "blog",
          exact: false, // 只要当前路径以name开头，当前菜单就是选中的
        },
        {
          name: "About",
          title: "关于我",
          icon: "about",
          exact: true,
        },
        {
          name: "Project",
          title: "项目&效果",
          icon: "code",
          exact: true,
        },
        {
          name: "Message",
          title: "留言板",
          icon: "chat",
          exact: true,
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
      &.router-link-active {
        background: @dark;
        color: white;
      }
    }
  }
}
</style>