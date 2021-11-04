import request from '@/utils/request'

const Api={
  listUser:'/user/list',
  RecordCurrent:'/record/current'
}

// 查询所有好友列表
export function listUser() {
  return request({
    url: Api.listUser,
    method: 'get',
  })
}

// 查询当前聊天窗口数据
export function getCurrentRecord(parameter) {
  return request({
    url: Api.RecordCurrent,
    method: 'post',
    data:parameter
  })
}

