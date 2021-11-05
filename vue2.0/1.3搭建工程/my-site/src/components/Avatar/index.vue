<template>
  <img
  class="avatar-img"
    :src="url"
    :style="{
      width: size + 'px',
      height: size + 'px',
    }"
    alt=""
  />
</template>

<script>
export default {
  props: {
    url: {
      typeof: String,
      require: true,
    },
    size: {
      typeof: Number,
      default: 100,
    },
  },
};
</script>

<style scoped>
.avatar-img{
  border-radius: 50%;
  object-fit: cover;
}
</style>