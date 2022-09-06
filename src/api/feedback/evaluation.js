import request from "@/utils/request";

// 查询列表
export function getList(data,params) {
  return request({
    url: "operation/evaluation/queryEvaluations",
    method: "post",
    data: data,
    params:params
  });
}
