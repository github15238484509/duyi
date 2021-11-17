<template>
  <div>
    关于 {{ $store.state.count }}
    <button @click="increment">++</button>
  </div>
</template>

<script>
export default {
  methods: {
    increment() {
      this.$store.dispatch("increment",465).then((e)=>{
        console.log(e);
        console.log(88588);
      })
    },
  },
};
</script>

<style lang="less" scoped>
</style>
