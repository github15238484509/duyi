<template>
  <ProductItem
    v-for="(item, i) in productList"
    :key="i"
    v-model:sell="item.sell"
    v-model:name.trim="item.name"
  ></ProductItem>

  <input
    disabled
    :value="item.name"
    v-for="item in renderProduct"
    :key="item.name"
    type="text"
  />
</template>

<script>
import { ref, computed } from "vue";
var products = [
  {
    name: "小米",
    sell: false,
  },
  {
    name: "白米",
    sell: true,
  },
  {
    name: "紫米",
    sell: true,
  },
  {
    name: "红米",
    sell: false,
  },
  {
    name: "小米粥",
    sell: true,
  },
];
import ProductItem from "../components/ProductItem.vue";
export default {
  setup() {
    let productRef = ref(products);
    let renderProductRed = computed(() => {
      return productRef.value.filter((i) => i.sell);
    });
    window.productRef = productRef.value;
    window.renderProduct = renderProductRed.value;
    return {
      productList: productRef,
      renderProduct: renderProductRed,
    };
  },
  components: {
    ProductItem,
  },
};
</script>

<style>
</style>