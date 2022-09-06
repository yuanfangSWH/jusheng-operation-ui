import request from "@/utils/request";

// 条件查询列表
export function getList(data,params) {
  return request({
    url: "operation/shipperUser/queryShippers",
    method: "post",
    data: data,
    params:params
  });
}

//删除托运人信息
export function deleteShipper(data) {
    return request({
        url: 'operation/shipperUser/deleteShipper',
        method: 'post',
        data: data
    })
  }

//添加托运人
export function saveShipperUser(data) {
    return request({
        url: 'operation/shipperUser/saveShipperUser',
        method: 'post',
        data: data
    })
  }
//修改托运人保存
export function updateShipper(data) {
    return request({
        url: 'operation/shipperUser/updateShipper',
        method: 'post',
        data: data
    })
  }
  //查询业务管理公司
export function queryAdminCompany(params) {
    return request({
        url: 'operation/shipperUser/queryAdminCompany',
        method: 'get',
        params: params
    })
  }
  //查看托运人信息(个人)
  export function queryShipperById(data) {
    return request({
        url: 'operation/shipperUser/queryShipperById',
        method: 'post',
        data: data
    })
  }
  //验证用户名是否可用
  export function verifyUserName(data) {
    return request({
        url: 'operation/shipperUser/verifyUserName',
        method: 'post',
        data: data
    })
  }

  //验证企业名称是否重复
  export function verifyEnterpriseName(data) {
    return request({
        url: 'operation/shipperUser/verifyEnterpriseName',
        method: 'post',
        data: data
    })
  }
   //托运人启用/禁用操作
   export function enableAndDisableClient(data) {
    return request({
        url: 'operation/shipperUser/enableAndDisableClient',
        method: 'post',
        data: data
    })
  }