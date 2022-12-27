<template>
  <div>
    <div class="dingbu">
      <div></div>
      <van-nav-bar left-arrow @click-left="$router.back()" class="daohang">
        <template #title><span class="shangpinwz">商品详情</span></template>
      </van-nav-bar>
    </div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" @change="onChange">
      <van-swipe-item v-for="(item, index) in swiperImgs" :key="index">
        <img :src="item" width="100%" />
      </van-swipe-item>
      <template #indicator>
        <div class="custom-indicator">{{ current + 1 }}/{{ swiperImgs.length }}</div>
      </template>
    </van-swipe>
    <div class="itemhx">
      <span style="color: red" class="itemys">￥{{ itemData.price }}</span>
      <span>{{ itemData.name }}</span>
    </div>
    <div class="huitiao"></div>
    <div>
      <div class="xuangou">
        <span>已选</span>
        <span>{{ itemData.name }}</span>
      </div>
      <div class="songhuo">✔可配送海外 ✔京东发货&售后 ✔京准达 ✔211限时达 ✔可自提 ✔不可使用优惠券</div>
      <div v-for="(item, index) in detailImgs" :key="index">
        <img width="100%" :src="item" alt="" class="tupian" />
      </div>
    </div>
    <div style="height: 60px"></div>
    <div class="dibu">
      <van-button type="warning" class="jiarugouwuche" @click="addFn">加入购物车</van-button>
      <van-button type="danger" class="lijigoumai">立即购买</van-button>
    </div>
  </div>
</template>

<script>
  import { goodsDetailApi } from '@/api/home'
  export default {
    props: {
      itemId: [Number, String]
    },
    data() {
      return {
        detailImgs: [],
        swiperImgs: [],
        itemData: [],
        current: 0
      }
    },
    async created() {
      try {
        let { data } = await goodsDetailApi(this.itemId)
        this.detailImgs = data.data.goodsData.detailImgs
        this.swiperImgs = data.data.goodsData.swiperImgs
        this.itemData = data.data.goodsData
        // console.log(this.itemData)
      } catch (error) {}
    },
    methods: {
      onChange(index) {
        this.current = index
      },
      addFn() {
        alert('添加成功')
        // this.$store.getters.cartList(this.itemData)
        this.$store.commit('cart/updateGoodsCart', this.itemData)
        this.$router.push('/cart')

        // this.$router.push({
        //   name: 'cart',
        //   params: this.itemData
        // })
      }
    }
  }
</script>

<style scoped>
  .itemhx {
    padding: 10px;
    display: flex;
    flex-direction: column;
  }
  .itemys {
    font-weight: 700;
  }
  .huitiao {
    height: 10px;
    background-color: #ccc;
  }
  .xuangou {
    padding: 10px;
    display: flex;
  }
  .xuangou span:nth-child(1) {
    width: 40px;
    color: #ccc;
    font-weight: 700;
  }
  .xuangou span:nth-child(2) {
    font-weight: 700;
    width: 300px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .songhuo {
    color: rgb(138, 136, 136);
    padding: 10px;
    font-size: 14px;
    line-height: 30px;
  }
  .custom-indicator {
    position: absolute;
    color: rgb(255, 255, 255);
    margin-bottom: 50px;
    width: 50px;
    text-align: center;
    height: 20px;
    border-radius: 20px;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 18px;
    background: rgba(0, 0, 0, 0.3);
  }
  .dingbu {
    position: fixed;
    top: 0;
    z-index: 1;
  }
  .dingbu div:nth-child(1) {
    width: 390px;
    height: 20px;
    background-color: red;
  }
  .daohang {
    background-color: red;
    transform: translateY(-3px);
  }
  .shangpinwz {
    color: #fff;
    font-weight: 700;
  }
  .dibu {
    position: fixed;
    bottom: 0;
    height: 40px;
    width: 390px;
    background-color: #fff;
    display: flex;
    justify-content: end;
  }
  .jiarugouwuche {
    background-color: red;
    border: 1px solid #fff;
  }

  .lijigoumai {
    background-color: rgb(238, 165, 38);
    border: 1px solid #fff;
  }
  .tupian {
    display: block;
  }
</style>
