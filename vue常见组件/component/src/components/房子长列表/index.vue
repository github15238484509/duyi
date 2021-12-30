<template>
  <div class="list-item-lange" @click="lookEvent">
    <div class="one">
      <img class="house" :src="bigImage" alt="" />
      <div class="info">
        <div class="title">
          <img :src="idImage" alt="" />
          {{ id }}
        </div>
        <div class="city">
          {{ city }}
        </div>
      </div>
    </div>
    <div class="tow towthree">
      <div>{{ Profit }}</div>
      <div>{{ Score }}</div>
    </div>
    <div class="three towthree">
      <div :style="{ color: threeColor }">{{ Energy }}</div>
      <template v-if="!isStuff">
        <div>
          Grade : <img :src="xinxin" v-for="item in Grade" :key="item" alt="" />
        </div>
      </template>
      <template v-else>
        <div :style="{ color: threeColor1 }">
          {{ threeDown }}
        </div>
      </template>
    </div>
    <div class="four">
      <div>
        <div class="fourTitle">{{ fourOne }}</div>
        <div class="fourTitle">{{ fourTow }}</div>
        <div class="fourTitle">{{ fourThree }}</div>
      </div>
      <img :src="jiantou" alt="" />
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

    Profit: {},
    Score: {},
    Energy: {},
    Grade: {
      type: Number,
      default: 0,
    },
    isStuff: {
      type: Boolean,
      default: false,
    },
    threeDown: {},
    fourOne: {},
    fourTow: {},
    fourThree: {},
    threeColor: {},
    threeColor1: {},
  },
  data() {
    return {
      xinxin: require("@/assets/grade.png"),
      jiantou: require("@/assets/jiantou.png"),
    };
  },
  methods: {
    lookEvent() {
      this.$emit("lookEvent", this.id, this.isStuff);
    },
  },
};
</script>

<style scoped>
.list-item-lange {
  width: 100%;
  height: 100%;
  background: #282b39;
  border-radius: 4px;
  padding: 17px;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
}
.one {
  display: flex;
  align-items: center;
}
.house {
  max-width: 150px;
  flex: none;
  margin-right: 30px;
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
  margin-top: 10px;
  color: #7a8099;
}

.tow,
.three,
.four {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  font-weight: 600;
}

.towthree div {
  margin-top: 10px;
}
.towthree img {
  display: inline-block;
}

.four {
  flex-direction: initial;
  justify-content: space-between;
  align-items: center;
}
.four img {
  margin-left: 10px;
  transform: rotate(180deg);
}
.fourTitle {
  margin-top: 5px;
}
.fourTitle:nth-child(1) {
  font-size: 1.2rem;
}
.fourTitle:nth-child(2) {
  color: #a3abcc;
}
.fourTitle:nth-child(3) {
  color: #7a8099;
}
</style>