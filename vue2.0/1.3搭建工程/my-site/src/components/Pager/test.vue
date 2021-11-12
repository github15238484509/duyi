<template>
  <div id="app">
    <Pager :total="total" :current="current" @ChangePage="ChangePage" :limit="10" />
  </div>
</template>
<script>
import Pager from "./index.vue";
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