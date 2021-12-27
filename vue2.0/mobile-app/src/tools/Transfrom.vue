<template>
  <div
    class="transfrom"
    :style="{
      width: width + 'px',
      height: height + 'px',
      transform: `translate(${left}px, ${top}px) scale(${scale})`,
      opacity:opacity
    }"
  >
    <img :src="src" alt="" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.transfrom {
  position: fixed;
  transition: all 0.7s;
  left: 0;
  top: 0;
  transform-origin: 0 0;
  z-index: 100;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>