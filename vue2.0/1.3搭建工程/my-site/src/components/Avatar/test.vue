<template>
  <div id="app">
    <Avatar :src="src" :size="size" />
  </div>
</template>
<script>
import  Avatar from "@/components/Avatar";
export default {
  name: "App",
  data() {
    return {
        src:"https://img0.baidu.com/it/u=3767582544,843171437&fm=26&fmt=auto",
        size:400
    };
  },
  components: {
     Avatar,
  },
  methods: {
    ChangePage(e) {
      this.current = e;
    },
  },
};
</script>