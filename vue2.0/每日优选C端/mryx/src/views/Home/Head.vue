<template>
  <a-layout-header class="header">
    <a-dropdown>
      <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
        Hover me, Click menu item <a-icon type="down" />
      </a>
      <a-menu slot="overlay" @click="onClick">
        <a-menu-item key="1"> 1st menu item </a-menu-item>
        <a-menu-item key="2"> 2nd menu item </a-menu-item>
        <a-menu-item key="3"> 3rd menu item </a-menu-item>
      </a-menu>
    </a-dropdown>
  </a-layout-header>
</template>

<script>
export default {
  methods: {
    onClick({ key }) {
      console.log(`Click on item ${key}`);
    },
  },
};
</script>

<style lang="less" scoped>
.ant-layout-header {
  background: white;
}
.header {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>