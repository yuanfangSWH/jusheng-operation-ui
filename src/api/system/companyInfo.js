import request from "@/utils/request";

// 查询公司信息列表
export function listInfo(query) {
    return request({
        url: "/system/companyInfo/list",
        method: "get",
        params: query
    });
}

// 查询公司信息详细
export function getInfo(companyId) {
    return request({
        url: "/system/companyInfo/" + companyId,
        method: "get"
    });
}

// 新增公司信息
export function addInfo(data) {
    return request({
        url: "/system/companyInfo/add",
        method: "post",
        data: data
    });
}

// 修改公司信息
export function updateInfo(data) {
    return request({
        url: "/system/companyInfo/edit",
        method: "post",
        data: data
    });
}

// 删除公司信息
export function delInfo(companyId) {
    return request({
        url: "/system/companyInfo/" + companyId,
        method: "delete"
    });
}

//查看部门信息
export function getBumen(query) {
    return request({
        url: "/system/companyInfo/deptInfoList",
        method: "get",
        params: query
    });
}

// 删除部门信息
export function delbumenInfo(deptId) {
    return request({
        url: "/system/companyInfo/removeDeptInfo/" + deptId,
        method: "delete"
    });
}

// 新增部门信息
export function addDeptInfo(data) {
    return request({
        url: "/system/companyInfo/addDeptInfo",
        method: "post",
        data: data
    });
}

// 修改部门信息
export function upDeptInfo(data) {
    return request({
        url: "/system/companyInfo/editDeptInfo",
        method: "put",
        data: data
    });
}

// 查询部门信息详细
export function getDeptInfo(deptId) {
    return request({
        url: "/system/companyInfo/getDeptInfo/" + deptId,
        method: "get"
    });
}