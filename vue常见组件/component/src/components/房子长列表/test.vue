<template>
  <div class="test">
    <ListItem
      id="#1995365563"
      :bigImage="bigImage"
      :idImage="idImage"
      city="New York A1-1"
      Profit="Profit：13000F"
      Score="Score：4.3%"
      Energy="Energy：10"
      :Grade="5"
      threeDown="Crazy dinerbiu"
      @lookEvent="lookEvent"
      fourOne="0.200"
      fourTow="130000 Fuc"
      fourThree="1 day ago"
      threeColor="red"
      threeColor1="red"
      :isStuff="true"
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
    lookEvent(id, type) {
      console.log(id, type);
    },
  },
};
</script>

<style scoped>
.test {
  width: 1000px;
  height: 208px;
  border: 1px solid red;
  margin: 50px auto;
}
</style>