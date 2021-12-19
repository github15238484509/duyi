<template>
  <div class="gdp">
    <div>
      <Gap1 :lists="lists" />
    </div>
    <div>
      <Gap2  :lists="lists"/>
    </div>
  </div>
  <div class="ssss">
    <div v-for="item in lists" :key="item.country" class="">
      {{ item.country }} <input type="number" v-model="item.value" />
    </div>
  </div>
</template>

<script>
import Gap1 from "../components/gdp/Gap1.vue";
import Gap2 from "../components/gdp/Gap2.vue";
import { ref } from "vue";
export default {
  setup() {
    let listsRef = ref([]);
    async function getFetch() {
      const result = await fetch("http://192.168.2.134:5500/gdp.json").then(
        (e) => e.json()
      );
      listsRef.value = result;
      return result;
    }
    getFetch();
    return {
      lists: listsRef,
    };
  },
  components: {
    Gap1,
    Gap2,
  },
};
</script>

<style scoped >
.gdp {
  display: flex;
  width: 1200px;
  justify-content: space-between;
  margin: 50px auto;
}
.gdp > div {
  width: 50%;
  height: 100%;
  text-align: left;
}
.ssss{
  display: flex;
}
</style>