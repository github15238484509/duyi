<template>
  <div class="site-sidebar" v-if="data">
    <div class="avatar">
      <Avatar
        :size="150"
        :url="data.avatar||''"
      />
    </div>
    <h2 class="title">{{data.siteTitle}}</h2>
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
import {mapState} from "vuex"
export default {
  components: {
    Avatar,
    Contact,
    Menu,
  },
 computed:{
   ...mapState("setting",['data'])
 }
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