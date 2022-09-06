import {
  Message
} from "element-ui";
//手机号正则
export function phoneCheck(value) {
  let reg_tel = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
  if (!reg_tel.test(value)) {
    Message({
      message: "手机号不正确",
      type: "warning",
      duration: 3000
    });
    return false;
  } else {
    return true;
  }
}

// 手机号验证
export function isvalidPhone(str) {
  const reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
  return reg.test(str);
}

// 验证密码   其中数字和字母必须同时存在,长度在8~16之间，
export function isvalidPass(str) {
  const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
  return reg.test(str);
}

//   验证 登录名要求必须是 数字和字母组合，
//其中数字和字母必须同时存在长度在8-20位
export function isvalidUsername(str) {
  const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/;
  return reg.test(str);
}

//验证验证码为6位数  isvalidateCode
export function isvalidateCode(str) {
  const reg = /^\d{6}$/;
  return reg.test(str);
}
