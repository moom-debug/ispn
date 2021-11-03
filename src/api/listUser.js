import request from '@/utils/request'

const Api={
  listUser:'/user/list',
  RecordCurrent:'/record/current'
}

// 查询图书类别列表
export function listUser() {
  return request({
    url: Api.listUser,
    method: 'get',
  })
}

// 查询图书类别
export function getCurrentRecord(parameter) {
  return request({
    url: Api.RecordCurrent,
    method: 'post',
    data:parameter
  })
}

// 新增图书类别
export function addCategory(data) {
  return request({
    url: '/category',
    method: 'post',
    data: data
  })
}

// 修改图书类别
export function updateCategory(data) {
  return request({
    url: '/category',
    method: 'put',
    data: data
  })
}

// 删除图书类别
export function deleteCategory(isbn) {
  return request({
    url: '/category/delete/' + isbn,
    method: 'delete'
  })
}
