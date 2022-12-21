<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <!-- <img v-for="item in " /> -->
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
  import { goodsDetailApi } from '@/api/home'
  export default {
    props: {
      itemId: [Number, String]
    },
    data() {
      return {}
    },
    async created() {
      try {
        let res = await goodsDetailApi(this.itemId)
        console.log(res)
      } catch (error) {}
    }
  }
</script>

<style></style>
