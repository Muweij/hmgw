<template>
  <div class="shangpin" @click="addFn(item.id)">
    <img :src="item.img" height="190px" />
    <span class="wenzi">{{ item.name }}</span>
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
        this.$router.push(`/details${id}`)
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
</style>
