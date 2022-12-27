<template>
  <div>
    <div class="shangfang"></div>
    <van-nav-bar left-arrow @click-left="$router.back()">
      <template #title><span class="liebiao">商品列表</span></template>
      <template #right>
        <van-icon name="bars" size="30" class="hanbao" />
      </template>
    </van-nav-bar>
    <div class="daohang">
      <span :class="{ active: active == 1 }" @click="morenFn">
        默认
        <van-icon name="arrow-down" />
      </span>
      <span :class="{ active: active == 2 }" @click="youhuoFn">有货优先</span>
      <span :class="{ active: active == 3 }" @click="zhiyingFn">直营优先</span>
    </div>
    <div class="bb">
      <shoppCom :item="item" v-for="item in goods" :key="item.id"></shoppCom>
    </div>
  </div>
</template>

<script>
  import { goodsApi } from '@/api/home'
  import shoppCom from '@/components/shoppCom.vue'
  export default {
    components: {
      shoppCom
    },
    data() {
      return {
        goods: [],
        goodsYou: [],
        goodsZhi: [],
        active: 1
      }
    },
    async created() {
      let { data: goods } = await goodsApi()
      this.goods = goods.data.list
    },
    methods: {
      youhuoFn() {
        this.active = 2
        this.goods = this.goods.sort(this.compare('isHave'))
      },
      zhiyingFn() {
        this.active = 3
        this.goods = this.goods.sort(this.compare('isDirect'))
      },
      async morenFn() {
        this.active = 1
        let { data: goods } = await goodsApi()
        this.goods = goods.data.list
      },
      compare(property) {
        return function (obj1, obj2) {
          let value1 = obj1[property]
          let value2 = obj2[property]
          return value2 - value1
        }
      }
    }
  }
</script>

<style scoped>
  .shangfang {
    height: 25px;
  }
  .hanbao {
    color: rgb(75, 75, 75);
  }
  .liebiao {
    font-size: 18px;
  }
  .daohang {
    height: 50px;
    line-height: 50px;
    display: flex;
    justify-content: space-evenly;
  }
  .bb {
    display: flex;
    flex-wrap: wrap;
    background-color: #f4f5f6;
  }
  .active {
    color: red;
  }
</style>
