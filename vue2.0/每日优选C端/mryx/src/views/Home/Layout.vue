 <template>
  <a-layout id="components-layout-demo-top-side-2">
    <HeadBox></HeadBox>
    <a-layout>
      <MenuBox :collapsed="collapsed"></MenuBox>
      <MaiBox :collapsed="collapsed" @changeColl="changeColl"></MaiBox>
    </a-layout>
  </a-layout>
</template>
<script>
import HeadBox from "./Head.vue";
import MenuBox from "./Menu.vue";
import MaiBox from "./Main.vue";
export default {
  data() {
    return {
      collapsed: false,
    };
  },
  components: {
    HeadBox,
    MenuBox,
    MaiBox,
  },
  methods: {
    changeColl(e) {
      this.collapsed = e;
    },
  },
};
</script>
<style>
#components-layout-demo-top-side-2 {
  width: 100%;
  height: 100%;
}
</style>