import http from '../utils/http'

interface Detail{
  type?: string
  page_size?: number
}
export const helpCenterDetail = (data:Detail) => {
  return http({
    url: '/helpCenter',
    method: 'post',
    data
  })
};