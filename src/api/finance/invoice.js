import request from "@/utils/request";


// 查询发票申请列表
export function getList(data, params) {
  return request({
    url: "/operation/invoiceManage/queryInvoiceInfo",
    method: "post",
    data: data,
    params: params
  })
}

//查看发票申请详情
export function queryInvoiceById(data) {
  return request({
    url: "/operation/invoiceAudit/queryInvoiceById",
    method: "post",
    data: data
  })
}
// 发票回退至审核状态
export function fallbackInvoice(data) {
  return request({
    url: "operation/invoiceManage/fallbackInvoice",
    method: "post",
    data: data
  });
}

//新增发票
export function uploadInvoice(data) {
  return request({
    url: "/operation/invoiceManage/uploadInvoice",
    method: "post",
    data: data
  })
}
//修改发票
export function updateInvoice(data) {
  return request({
    url: "/operation/invoiceManage/updateInvoice",
    method: "post",
    data: data
  })
}
//删除发票
export function deleteInvoice(data) {
  return request({
    url: "/operation/invoiceManage/deleteInvoice",
    method: "post",
    data: data
  })
}
//导出
export function exportInvoice(data) {
  return request({
    url: "/operation/invoiceManage/exportInvoice",
    method: "post",
    responseType: "blob",
    data: data
  })
}

//详情里用的导出
export function exportWaybillRecord(data) {
  return request({
    url: "/operation/invoiceAudit/exportWaybillRecord",
    method: "post",
    responseType: "blob",
    data: data
  })
}
//发票管理列表
export function invoiceManagePage(data) {
  return request({
    url: "/operation/invoiceManage/invoiceManagePage",
    method: "post",
    data: data
  })
}
