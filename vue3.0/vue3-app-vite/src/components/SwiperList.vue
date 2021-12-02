<template>
  <div class="imgbox">
    <transition name="move" mode="out-in">
      <img :src="imglist[current]" :key="imglist[current]" alt="" />
    </transition>
  </div>

  <button @click="increace">+++</button>
  <button @click="decreace">---</button>
</template>

<script>
const imglist = [
  "https://img2.baidu.com/it/u=622902245,3661794572&fm=26&fmt=auto",
  "https://img2.baidu.com/it/u=3666548066,2508071679&fm=26&fmt=auto",
  "https://img2.baidu.com/it/u=1729250424,3321747351&fm=26&fmt=auto",
  "https://img0.baidu.com/it/u=1051577226,2771334401&fm=26&fmt=auto",
  "https://img1.baidu.com/it/u=2769276717,331481455&fm=26&fmt=auto",
  "https://img0.baidu.com/it/u=154898444,2278214012&fm=26&fmt=auto",
];
import { ref, computed } from "vue";
export default {
  setup() {
    let list = ref(imglist);
    let current = ref(0);
    let length = computed(() => {
      return list.value.length;
    });
    console.log(length);
    function increace() {
      current.value++;
      if (current.value > length.value - 1) {
        current.value = 0;
      }
    }
    function decreace() {
      current.value--;
      if (current.value < 0) {
        current.value = length.value - 1;
      }
    }
    return {
      imglist,
      current,
      increace,
      decreace,
    };
  },
};
</script>

<style scoped>
.imgbox {
  height: 400px;
  position: relative;
}
.imgpostion img {
  position: absolute;
  left: 50%;
  top: 50%;
  height: 100%;
  width: 400px;
  height: 400px;
  margin: -200px 0 0 -200px;
}
/* .move-enter {
  transform: translateX(10px);
  opacity: 0;
} */
/* .move-enter {
  transform: translateX(200px);
  opacity: 0;
} */
.move-enter {
  opacity: 0;
}
.move-enter-to {
  transform: translateX(-50%);
  opacity: 0;
}
.move-enter-active {
  position: absolute;
  transition: all 0.5s;
}
/* .move-leave-to{
    opacity: 0;
    transform: translateX(-200px);
}
.move-leave-active{
    position: absolute;
    transition: all 0.5s;
} */
</style>