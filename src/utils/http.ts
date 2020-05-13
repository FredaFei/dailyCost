import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import axiosMiddleware from './axiosMiddleware'
import utils from './help'

export function addTokenAndKeyParams(options = {}) {
  return Object.assign({ token: utils.getStorage('localStorage', 'token') || '' }, options)
}

interface apIResponse<T = any> {
  message: string
  status: number
  result: T
}

const http = (options: AxiosRequestConfig = {}): Promise<apIResponse<T>> => {
  let { url, method = 'get', ...rest } = options
  return new Promise((resolve, reject) => {
    axiosMiddleware({ url, method, ...rest }).then(
      (res: AxiosResponse) => resolve(res.data),
      (err: AxiosError) => reject(err)
    )
  })
}
export default http
