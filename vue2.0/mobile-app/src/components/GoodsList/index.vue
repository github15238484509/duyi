<template>
  <div class="goodlist-container">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div class="item" v-for="item in list" :key="item.id">
          <!-- <img :src="item.images[0]" alt="" /> -->
          <div class="desbox">
            <h3 class="overflow">{{ item.title }}</h3>
            <p class="des overflow">{{ item.desc }}</p>
            <div class="tags">
              <div class="tag" v-for="(it, i) in item.tags" :key="i">
                {{ it }}
              </div>
            </div>
            <div class="price">
              <div class="money">￥{{ item.price }}</div>
              <div class="operate">
                <template v-if="$store.getters.getShopNum(item.id)">
                  <div class="decrease" @click="increase(item.id, -1)">
                    <img
                      src="https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/rec.png"
                      alt=""
                    />
                  </div>
                  <div class="num">
                    {{ $store.getters.getShopNum(item.id) }}
                  </div>
                </template>
                <div class="increase" @click="increase(item.id, 1)">
                  <img
                    src="https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/add.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    onRefresh() {
      console.log(5555);
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },
    increase(id, value) {
      this.$emit("increase", {
        id,
        value,
      });
    },
  },
  computed: {},
};
</script>

<style lang="less" scoped>
.goodlist-container {
  height: 100%;
  flex: 1;
  overflow: auto;
  padding-left: 5px;
  box-sizing: border-box;
}
.overflow {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.item {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  overflow: hidden;
  > img {
    width: 80px;
    height: 80px;
    flex: none;
    margin-right: 5px;
  }
  .desbox {
    flex: 1 none none;
    overflow: hidden;
    padding-right: 10px;
    box-sizing: border-box;
    width: 100%;
  }
}
.desbox {
  h3,
  .des {
    line-height: 20px;
    width: 100%;
  }
  .des {
    color: gray;
  }
  .tags {
    display: flex;
    div {
      padding: 3px 4px;
      border: 1px solid gray;
      border-radius: 3px;
      margin-right: 5px;
      color: pink;
    }
  }
  .price {
    display: flex;
    justify-content: space-between;
    padding-right: 20px;
    .money {
      color: plum;
      font-size: 20px;
    }
    .operate {
      display: flex;
      align-items: center;
      * {
        display: inline-block;
        vertical-align: middle;
      }
      .num {
        margin: 0 5px;
      }
    }
  }
}
</style>