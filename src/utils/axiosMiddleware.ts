import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

const baseParams = {
  version: '1.0',
  ts: Math.floor(Date.now() / 1000)
}

function qs(data: any) {
  let ret = ''
  const resultData = Object.assign({ ...baseParams }, data || {})
  for (let it in resultData) {
    ret += `${encodeURIComponent(it)}=${encodeURIComponent(resultData[it])}&`
  }
  return ret
}

//https://test.xx.cn
//https://m.xx.com
const axiosMiddleware = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? 'http://rap2.taobao.org:38080/app/mock/254030' : '',
  timeout: 10000
})
axiosMiddleware.interceptors.request.use(
  (config: AxiosRequestConfig = {}) => {
    if (config.method === 'get') {
      config.params = Object.assign({ ...baseParams }, config.params || {})
    }
    if (config.method === 'post') {
      config.transformRequest = [qs]
    }
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

axiosMiddleware.interceptors.response.use(
  (res: AxiosResponse) => {
    const { code } = res.data
    //登录失效code则返回登录页
    if (code === 999) {
      return Promise.reject(res)
    }
    //请求失败
    if (code === 0) {
      return Promise.reject(res)
    }
    return Promise.resolve(res)
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)
export default axiosMiddleware
