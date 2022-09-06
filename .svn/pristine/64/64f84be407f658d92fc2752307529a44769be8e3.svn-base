import request from "@/utils/request";
//查看车辆列表
export function getList(data, params) {
  return request({
    url: "/operation/vehicleManage/queryVehicles",
    method: "post",
    data: data,
    params: params
  });
}

//查看车辆信息
export function queryVehicleById(data) {
  return request({
    url: "/operation/vehicleManage/queryVehicleById",
    method: "post",
    data: data
  })
}
// 添加
export function saveVehicle(data) {
  return request({
    url: "/operation/vehicleManage/saveVehicle",
    method: "post",
    data: data
  })
}

// 修改保存
export function updateVehicle(data) {
  return request({
    url: "/operation/vehicleManage/updateVehicle",
    method: "post",
    data: data
  })
}
//查询车辆是否存在绑定
export function queryWhetherVehicleIsBind(data) {
  return request({
    url: "/operation/vehicleManage/queryWhetherVehicleIsBind",
    method: "post",
    data: data
  })
}
// 删除
export function deleteVehicle(data) {
  return request({
    url: "/operation/vehicleManage/deleteVehicle",
    method: "post",
    data: data
  })
}


// 查询车牌号是否可以注册
export function DetectionVehicle(data) {
  return request({
    url: "/operation/vehicleManage/DetectionVehicle",
    method: "post",
    data: data
  })
}

// 查询车辆能源类型分类
export function queryVehicleEnergyType() {
  return request({
    url: "/operation/vehicleManage/queryVehicleEnergyType",
    method: "get"
  })
}

// 查询车辆车牌颜色分类
export function queryVehiclePlateColor() {
  return request({
    url: "/operation/vehicleManage/queryVehiclePlateColor",
    method: "get"
  })
}

// 查询车辆分类
export function queryVehicleType(data) {
  return request({
    url: "/operation/vehicleManage/queryVehicleType",
    method: "post",
    data: data
  })
}
