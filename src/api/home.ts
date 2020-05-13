import http from '../utils/http'

export const getCostList = (params: { type: 0 | 1 }) => {
  return http({
    url: '/dailyCost/costList',
    params
  })
};
export const getDetail = (params: { id: number }) => {
  return http({
    url: '/dailyCost/detail',
    params
  })
};