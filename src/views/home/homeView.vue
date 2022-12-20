<template>
  <div>
    <van-swipe :autoplay="3000" class="my-swipe" indicator-color="white">
      <van-swipe-item v-for="item in getdata" :key="item.id">
        <img :src="item.icon" alt="" />
      </van-swipe-item>
    </van-swipe>
    <div class="activit">
      <div v-for="item in activitysdata" :key="item.id">
        <img :src="item.icon" />
      </div>
    </div>
  </div>
</template>

<script>
  import { swiperApi, activitysApi } from '@/api/home'

  export default {
    data() {
      return {
        getdata: [],
        activitysdata: []
      }
    },
    async created() {
      try {
        let { data } = await swiperApi()
        this.getdata = data.data.list
        let { data: date } = await activitysApi()
        this.activitysdata = date.data.list
      } catch (error) {
        console.log(error)
      }
    }
  }
</script>

<style scoped>
  .my-swipe .van-swipe-item {
    margin-top: 30px;
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    /* background-color: #39a9ed; */
  }
  .activity {
    height: 200px;
    display: flex;
    justify-content: flex-start;
  }
  .activity img {
    width: 100%;
    height: 100%;
  }
</style>
