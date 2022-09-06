// 合同管理
import request from "@/utils/request"

// 条件查询合同
export function getList(data,params){
    return request({
        url: "/operation/contractManage/queryContracts",
        method: "POST",
        data: data,
        params:params
    })
}


