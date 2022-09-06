import request from '@/utils/request'

//找回密码的接口：
export function resetUserInfo(data) {
  return request({
    url: "/operation/user/resetPassword",
    method: "put",
    data: data
  });
}
//找回密码,登录获取验证码接口
export function getPhoneCode(phoneNumber) {
  return request({
    url: "/operation/user/getPhoneCode" + phoneNumber,
    method: "get"
  });
}
