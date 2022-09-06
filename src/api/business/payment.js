import request from "@/utils/request"


// 条件查询付款申请列表
export function getList(data, params) {
  return request({
    url: "/operation/paymentAudit/queryPayments",
    method: "post",
    data: data,
    params: params
  })
}

//  查看付款申请详情
export function queryPaymentById(data) {
  return request({
    url: "/operation/paymentAudit/queryPaymentById",
    method: "post",
    data: data
  })
}

// 批量审核付款申请单
export function paymentAudit(data) {
  return request({
    url: "/operation/paymentAudit/paymentAudit",
    method: "post",
    data: data
  })
}

// 运营回退付款申请单
export function financeFallbackPayment(data) {
  return request({
    url: "/operation/paymentAudit/financeFallbackPayment",
    method: "post",
    data: data
  })
}
//付款申请单历史记录列表
export function queryPaymentRecord(data, params) {
  return request({
    url: "/operation/paymentAudit/queryPaymentRecord",
    method: "post",
    data: data,
    params: params
  })
}
//付款审核信息统计
export function queryPaymentSum(data) {
  return request({
    url: "/operation/paymentAudit/queryPaymentSum",
    method: "post",
    data: data
  })
}
