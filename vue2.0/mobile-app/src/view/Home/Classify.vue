<template>
  <div class="classify-container">
    <div class="search-btn">我是大帅哥</div>
    <div class="one-tabbar" ref="oneTabbar">
      <div
        class="tabbar-item"
        v-for="(item, i) in menuList"
        :key="i"
        @click="changeCurrent(i, $event)"
      >
        <div class="img" :class="{ active: current === i }">
          <img :src="item.imgURL" alt="" />
        </div>
        <div :class="{ active: current === i }">
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
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
    };
  },
  methods: {
    changeCurrent(i, e) {
      this.current = i;
      var { oneTabbar } = this.$refs;
      var parentWidth = oneTabbar.offsetWidth;
      var selfWidth = e.target.offsetWidth;
      var selfleft = e.target.getBoundingClientRect().left;
      this.speed(
        oneTabbar.scrollLeft,
        selfleft + selfWidth / 2 - parentWidth / 2
      );
    },
    speed(start, end) {
      var speed = 100;
      var dis = 0;
      if (end < 0) {
        speed *= -1;
      }
      clearInterval(timer);
      var timer = setInterval(() => {
        dis += speed;
        this.$refs.oneTabbar.scrollLeft = start + dis;
        if (Math.abs(dis) >= Math.abs(end)) {
          this.$refs.oneTabbar.scrollLeft = start + end;
          clearInterval(timer);
        }
      }, 60);
    },
  },
};
</script>

<style lang="less" scoped>
.classify-container {
  width: 100%;
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
  .one-tabbar {
    height: 70px;
    display: flex;
    align-items: center;
    width: 100%;
    overflow: auto;
    .tabbar-item {
      flex: none;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      width: 60px;
      height: 70px;
      box-sizing: border-box;

      .img {
        border: 1px solid transparent;
        border-radius: 50%;
        width: 45px;
        height: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        &.active {
          border: 1px solid red;
          color: pink;
        }
        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: block;
        }
      }
    }
  }
}
</style>