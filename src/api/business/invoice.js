import request from "@/utils/request"

// 条件查询发票申请列表
export function getList(data,params){
    return request({
        url: "/operation/invoiceAudit/queryInvoices",
        method: "post",
        data: data,
        params:params
    })
}




// 根据发票申请单查看对应的运单列表
export function queryCarriagesByApplyCode(data,params){
    return request({
        url: "/operation/invoiceAudit/queryCarriagesByApplyCode",
        method: "post",
        data: data,
        params:params
    })
}


// 查看发票申请详情
export function queryInvoiceById(data){
    return request({
        url: "/operation/invoiceAudit/queryInvoiceById",
        method: "post",
        data: data
    })
}
//审核发票
export function invoiceAudit(data){
    return request({
        url: "/operation/invoiceAudit/invoiceAudit",
        method: "post",
        data: data
    })
}

//导出
export function exportInvoice(data){
    return request({
        url: "/operation/invoiceManage/exportInvoice",
        method: "post",
        responseType:"blob",
        data: data
    })
}

//详情里用的导出
export function exportWaybillRecord(data){
    return request({
        url: "/operation/invoiceAudit/exportWaybillRecord",
        method: "post",
        responseType:"blob",
        data: data
    })
}