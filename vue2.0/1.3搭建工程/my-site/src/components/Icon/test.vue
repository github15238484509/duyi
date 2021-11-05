<template>
  <div id="app">
    <Icon v-for="item in types" :key="item" :type="item" />
  </div>
</template>
<script>
import Icon, { types } from "@/components/Icon";
export default {
  name: "App",
  data() {
    return {
      types,
    };
  },
  components: {
    Icon,
  },
  methods: {

  },
};
</script>