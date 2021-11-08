<template>
  <div class="site-sidebar">
    <div class="avatar">
      <Avatar
        :size="150"
        url="https://img0.baidu.com/it/u=3767582544,843171437&fm=26&fmt=auto"
      />
    </div>
    <h2 class="title">我是大帅哥</h2>
    <div class="menu">
      <Menu />
    </div>
    <div class="contact">
      <Contact />
    </div>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Contact from "./Contact";
import Menu from "./Menu";
export default {
  components: {
    Avatar,
    Contact,
    Menu,
  },
};
</script>

<style lang="less" scoped>
.site-sidebar {
  padding: 10px 0;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
.avatar {
  text-align: center;
}
.title {
  margin: 0;
  color: white;
  text-align: center;
  margin: 10px 0;
  font-size: 25px;
}
.menu,
.contact {
  margin-top: 10px;
}
</style>