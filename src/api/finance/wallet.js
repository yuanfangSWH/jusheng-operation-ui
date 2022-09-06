import request from "@/utils/request";

// 获取用户的钱包信息
export function getList(data,params) {
  return request({
    url: "operation/usersPurse/queryUsersPurseInfo",
    method: "post",
    data: data,
    params:params
  });
}

/**充值 */
export function clientAccountTopUp(data) {
  return request({
    url: "operation/usersPurse/clientAccountTopUp",
    method: "post",
    data: data
  });
}

/**扣款 */
export function clientDeductions(data){
  return request({
    url: "operation/usersPurse/clientDeductions",
    method: "post",
    data: data
  })
}

//修改司机的银行卡信息(运营)
export function updateDriverBankCard(data){
  return request({
    url: "operation/usersPurse/updateDriverBankCard",
    method: "post",
    data: data
  })
}

//银行卡管理的回显信息
export function queryBankCardInfo(data){
    return request({
      url: "operation/usersPurse/queryBankCardInfo",
      method: "post",
      data: data
    })
  }