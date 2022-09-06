import request from "@/utils/request";
// 条件查询运单列表
export function getList(data, params) {
  return request({
    url: "/operation/carriageManage/queryCarriageInfos",
    method: "post",
    data: data,
    params: params
  })
}

// 详情
export function queryCarriageById(data, params) {
  return request({
    url: "/operation/carriageAudit/queryCarriageById",
    method: "post",
    data: data,
    params: params
  })
}
// 运营修改运输信息
export function updateTransport(data) {
  return request({
    url: "/operation/carriageManage/updateTransport",
    method: 'post',
    data: data
  })
}

// 运单跟踪(返回地图坐标)
export function carriageTraces(data) {
  return request({
    url: "/operation/carriageManage/carriageTraces",
    method: "post",
    data: data
  })
}
// 运单跟踪(带时间条件)
export function carriageTracesByTime(data) {
  return request({
    url: "/operation/carriageManage/carriageTracesByTime",
    method: "post",
    data: data,
    timeout: 60000
  })
}
// 车辆最新位置定位
export function vehiclePositioning(data) {
  return request({
    url: "/operation/carriageManage/vehiclePositioning",
    method: "post",
    data: data,
    timeout: 60000
  })
}

// 查看运单的附件信息
export function queryCarriageAttachment(data, params) {
  return request({
    url: "/operation/carriageAudit/queryCarriageAttachment",
    method: "post",
    data: data,
    params: params
  })
}

//查看运单的结算信息
export function queryCarriageSettlementInfo(data) {
  return request({
    url: "/operation/carriageAudit/queryCarriageSettlementInfo",
    method: "post",
    data: data
  })
}
//查询司机
export function queryDeiver(data) {
  return request({
    url: "/operation/carriageAudit/queryDeiver",
    method: "post",
    data: data
  })
}

//模糊查询车辆
export function queryVehicle(data) {
  return request({
    url: "/operation/carriageAudit/queryVehicle",
    method: "post",
    data: data
  })
}
//查询第二收款人
export function querySecondPayment(data) {
  return request({
    url: "/operation/carriageAudit/querySecondPayment",
    method: "post",
    data: data
  })
}

//保存运单附件
export function saveCarriageAttachment(data) {
  return request({
    url: "/operation/carriageAudit/saveCarriageAttachment",
    method: "post",
    data: data
  })
}
//删除运单附件
export function deleteCarriageAttachment(data) {
  return request({
    url: "/operation/carriageAudit/deleteCarriageAttachment",
    method: "post",
    data: data
  })
}
//作废
export function waybillInvalid(data) {
  return request({
    url: "/operation/carriageManage/waybillInvalid",
    method: "post",
    data: data
  })
}
//发车上报
export function depart(data) {
  return request({
    url: "/operation/carriageManage/depart",
    method: "post",
    data: data
  })
}
//货物签收
export function unload(data) {
  return request({
    url: "/operation/carriageManage/unload",
    method: "post",
    data: data
  })
}
//条件导出运单
export function exportCarriage(data) {
  return request({
    url: "/operation/carriageManage/exportCarriage",
    method: "post",
    responseType: "blob",
    data: data
  })
}
//查看运单的结算信息(信息回显)
export function queryCarriageSettlement(data) {
  return request({
    url: "/operation/carriageAudit/queryCarriageSettlement",
    method: "post",
    data: data
  })
}
//查看运单的操作日志
export function queryOperationLog(data) {
  return request({
    url: "/operation/carriageManage/queryOperationLog",
    method: "post",
    data: data
  })
}
//货物类型
export function queryGoodsType(data) {
  return request({
    url: "/operation/carriageAudit/queryGoodsType",
    method: "get",
    data: data
  })
}
//运单管理统计运单信息
export function queryCarriageSum(data) {
  return request({
    url: "/operation/carriageManage/queryCarriageSum",
    method: "post",
    data: data
  })
}