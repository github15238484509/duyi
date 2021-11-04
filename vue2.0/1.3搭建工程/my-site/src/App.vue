<template>
  <div id="app">
    <Pager :total="total" :current="current" @ChangePage="ChangePage" :limit="8" />
  </div>
</template>
<script>
import Pager from "@/components/Pager";
export default {
  name: "App",
  data() {
    return {
      total: 202,
      current: 1,
    };
  },
  components: {
    Pager,
  },
  methods: {
    ChangePage(e) {
      this.current = e;
    },
  },
};
</script>