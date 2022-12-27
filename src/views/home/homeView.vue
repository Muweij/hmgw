<template>
  <div>
    <van-swipe :autoplay="3000" class="my-swipe">
      <van-swipe-item v-for="item in getdata" :key="item.id">
        <img :src="item.icon" />
      </van-swipe-item>
    </van-swipe>
    <div class="activity">
      <div v-for="item in activitysdata" :key="item.id">
        <img :src="item.icon" />
      </div>
    </div>
    <van-grid :column-num="5" class="goods" :border="false">
      <van-grid-item v-for="item in goodsdata" :key="item.id" :icon="item.icon" :text="item.text" @click="appFn" />
    </van-grid>
    <div class="seckill">
      <div>
        <span style="height: 20px">京东秒杀</span>
        <van-tag type="danger" class="aaa">16点场</van-tag>
        <!-- <van-tag plain type="danger"> -->
        <van-count-down class="conduct" :time="time" />
        <!-- </van-tag> -->
        <div class="gongdongtiao">
          <span v-for="item in seckilldata" :key="item.id" class="Price">
            <img :src="item.icon" style="width: 100px" />
            <span style="color: red">￥{{ item.oldPrice }}</span>
            <span style="color: #ccc">
              <del>￥{{ item.price }}</del>
            </span>
          </span>
        </div>
      </div>
      <div class="yiyuan">
        <img src="http://imooc.hybrid.lgdsunday.club/img/haoHuoQiang.a976e93f.gif" style="width: 100%" alt="" />
      </div>
      <!-- <div class="commodity"></div> -->
      <div class="bb">
        <shoppView v-for="item in goods" :key="item.id" :item="item"></shoppView>
      </div>
    </div>
  </div>
</template>

<script>
  // import moment from 'moment'
  import { swiperApi, activitysApi, secondsApi, goodsApi } from '@/api/home'
  import shoppView from '@/components/shoppView.vue'

  export default {
    components: {
      shoppView
    },
    data() {
      return {
        time: +new Date('2022-12-27 16:00:00') - +new Date(),
        getdata: [],
        activitysdata: [],
        goodsdata: [
          {
            id: 0,
            icon: 'http://imooc.hybrid.lgdsunday.club/img/jingDongChaoShi.ad21df4d.png',
            text: '京东商场'
          },
          {
            id: 1,
            icon: 'http://imooc.hybrid.lgdsunday.club/img/haiTunQuanQiu.54597de3.png',
            text: '海屯全球'
          },
          {
            id: 2,
            icon: 'http://imooc.hybrid.lgdsunday.club/img/jingDongFuShi.13729a19.png',
            text: '京东服饰'
          },
          {
            id: 3,
            icon: 'http://imooc.hybrid.lgdsunday.club/img/jingDongShengXian.22b8843b.png',
            text: '京东生鲜'
          },
          {
            id: 4,
            icon: 'http://imooc.hybrid.lgdsunday.club/img/jingDongDaoJia.d644304a.png',
            text: '京东到家'
          },
          {
            id: 5,
            icon: 'http://imooc.hybrid.lgdsunday.club/img/chongZhiJiaoFei.2c954f82.png',
            text: '充值缴费'
          },
          {
            id: 6,
            icon: 'http://imooc.hybrid.lgdsunday.club/img/jingDongPinGou.2dad6945.png',
            text: '9.9元拼'
          },
          {
            id: 7,
            icon: 'http://imooc.hybrid.lgdsunday.club/img/lingJuan.5ff084a4.png',
            text: '领券'
          },
          {
            id: 8,
            icon: 'http://imooc.hybrid.lgdsunday.club/img/zhuanQian.dbaa12df.png',
            text: '赚钱'
          },
          {
            id: 9,
            icon: 'http://imooc.hybrid.lgdsunday.club/img/quanBu.34bf33e3.png',
            text: '全部'
          }
        ],
        seckilldata: [],
        goods: []
      }
    },
    async created() {
      try {
        // console.log(moment().add(1, 'days').calendar())
        let { data } = await swiperApi()
        this.getdata = data.data.list
        let { data: activitys } = await activitysApi()
        this.activitysdata = activitys.data.list
        let { data: seckill } = await secondsApi()
        this.seckilldata = seckill.data.list
        let { data: goods } = await goodsApi()
        this.goods = goods.data.list
        log
      } catch (error) {
        // console.log(error)
      }
    },
    computed: {},
    watch: {},
    methods: {
      appFn() {
        this.$router.push('/product')
      }
    }
  }
</script>

<style scoped>
  .my-swipe .van-swipe-item {
    /* margin-top: 30px; */
    color: #fff;
    font-size: 20px;
    /* line-height: 150px; */
    text-align: center;
    /* background-color: #39a9ed; */
  }

  .van-swipe-item img {
    width: 100%;
    height: 100%;
  }
  .activity {
    /* transform: translateY(-50px); */
    height: 100px;
    /* padding: ; */
    /* width: 150rem; */
    display: flex;
    justify-content: flex-start;
  }
  .activity img {
    width: 100%;
    height: 100%;
  }

  .seckill {
    width: 100%;
    /* height: 330px; */
    background-color: #f4f5f6;

    /* text-align: center; */
  }
  .seckill > div:nth-child(1) {
    margin-top: 10px;
    padding-left: 5px;
    /* height: 200px; */
    line-height: 30px;
    /* display: inline-block; */
    width: 95%;
    text-align: left;
    background-color: #fff;
  }
  .gongdongtiao {
    white-space: nowrap;
    overflow: hidden;
    overflow-x: scroll;
    display: flex;
  }
  .gongdongtiao > span {
    display: flex;
    flex-direction: column;
  }
  .Price {
    text-align: center;
  }
  .conduct {
    /* margin-top: 20px; */
    display: inline-block;
    /* margin-left: 2px; */
    border: 1px solid red;
    color: red;
  }
  .aaa {
    margin-left: 5px;
    transform: translateY(-1px);
    height: 22px;
  }
  .bb {
    display: flex;
    flex-wrap: wrap;
  }
</style>
