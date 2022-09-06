import request from "@/utils/request";


//
// 条件查询运单列表
export function searchWayBillList(data){
    return request({
        url: "/operation/carriageAudit/queryCarriages",
        method:"post",
        data: {}
    })
}

