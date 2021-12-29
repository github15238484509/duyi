# 滚动条

**注意事项**

> 一定要使用 "作用域插槽" 不然无法监听盒子的高度

```vue
<template>
  <div class="test">
    <ScrollBox :list="num" v-slot="{ list }">
      <div v-for="item in list" :key="item" class="itme">
        {{ item }}
      </div>
    </ScrollBox>
    <button @click="num = 100">222</button>
  </div>
</template>

<script>
    import ScrollBox from "./index.vue";
    export default {
        data() {
            return {
            num: 20,
            };
        },
        components: {
            ScrollBox,
        },
    };
</script>
```

#### 参数

| 参数 | 默认值 | 说明 |
|  --- | --- | ---|
|  list | [ ] |  作用域差错传进去的列表  |
|  color | olivedrab | 滚动条的颜色    |

#### 实例

![adf](./1.png)
