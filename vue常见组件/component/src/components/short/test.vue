<template>
  <div class="test">
    <ListItem
      id="#1995365563"
      :idImage="idImage"
      city="New York A1-1"
      level="Score：4.3%"
      price="100021"
      priceType="Fuc"
      :bigImage="bigImage"
      :Energy="100"
      :Day="5000"
      :Grade="5"
      @saleChange="saleChange"
      @lookChange="lookChange"
      :UnitPrice="998800"
      :Overallprice="998800"
      :Quantity="998800"
      :Sold="200"
      :Surplus="911"
    ></ListItem>
  </div>
</template>

<script>
import ListItem from "./index.vue";
export default {
  data() {
    return {
      idImage: require("@/assets/1.png"),
      bigImage: require("@/assets/bigImage.png"),
    };
  },
  components: {
    ListItem,
  },
  methods: {
    saleChange(id, type) {
      console.log(id, type);
    },
    lookChange(id, type) {
      console.log(id, type);
    },
  },
};
</script>

<style scoped>
.test {
  width: 274px;
  height: 334px;
  margin: 50px auto;
}
</style>