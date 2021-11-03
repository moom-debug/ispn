import request from '@/utils/request'

// 查询图书类别列表
export function listCategory(query) {
  return request({
    url: '/category/list',
    method: 'get',
    params: query
  })
}

// 查询图书类别
export function getCategory(isbn) {
  return request({
    url: '/category/' + isbn,
    method: 'get'
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
