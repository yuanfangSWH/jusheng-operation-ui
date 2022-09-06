// 系统公告
import request from "@/utils/request"


// 条件查询系统公告列表
export function getList(data, params) {
  return request({
    url: "/operation/sysNoticeManage/queryNoticeManages",
    method: "post",
    data: data,
    params: params
  })
}

// 新建系统公告
export function savaJushengSysNotice(data) {
  return request({
    url: "/operation/sysNoticeManage/savaJushengSysNotice",
    method: "post",
    data: data
  })
}

// 系统发布公告
export function release(id) {
  return request({
    url: "/operation/sysNoticeManage/release",
    method: "post",
    data: {
      noticeId: id
    }
  })
}

// 取消发布系统公告
export function revocation(id) {
  return request({
    url: "/operation/sysNoticeManage/revocation",
    method: "post",
    data: {
      noticeId: id
    }
  })
}

// 删除系统公告
export function deleteJushengSysNotice(id) {
  return request({
    url: "/operation/sysNoticeManage/deleteJushengSysNotice",
    method: "post",
    params: {
      noticeId: id
    }
  })
}


// 查看系统公告详情
export function queryNoticeManageById(id) {
  return request({
    url: "/operation/sysNoticeManage/queryNoticeManageById",
    method: "post",
    params: {
      noticeId: id
    }
  })
}




// 修改系统公告
export function updateJushengSysNotice(params) {
  return request({
    url: "/operation/sysNoticeManage/updateJushengSysNotice",
    method: "post",
    data: params,
  })
}
