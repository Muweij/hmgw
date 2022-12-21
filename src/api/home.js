import request from '@/utils/request'
// export const swiperApi = () => request({ url: '/swiper' })
export const swiperApi = () =>
  request({
    url: '/swiper',
    params: {
      token: '595fe950-7ebd-11ed-aa1f-dd279271aa3a'
    }
  })
export const activitysApi = () =>
  request({
    url: '/activitys',
    params: {
      token: '595fe950-7ebd-11ed-aa1f-dd279271aa3a'
    }
  })
export const goodsApi = () =>
  request({
    url: '/goods',
    params: {
      token: '595fe950-7ebd-11ed-aa1f-dd279271aa3a'
    }
  })
export const secondsApi = () =>
  request({
    url: '/seconds',
    params: {
      token: '595fe950-7ebd-11ed-aa1f-dd279271aa3a'
    }
  })
export const goodsDetailApi = goodsId =>
  request({
    url: '/goodsDetail',
    params: {
      token: '595fe950-7ebd-11ed-aa1f-dd279271aa3a',
      goodsId
    }
  })
