<template>
  <div>
    {{ count }}
    <button @click="increase">increase</button>
    <button @click="decrease">decrease</button>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";
function countInfo() {
  let count = ref(0);
  function increase() {
    count.value++;
  }
  function decrease() {
    count.value--;
  }
  watchEffect(() => {
    console.log(555);
    console.log(count.value);
  });
  return {
    count,
    increase,
    decrease,
  };
}
export default {
  setup() {
    // let count = ref(0);
    // function increase() {
    //   count.value++;
    // }
    // window.count = count
    // function decrease() {
    //   count.value--;
    // }
    // watchEffect(() => {
    //   console.log(555);
    //   console.log(count.value);
    // });
    return {
      ...countInfo()
    };
  },
};
</script>
