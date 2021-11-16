<template>
  <div>
    <CommentContent :list="data" :aside="getAside"  :isloading="false" />
  </div>
</template>

<script>
import CommentContent from "./index.vue";
export default {
  data() {
    return {
      total: 200,
      data: [
        {
          avatar:
            "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg",
          content:
            "中队团行统和今六表办当上却程表必此很。又法从改区育华务通立分各她书效带习重。强器都百织心时热任转包文史。同度走上矿十再阶作住红难。看水性会需保广天家有合证里五价。在常内了感离个天本立列社然教两战。思区济维层标接也个放华特定历。张受看革可支教程年应群单照其向部。算容教十时料信时只速东直如打面记。眼别增力红究物论农为级争工。",
          createDate: 1637028548931,
          id: "f3C6Ae52-e5FA-CDd2-4842-cafCcCeFFCD913",
          nickname: "孟秀兰",
        },
        {
          avatar:
            "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg",
          content:
            "中队团行统和今六表办当上却程表必此很。又法从改区育华务通立分各她书效带习重。强器都百织心时热任转包文史。同度走上矿十再阶作住红难。看水性会需保广天家有合证里五价。在常内了感离个天本立列社然教两战。思区济维层标接也个放华特定历。张受看革可支教程年应群单照其向部。算容教十时料信时只速东直如打面记。眼别增力红究物论农为级争工。",
          createDate: 1637028548931,
          id: "f3C6Ae52-e5FA-CDd2-4842-cafCcCeF415FCD9",
          nickname: "孟秀兰",
        },
        {
          avatar:
            "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg",
          content:
            "中队团行统和今六表办当上却程表必此很。又法从改区育华务通立分各她书效带习重。强器都百织心时热任转包文史。同度走上矿十再阶作住红难。看水性会需保广天家有合证里五价。在常内了感离个天本立列社然教两战。思区济维层标接也个放华特定历。张受看革可支教程年应群单照其向部。算容教十时料信时只速东直如打面记。眼别增力红究物论农为级争工。",
          createDate: 1637028548931,
          id: "f3C6Ae52-e5FA-CDd2-4842-cafCc5CeFFCD9",
          nickname: "孟秀兰",
        },
      ],
    };
  },
  components: {
    CommentContent,
  },
  computed: {
    getAside() {
      return "评论列表 ("+ this.total + "篇)";
    },
  },
};
</script>

<style>
</style>