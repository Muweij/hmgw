<template>
  <div>
    <div class="zhuti">
      <cartCom v-for="item in $store.getters.cartList" :key="item.id" :item="item"></cartCom>
    </div>
    <div class="cart">
      <span>
        <img
          src="http://imooc.hybrid.lgdsunday.club/img/check.e50f3f2b.svg"
          v-if="imggou"
          @click="appFn"
          height="20px
        "
        />
        <img
          src="http://imooc.hybrid.lgdsunday.club/img/no-check.59675650.svg"
          v-else
          @click="appFn"
          height="20px
        "
        />
        <span>全选</span>
      </span>
      <span>
        <p>合计:￥{{ priceSum() }}</p>
        <p>总额:￥{{ priceSum() }} 立减￥00.00</p>
      </span>
      <span>
        <van-button type="danger" @click="$router.push('/payment')">去结算({{ numSun() }})</van-button>
      </span>
    </div>
  </div>
</template>

<script>
  import cartCom from '@/components/cartCom.vue'
  export default {
    components: {
      cartCom
    },
    data() {
      return {
        cartData: [],
        num: 0
      }
    },
    computed: {
      imggou: {
        get() {
          if (this.cartData.length == 0) {
            return false
          }
          return this.cartData.every(ele => ele.isDirect)
        },
        set(val) {
          this.cartData.forEach(ele => (ele.isDirect = val))
        }
      }
    },
    created() {
      this.cartData = this.$store.getters.cartList
      // this.cartData.forEach(ele => this.$set(ele, 'num', 1))
      // console.log(this.cartData)
    },
    methods: {
      appFn() {
        this.imggou = !this.imggou
      },
      priceSum() {
        return this.cartData.reduce((sum, item) => (item.isDirect == true ? (sum += +item.price * +item.num) : sum), 0)
      },
      numSun() {
        return this.cartData.reduce((sum, item) => (item.isDirect == true ? (sum += +item.num) : sum), 0)
      }
    }
  }
</script>

<style scoped>
  .cart {
    width: 100%;
    display: flex;
    position: fixed;
    bottom: 50px;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
  }
  .cart span:nth-child(2) p:nth-child(2) {
    font-size: 12px;
  }
  .zhuti {
    height: 800px;
    margin-top: 50px;
    background-color: rgb(246, 244, 244);
  }
</style>
