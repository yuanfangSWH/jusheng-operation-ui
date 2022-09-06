import request from "@/utils/request";
//条件查询列表
export function getList(data,params) {
  return request({
    url: "/operation/clientPayee/queryPayees",
    method: "post",
    data: data,
    params:params
  });
}

//添加
export function addPayee(data) {
    return request({
      url: "/operation/clientPayee/saveClientPayee",
      method: "post",
      data:data
    });
  }
//修改收款人信息
export function updatePayee(data) {
    return request({
      url: "/operation/clientPayee/updatePayee",
      method: "post",
      data:data
    });
  }
// 查看收款人信息接口
export function queryPayeeById(data) {
    return request({
      url: "/operation/clientPayee/queryPayeeById",
      method: "post",
      data: data
  })
}

// 删除收款人接口
export function removePayee(data) {
  return request({
    url: "/operation/clientPayee/deletePayee",
    method: "post",
    data: data
  })
}
//查询收款人的关联人
export function queryAffiliatedPerson(params) {
    return request({
      url: "/operation/clientPayee/queryAffiliatedPerson",
      method: "get",
      params: params
    })
  }

// 条件导出用户收款人
export function exportClientPayee(data){
  return request({
    url: "/operation/clientPayee/exportClientPayee",
    method: "post",
    responseType:"blob",
    data: data
  })
}
