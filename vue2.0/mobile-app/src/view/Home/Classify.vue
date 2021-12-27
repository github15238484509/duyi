<template>
  <div class="classify-container">
    <!-- <div class="search-btn">我是大帅哥</div> -->
    <!-- <OneTabbar :list="menuList" @onechange="onechange"></OneTabbar> -->
    <div class="goodsinfo">
      <!-- <TowTabbar :list="towList" @Towchange="Towchange"></TowTabbar> -->
      <GoodsList :list="goodSidelist" @increase="increase"></GoodsList>
    </div>
    <div class="loading" v-if="loading">
      <van-loading size="24px" vertical>加载中...</van-loading>
    </div>
  </div>
</template>

<script>
import OneTabbar from "@/components/OneTabbar";
import TowTabbar from "@/components/TowTabbar/index.vue";
import GoodsList from "@/components/GoodsList";

import tool from "@/api/index.js";
import Moverinfo from "@/tools/index.js";
export default {
  data() {
    return {
      menuList: [
        {
          title: "时令水果",
          imgURL:
            "https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/时令水果.jpg",
        },
        {
          title: "酒水冲调",
          imgURL:
            "https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/酒水冲调.jpg",
        },
        {
          title: "安心乳品",
          imgURL:
            "https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/安心乳品.jpg",
        },
        {
          title: "休闲零食",
          imgURL:
            "https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/休闲零食.jpg",
        },
        {
          title: "肉蛋食材",
          imgURL:
            "https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/肉蛋食材.jpg",
        },
        {
          title: "新鲜蔬菜",
          imgURL:
            "https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/新鲜食材.jpg",
        },
        {
          title: "熟食餐饮",
          imgURL:
            "https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/熟食餐饮.jpg",
        },
        {
          title: "海鲜水产",
          imgURL:
            "https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/海鲜水产.jpg",
        },
        {
          title: "粮油调味",
          imgURL:
            "https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/粮油调味.jpg",
        },
        {
          title: "某手美食",
          imgURL:
            "https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/某手美食.jpg",
        },
        {
          title: "纸杯清洁",
          imgURL:
            "https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/纸品清洁.jpg",
        },
        {
          title: "个人护理",
          imgURL:
            "https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/个人护理.jpg",
        },
        {
          title: "美妆护肤",
          imgURL:
            "https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/美妆护肤.jpg",
        },
        {
          title: "家居收纳",
          imgURL:
            "https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/家居收纳.jpg",
        },
        {
          title: "家用电器",
          imgURL:
            "https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/家用电器.jpg",
        },
        {
          title: "3C数码",
          imgURL:
            "https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/3C数码.jpg",
        },
        {
          title: "母婴用品",
          imgURL:
            "https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/母婴用品.jpg",
        },
        {
          title: "鲜花绿植",
          imgURL:
            "https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/鲜花绿植.jpg",
        },
        {
          title: "宠物用品",
          imgURL:
            "https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/宠物用品.jpg",
        },
        {
          title: "图书玩具",
          imgURL:
            "https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/图书文具.jpg",
        },
        {
          title: "手表配饰",
          imgURL:
            "https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/手表配饰.jpg",
        },
      ],
      towList: [],
      goodSidelist: [],
      loading: false,
    };
  },
  methods: {
    onechange(item) {
      this.getMeSideList(item);
    },
    async getMeSideList(id = this.menuList[0].title) {
      this.loading = true;
      this.towList = await tool.getSideList(id);
      this.towchange();
      this.loading = false;
    },
    async towchange(type = this.towList[0], page = 1, size = 10) {
      var result = await tool.getGoodsList(type, page, size);
      this.goodSidelist = result.list;
      this.total = result.total;
    },
    Towchange(e) {
      this.loading = true;
      this.towchange(e);
      this.loading = false;
    },

    increase(item) {
      var goods = localStorage.getItem("goods") || "{}";
      // console.log(goods);
      goods = JSON.parse(goods);
      // console.log(goods[item.id]);
      if (goods[item.id]) {
        if (goods[item.id] >= 0) {
          goods[item.id] += item.value;
        } else {
          return;
        }
      } else {
        if (item.value === -1) {
          return;
        }
        goods[item.id] = item.value;
      }
      localStorage.setItem("goods", JSON.stringify(goods));
      this.$store.commit("formatShop");

      if (item.value === -1) {
        return;
      }

      var el = item.el[0];
      var imgWidth = el.offsetWidth;
      var imgHeight = el.offsetHeight;
      var { left, top } = el.getBoundingClientRect();
      var target = document.querySelector("#target");
      var targetWidth = target.offsetWidth;
      var targetHeight = target.offsetHeight;
      var { left: targetleft, top: targettop } = target.getBoundingClientRect();
      var targetmovex = targetWidth / 2 + targetleft;
      var targetmovey = targetHeight / 2 + targettop;
      /**
       *
       * @param {*} width 宽度
       * @param {*} height 高度
       * @param {*} left left
       * @param {*} top top
       * @param {*} moveX 移动到的位置的left
       * @param {*} moveY 移动到的位置top
       */
      Moverinfo(
        imgWidth,
        imgHeight,
        left,
        top,
        targetmovex,
        targetmovey,
        el.src
      );
    },
  },

  components: {
    OneTabbar,
    GoodsList,
    TowTabbar,
  },
  mounted() {
    this.getMeSideList();
  },
};
</script>

<style lang="less" scoped>
.classify-container {
  width: 100%;
  position: relative;
  .search-btn {
    width: 90%;
    height: 30px;
    line-height: 30px;
    background: rebeccapurple;
    margin: 5px auto 5px;
    border-radius: 5px;
    text-align: center;
    color: white;
    font-size: 16px;
  }
}
.loading {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.goodsinfo {
  display: flex;
  justify-content: space-between;
  height: calc(100vh - 104px);
  overflow: hidden;
}
</style>