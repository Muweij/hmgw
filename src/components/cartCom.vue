<template>
  <div>
    <div class="shangpin">
      <img
        src="http://imooc.hybrid.lgdsunday.club/img/check.e50f3f2b.svg"
        v-if="item.isDirect"
        @click="toChangeSelect"
        height="20px
        "
        class="yangshi"
      />
      <img
        src="http://imooc.hybrid.lgdsunday.club/img/no-check.59675650.svg"
        v-else
        @click="toChangeSelect"
        height="20px
        "
        class="yangshi"
      />
      <img :src="item.img" width="100px" />
      <span class="shangpin_name">
        <span class="aaa">
          <!-- <span class="manufa" v-if="item.isDirect">直营</span>
          <span class="stock" v-if="!item.isHave">缺货</span> -->
          {{ item.name }}
        </span>
        <span class="botten">
          <span style="color: red">￥{{ item.price }}</span>
          <span>
            <span class="jian" @click="appFn">-</span>
            <span class="num">{{ item.num }}</span>
            <span class="jia" @click="addFn">+</span>
          </span>
        </span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CartCom',
    props: {
      item: Object,
      imggou: Boolean
    },
    data() {
      return {
        imggouxuan: false
      }
    },
    methods: {
      appFn() {
        if (this.item.num != 1) {
          this.item.num--
          console.log(this.item.num)
        }
      },
      addFn() {
        this.item.num++

        console.log(this.item.num)
      },
      toChangeSelect() {
        this.item.isDirect = !this.item.isDirect
      }
    }
  }
</script>

<style scoped>
  .shangpin {
    display: flex;
    background-color: #fff;
    padding: 20px;
  }
  .shangpin_name {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
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
  .aaa {
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    -webkit-box-orient: vertical;
    font-size: 16px;
    line-height: 24px;
    padding: 5px;
  }
  .botten {
    display: flex;
    justify-content: space-around;
  }
  .num {
    display: inline-block;
    width: 40px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    background-color: #ccc;
  }
  .jian {
    display: inline-block;
    width: 40px;
    height: 20px;
    text-align: center;
    line-height: 20px;
  }
  .jia {
    display: inline-block;
    width: 40px;
    height: 20px;
    text-align: center;
    line-height: 20px;
  }
  .yangshi {
    margin-top: 30px;
  }
</style>
