import request from '@/utils/request'

// 获取路由
export const getRouters = () => {
  return request({
    url: '/operation/menu/getRouters',
    method: 'get'
  })
}