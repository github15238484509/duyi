<template>
  <a-layout style="padding: 0 24px 24px">
    <div class="head">
      <a-icon
        @click="changeColl"
        class="trigger"
        :type="collapsed ? 'menu-unfold' : 'menu-fold'"
      />
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <a-layout-content
      :style="{
        background: '#fff',
        padding: '24px',
        margin: 0,
        minHeight: '280px',
      }"
    >
      <router-view></router-view>
    </a-layout-content>
  </a-layout>
</template>

<script>
export default {
  props: {
    collapsed: {
      type: Boolean,
    },
  },
  methods: {
    changeColl() {
      this.$emit("changeColl", !this.collapsed);
    },
  },
};
</script>

<style lang="less" scoped>
.trigger:hover {
  color: #1890ff;
  cursor: pointer;
}
.head {
  display: flex;
  align-items: center;
  .trigger {
    margin-right: 10px;
  }
}
</style>