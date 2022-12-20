<template>
  <div>
    <div class="cart">
      <span>
        <input type="radio" />
        全选
      </span>
      <span>
        <p>合计:￥0.00</p>
        <p>总额:￥0.00 立减￥00.00</p>
      </span>
      <span><van-button type="danger">去结算(0)</van-button></span>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  .cart {
    width: 100%;
    display: flex;
    position: fixed;
    bottom: 50px;
    justify-content: space-around;
    align-items: center;
  }
  .cart span:nth-child(2) p:nth-child(2) {
    font-size: 12px;
  }
</style>
