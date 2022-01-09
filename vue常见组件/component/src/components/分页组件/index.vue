<template>
  <div class="page-container">
    <div>&lt;</div>
    <template v-if="total <= 6">
      <div
        @click="changePage(item)"
        v-for="item in 6"
        :key="item"
        :class="{ active: current == item }"
      >
        {{ item }}
      </div>
    </template>
    <template v-else>
      <template v-if="current <= 4">
        <div
          v-for="item in 5"
          :key="item"
          :class="{ active: current == item }"
          @click="changePage(item)"
        >
          {{ item }}
        </div>
        <div>...</div>
        <div>{{ total }}</div>
      </template>
      <template v-if="current > 4 && current < total - 3">
        <div>1</div>
        <div>...</div>
        <div
          v-for="item in 5"
          :key="item"
          :class="{ active: current == item + current - 3 }"
          @click="changePage(item + current - 3)"
        >
          {{ item + current - 3 }}
        </div>
        <div>...</div>
        <div>{{ total }}</div>
      </template>
      <template v-if="current > 4 && current >= total - 3">
        <div>1</div>
        <div>...</div>
        <div
          v-for="item in 5"
          :key="total - item"
          :class="{ active: current == total + item - 5 }"
          @click="changePage(total + item - 5)"
        >
          {{ total + item - 5 }}
        </div>
      </template>
    </template>
    <div>&gt;</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 1,
      total: 8,
    };
  },
  methods: {
    changePage(e) {
      if (e === this.current) {
        return;
      }
      this.current = e;
      this.$emit("changePage", e);
    },
  },
};
</script>

<style scoped>
.page-container {
  width: 100%;
  display: flex;
}
.page-container > div {
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border: 1px solid red;
  margin: 0 5px;
  cursor: pointer;
  flex: none;
}
.page-container > div:hover {
  color: #abcdef;
}
.page-container > div.active {
  color: #abcdef;
}
</style>