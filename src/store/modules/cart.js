import Vue from 'vue'

const getCartState = () => ({
  goodsCartList: []
})

const mutations = {
  updateGoodsCart({ goodsCartList }, payload) {
    // 判断数组里有没有这个商品，再添加
    // if (state.goodsCartList.includes(item => item.id == payload.id)) state.goodsCartList.push(payload)
    const flag = goodsCartList.findIndex(ele => ele.id === payload.id)
    console.log(flag)
    if (flag === -1) {
      // 这样更好捏
      Vue.set(payload, 'num', 1)
      state.goodsCartList.push(payload)

      return flag
    } else {
      return true
    }
  }
  // 更新数量
  // updateCartItemCount(state, { id, count }) {
  //   const index = state.goodsCartList.findIndex(ele => ele.id === id)
  //   state.goodsCartList[index].num += count
  // }
}

const state = getCartState()

const cart = {
  namespaced: true,
  state,
  mutations
}

export default cart
