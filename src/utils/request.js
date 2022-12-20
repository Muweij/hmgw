import axios from 'axios'

const request = axios.create({
  baseURL: 'http://api.imooc.hybrid.lgdsunday.club'
})
request.interceptors.request.use(
  function (config) {
    config.params = { token: '595fe950-7ebd-11ed-aa1f-dd279271aa3a' }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)
export default request
