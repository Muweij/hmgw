<template>
  <div class="shangpin" @click="addFn(item.id)">
    <img :src="item.img" height="190px" />

    <span class="wenzi">
      <span class="manufa" v-if="item.isDirect">直营</span>
      <span class="stock" v-if="!item.isHave">缺货</span>
      {{ item.name }}
    </span>
    <span class="df">
      <span class="jiage">￥{{ item.price }}</span>

      <span class="xiaoliang">销量：{{ item.volume }}</span>
    </span>
  </div>
</template>

<script>
  export default {
    props: ['item'],
    methods: {
      addFn(id) {
        if (this.item.isHave) {
          this.$router.push(`/details${id}`)
        } else {
          alert('该商品暂无库存')
        }
      }
    }
  }
</script>

<style scoped>
  .shangpin {
    width: 165px;
    display: inline-block;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    margin: 10px 5px 0 5px;
    padding: 10px;
  }
  .wenzi {
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    -webkit-box-orient: vertical;
    font-size: 16px;
    line-height: 24px;
  }
  .xiaoliang {
    color: rgb(150, 149, 149);
    font-size: 14px;
  }
  .jiage {
    color: red;
    font-size: 16px;
  }
  .df {
    display: flex;
    justify-content: space-between;
  }
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
</style>
