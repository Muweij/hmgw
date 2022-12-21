<template>
  <div>
    <van-nav-bar :title="title" v-if="title" fixed />
    <div v-else class="search">
      <van-icon name="wap-nav" size="30px" color="#fff" />
      <van-search v-model="value" placeholder="大前端开发，混合京东商城系统" shape="round" class="grail" />
      <van-icon name="chat-o" size="30px" color="#fff" />
    </div>

    <router-view></router-view>
    <van-tabbar route>
      <van-tabbar-item replace to="/home" icon="home-o" @click="title = false">首页</van-tabbar-item>
      <van-tabbar-item replace to="/cart" icon="shopping-cart-o" @click="title = '购物车'">购物车</van-tabbar-item>
      <van-tabbar-item replace to="/my" icon="user-o" @click="title = '个人中心'">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: '',
        value: ''
      }
    }
  }
</script>

<style scoped>
  .search {
    width: 100%;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 1;
  }
  .grail {
    flex: 1;
    background-color: rgba(255, 255, 255, 0);
  }
</style>
