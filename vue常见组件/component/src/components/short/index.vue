<template>
  <div class="list-item">
    <div class="title">
      <img :src="idImage" alt="" />
      {{ id }}
    </div>
    <div class="city">
      {{ city }}
    </div>
    <div class="level">{{ level }}</div>

    <div class="bigImage">
      <img :src="idImage" alt="" />
    </div>
    <div class="price">
      {{ price }}<small class="priceType">{{ priceType }}</small>
    </div>
    <div class="hidden">
      <template v-if="!isStuff">
        <div class="textbox">
          <div class="hideItem">
            Profit：{{ price }}<small class="priceType">{{ priceType }}</small>
          </div>
          <div class="hideItem">{{ level }}</div>
          <div class="hideItem">Energy：{{ Energy }}</div>
          <div class="hideItem">Day：{{ Day }}</div>
          <div class="hideItem" v-show="Grade">
            <span>Grade：</span>
            <img :src="xinxin" v-for="item in Grade" alt="" :key="item" />
          </div>
        </div>
      </template>
      <template v-else>
        <div class="textbox">
          <div class="hideItem">Unit Price：{{ UnitPrice }}</div>
          <div class="hideItem">Overall price：{{ Overallprice }}</div>
          <div class="hideItem">Quantity：{{ Quantity }}</div>
          <div class="hideItem">Sold：{{ Sold }}</div>
          <div class="hideItem">Surplus：{{ Surplus }}</div>
        </div>
      </template>

      <div class="btn">
        <div v-if="!isMe" @click="saleChange">Withdrawal of sale</div>
        <div @click="lookChange">Go to the market to check</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bigImage: {},
    id: {},
    idImage: {},
    city: {},
    level: {},
    price: {},
    priceType: {},
    isStuff: {
      type: Boolean,
      default: false,
    },
    isMe: {
      type: Boolean,
      default: false,
    },

    Energy: {},
    Day: {},
    Grade: {
      type: Number,
      default: 0,
    },
    UnitPrice: {},
    Overallprice: {},
    Quantity: {},
    Sold: {},
    Surplus: {},
  },
  data() {
    return {
      xinxin: require("@/assets/grade.png"),
    };
  },
  methods: {
    saleChange() {
      this.$emit("saleChange", this.id, this.isStuff);
    },
    lookChange() {
      this.$emit("lookChange", this.id, this.isStuff);
    },
  },
};
</script>

<style scoped>
.list-item {
  width: 100%;
  height: 100%;
  background: #282b39;
  border: 2px solid #34394d;
  border-radius: 4px;
  padding: 17px;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
}
.title {
  width: 124px;
  height: 26px;
  line-height: 26px;
  background: #00b8ce;
  border-radius: 6px;
  display: flex;
  align-items: center;
  color: white;
  padding: 2px 5px;
}
.title img {
  margin-right: 5px;
}
.city {
  color: #7a8099;
  margin: 12px 0;
}
.level {
  color: white;
}
.bigImage {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 50%;
  bottom: 60px;
}
.bigImage img {
  width: 100%;
  display: block;
}
.price {
  color: white;
  font-size: 26px;
  font-weight: 600;
  width: 100%;
  text-align: center;
  position: absolute;
  left: 0;
  bottom: 17px;
}
.list-item:hover .hidden {
  opacity: 1;
}
.hidden {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(17, 19, 27, 0.83);
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  box-sizing: border-box;
  padding: 20px;
  opacity: 0;
  transition: all 0.5s;
}
.hidden .textbox .hideItem {
  line-height: 30px;
}
.hidden .hideItem {
  width: 100%;
  color: white;
  font-weight: 600;
  text-align: left;
  flex: 1;
  overflow: hidden;
}
.btn {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.btn div {
  width: 100%;
  flex: 1;
  padding: 10px 10px;
  box-sizing: border-box;
  margin: 10px 0;
  border-radius: 5px;
  color: white;
  text-align: center;
}
.btn div:nth-child(1) {
  background: #b9bf00;
}
.btn div:nth-child(2) {
  background: #2346ea;
}
</style>