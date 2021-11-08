import request from '@/utils/request'

const Api={
  listUser:'/user/list',
  RecordCurrent:'/record/current',
  myself:'/myself/get',
  allUser:'/allUser/list'
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

//添加好友查询所有用户数据
export function GetAllUser(parameter) {
  return request({
    url: Api.allUser,
    method: 'post',
    data:parameter
  })
}

// 查询自己的数据
export function GetMyself() {
  return request({
    url: Api.myself,
    method: 'get',
  })
}

