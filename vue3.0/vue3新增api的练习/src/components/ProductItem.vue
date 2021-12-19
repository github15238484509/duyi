<template>
  <input type="checkbox" :checked="sell" @click="changeCheck" />
  <input type="text" :value="name" @input="changeName" />
 <span> dfs</span>
</template>

<script>
export default {
  props: {
    sell: Boolean,
    name: String,
    nameModifiers:{
      default:()=>{{}}
    }
  },
  setup(props, ctx) {
    console.log(ctx);
    console.log(props);
    function changeName(e) {
        if(props.nameModifiers.trim){
          console.log(656);
        }
      ctx.emit("update:name", e.target.value);
    }
    function changeCheck(e) {
      console.log(e.target.checked);
      ctx.emit("update:sell", !props.sell);
    }
    return {
      changeName,
      changeCheck,
    };
  },
};
</script>

<style scoped>
input[type="text"] {
  width: 50px;
}
</style>