import request from "@/utils/request";

//条件列表
export function getList(data,params) {
    return request({
        url: 'operation/driver/queryDrivers',
        method: 'post',
        data: data,
        params:params
    })
  }

//添加司机
export function saveDriver(data) {
    return request({
        url: 'operation/driver/saveDriver',
        method: 'post',
        data: data
    })
  }
//修改司机保存
export function updateDriver(data) {
    return request({
        url: 'operation/driver/updateDriver',
        method: 'post',
        data: data
    })
  }
//删除
export function deleteDriver(data) {
    return request({
        url: 'operation/driver/deleteDriver',
        method: 'post',
        data: data
    })
  }
//详情
export function queryDriverById(data) {
    return request({
        url: 'operation/driver/queryDriverById',
        method: 'post',
        data: data
    })
  }
//条件导出用户司机
export function exportDriver(data) {
    return request({
        url: 'operation/driver/exportDriver',
        method: 'post',
        data: data
    })
  }
  //导入司机
export function importDriver(data) {
    return request({
        url: 'operation/driver/importDriver',
        method: 'post',
        data: data
    })
  }
  //检测手机号
  export function detectionPhone(data) {
    return request({
        url: 'operation/driver/detectionPhone',
        method: 'post',
        data: data
    })
  }
  //查询关联车辆
  export function queryVehicleNumber(data) {
    return request({
        url: 'operation/driver/queryVehicleNumber',
        method: 'post',
        data: data
    })
  }