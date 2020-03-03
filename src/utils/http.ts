import { AxiosError, AxiosResponse } from 'axios';
import axiosMiddleware from './axiosMiddleware'
import utils from './help'

export function addTokenAndKeyParams(options = {}) {
  return Object.assign({token: utils.getStorage('localStorage', 'token') || ''}, options)
}
const http = (options:any)  => {
  let {url, method = 'get', ...rest} = options
  return new Promise((resolve, reject) => {
    axiosMiddleware({url, method, ...rest}).then(
      (res:AxiosResponse) => {
        resolve(res.data)
      },
      (err:AxiosError) => reject(err)
    )
  })
}
export default http
