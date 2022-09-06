import request from "@/utils/request";

// 条件查询运单列表
export function getList(data,params){
    return request({
        url: "/operation/carriageAudit/queryCarriages",
        method: "post",
        data: data,
        params:params
    })
}
//查看运单信息
export function queryCarriageById(data){
    return request({
        url: "/operation/carriageAudit/queryCarriageById",
        method: "post",
        data: data
    })
}

//审核
export function carriageAudit(data){
    return request({
        url: "/operation/carriageAudit/carriageAudit",
        method: "post",
        data: data
    })
}

//货物类型
export function queryGoodsType(data){
    return request({
        url: "/operation/carriageAudit/queryGoodsType",
        method: "get",
        data: data
    })
}



