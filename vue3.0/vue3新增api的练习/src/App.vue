<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" v-if="$route.meta.keepAlive"></component>
    </keep-alive>
    <component :is="Component" v-if="!$route.meta.keepAlive"></component>
  </router-view>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>
