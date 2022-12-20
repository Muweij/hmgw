<template>
  <div>
    <div class="mydate">
      <img src="@/style/424460764.jpg" alt="" />
      <span>登录/注册</span>
    </div>
    <van-cell title="全部订单" is-link />
    <van-cell title="我的预约" is-link />
    <van-cell title="应用推荐" is-link />
    <van-cell title="用户福利" is-link />
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  .mydate img {
    position: absolute;
    top: 25%;
    border-radius: 50%;
    margin-left: 10px;
  }
  .mydate span {
    position: absolute;
    top: 10%;
    margin-left: 60px;
    /* border-radius: 50%; */
  }
  .mydate {
    position: relative;
    height: 60px;
    line-height: 60px;
    margin-top: 50px;
  }
</style>
