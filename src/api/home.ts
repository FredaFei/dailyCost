import http from 'utils/http'

export const getSlides = () => {
  return http({
    url: '/slides',
    method: 'get'
  })
};