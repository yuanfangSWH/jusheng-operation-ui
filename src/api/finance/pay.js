import request from "@/utils/request";

// 条件查询列表
export function getList(data, params) {
  return request({
    url: "operation/FinancialRemittance/queryPaymentManage",
    method: "post",
    data: data,
    params: params
  });
}

// 添加支付凭证
export function setCredentials(data) {
  return request({
    url: "operation/FinancialRemittance/uploadPaymentCredentials",
    method: "post",
    data: data
  });
}
// 财务线下打款
export function offlinePayment(data) {
  return request({
    url: "operation/FinancialRemittance/offlinePayment",
    method: "post",
    data: data
  });
}
// 财务再次发起付款
export function againRemittance(data) {
  return request({
    url: "operation/FinancialRemittance/againRemittance",
    method: "post",
    data: data
  });
}
//财务回退
export function fallbackPayment(data) {
  return request({
    url: "operation/FinancialRemittance/fallbackPayment",
    method: "post",
    data: data
  });
}
//批量添加凭证
export function batchPaymentCredentials(data) {
  return request({
    url: "operation/FinancialRemittance/batchPaymentCredentials",
    method: "post",
    data: data
  });
}
//查询全部公司账户余额
export function queryAllCompanyAccountBalances() {
  return request({
    url: "/operation/FinancialRemittance/queryAllCompanyAccountBalances",
    method: "get"
  })
}
//导出
export function exportPaymentInfo(data) {
  return request({
    url: "operation/FinancialRemittance/exportPaymentInfo",
    method: "post",
    data: data
  });
}
