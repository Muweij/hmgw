import axios from 'axios'

const request = axios.create({
  baseURL: 'http://api.imooc.hybrid.lgdsunday.club'
})
request.interceptors.request.use(
  function (config) {
    // config.params = {  }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)
export default request
