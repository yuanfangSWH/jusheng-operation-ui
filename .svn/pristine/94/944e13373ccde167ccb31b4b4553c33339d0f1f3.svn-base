import request from "@/utils/request"

// 返利管理
export function getList(data,params){
    return request({
        url: "/operation/couponManage/queryCoupons",
        method: "post",
        data: data,
        params:params
    })
}

//新建返利券
export function saveCoupon(data){
    return request({
        url: "/operation/couponManage/saveCoupon",
        method: "post",
        data: data
    })
}

//增加返利券数量
export function increaseCouponNum(data){
    return request({
        url: "/operation/couponManage/increaseCouponNum",
        method: "post",
        data: data
    })
}
//发放给托运人返利券
export function giveCoupon(data){
    return request({
        url: "/operation/couponManage/giveCoupon",
        method: "post",
        data: data
    })
}
//结束发放返利券
export function endCoupon(data){
    return request({
        url: "/operation/couponManage/endCoupon",
        method: "post",
        data: data
    })
}

//返利记录列表
export function queryFlRecords(data,params){
    return request({
        url: "/operation/couponManage/queryFlRecords",
        method: "post",
        data: data,
        params:params
    })
}

//查询托运人
export function queryGiveCouponClientInfo(data) {
    return request({
      url: "operation/couponManage/queryGiveCouponClientInfo",
      method: "post",
      data: data
    });
  }

  //黑名单列表
  export function queryBlacklists(data,params) {
    return request({
      url: "operation/couponManage/queryBlacklists",
      method: "post",
      data: data,
      params:params
    });
  }
  //批量处理黑名单添加/释放
  export function releaseBlacklist(data) {
    return request({
      url: "operation/couponManage/releaseBlacklist",
      method: "post",
      data: data
    });
  }