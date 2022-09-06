import request from "@/utils/request";

//条件查询列表
export function getList(data,params) {
  return request({
    url: "/operation/shipperClient/getShipperClient",
    method: "post",
    data: data,
    params:params
  });
}
// 添加
export function saveShipperClient(data){
    return request({
      url: "/operation/shipperClient/saveShipperClient",
      method: "post",
      data: data
    })
  }
  // 修改保存
export function updateShipperClient(data){
    return request({
      url: "/operation/shipperClient/updateShipperClient",
      method: "post",
      data: data
    })
  }
  // 附件列表
export function selectAccessory(data,params){
    return request({
      url: "/operation/shipperClient/selectAccessory",
      method: "post",
      data: data,
      params:params
    })
  }
  //添加附件
  export function saveAccessory(data){
    return request({
      url: "/operation/shipperClient/saveAccessory",
      method: "post",
      data: data
    })
  }
// 删除客户
export function deleteShipperClient(data){
  return request({
    url: "/operation/shipperClient/deleteShipperClient",
    method: "post",
    data: data
  })
}
//文件类型列表
export function getFileTypes(params) {
    return request({
      url: "operation/GeneralInfo/getFileTypes",
      method: "get",
      params: params
    });
  }

// 删除客户附件
export function deleteClientSideAccessory(data){
    return request({
      url: "/operation/shipperClient/deleteClientSideAccessory",
      method: "post",
      data: data
    })
  }

// 条件导出用户客户
export function exportClientSide(data){
  return request({
    url: "/operation/shipperClient/exportClientSide",
    method: "post",
    data: data
  })
}



