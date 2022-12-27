<template>
  <div class="hangxiang">
    <span>
      <img :src="item.img" height="120px" />
    </span>
    <span class="shuxiang">
      <span>
        <span class="manufa" v-if="item.isDirect">直营</span>
        <span class="stock" v-if="!item.isHave">缺货</span>
        {{ item.name }}
      </span>
      <span class="hengxiang">
        <span>￥{{ item.price }}</span>
        <span>销量：{{ item.volume }}</span>
      </span>
    </span>
  </div>
</template>

<script>
  export default {
    props: {
      item: Object
    }
  }
</script>

<style scoped>
  .manufa {
    background-color: red;
    color: #fff;
    margin-right: 5px;
  }
  .stock {
    background-color: rgb(120, 120, 120);
    color: #fff;
    margin-right: 5px;
  }
  .hangxiang {
    display: flex;
    background-color: #fff;
    border-bottom: 1px solid #ccc;
    padding: 10px;
  }
  .shuxiang {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .hengxiang {
    display: flex;
    justify-content: space-between;
  }
  .hengxiang span:nth-child(1) {
    color: red;
    padding: 5px;
  }
  .hengxiang span:nth-child(2) {
    color: rgb(150, 149, 149);
    padding: 5px;
  }
</style>
