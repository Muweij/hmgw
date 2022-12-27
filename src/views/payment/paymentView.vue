<template>
  <div class="dabeijing">
    <div class="kong"></div>
    <van-nav-bar title="立即购买" left-arrow @click-left="$router.back()" class="guding" />
    <div class="chenggao"></div>
    <div v-for="item in cartList" :key="item.id" class="hongpai">
      <img
        :src="item.img"
        height="130px
      "
      />
      <span>
        <span class="name">{{ item.name }}</span>
        <span>￥{{ item.price }}</span>
      </span>
    </div>
    <van-cell-group class="zhifu">
      <van-cell title="支付宝支付" label="数亿用户都在使用，安全可托付">
        <template #default>
          <img
            src="http://imooc.hybrid.lgdsunday.club/img/check.e50f3f2b.svg"
            v-if="zhigou"
            @click="tozhigou"
            height="20px
          "
          />
          <img
            src="http://imooc.hybrid.lgdsunday.club/img/no-check.59675650.svg"
            v-else
            @click="tozhigou"
            height="20px
          "
          />
        </template>
      </van-cell>
      <van-cell title="微信支付" label="亿万用户选择，更快更安全">
        <template #default>
          <img
            src="http://imooc.hybrid.lgdsunday.club/img/check.e50f3f2b.svg"
            v-if="weigou"
            @click="toweigou"
            height="20px
          "
          />
          <img
            src="http://imooc.hybrid.lgdsunday.club/img/no-check.59675650.svg"
            v-else
            @click="toweigou"
            height="20px
          "
          />
        </template>
      </van-cell>
    </van-cell-group>
    <van-button round type="info" class="zhifuanniu">立即购买</van-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        cartList: [],
        weigou: false,
        zhigou: false
      }
    },
    created() {
      this.cartList = this.$store.getters.cartList
      // this.cartList = this.cartList.map(item => {
      //   if (item.isDirect == true) {
      //     return item
      //   }
      // })
      console.log(this.cartList)
    },
    methods: {
      tozhigou() {
        this.zhigou = !this.zhigou
      },
      toweigou() {
        this.weigou = !this.weigou
      }
    }
  }
</script>

<style scoped>
  .hongpai {
    margin-top: 10px;
    display: flex;
    padding: 10px;
    background-color: #fff;
  }
  .name {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    -webkit-box-orient: vertical;
    padding-top: 5px;
  }
  .kong {
    width: 100%;
    position: fixed;
    top: 0px;
    height: 30px;
    background-color: #fff;
  }
  .dabeijing {
    height: 900px;
    background-color: rgb(238, 235, 235);
  }
  .guding {
    width: 100%;
    position: fixed;
    top: 20px;
  }
  .chenggao {
    height: 70px;
    background-color: #fff;
  }
  .zhifu {
    margin-top: 10px;
  }
  .zhifuanniu {
    margin-left: 20px;
    width: 90%;
    position: fixed;
    bottom: 50px;
    background-color: red;
    border: 1px solid red;
  }
</style>
