import request from '@/utils/request'

const Api={
  listUser:'/user/list',
  RecordCurrent:'/record/current',
  myself:'/myself/get',
  allUser:'/allUser/list',
  addFriend:'/friend/add',
  friendAgree:'/friend/agree',
  incomingFriend:'/friend/new',
  AgreeOrNo:'/yesOr/no'
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

//添加好友发送给后端
export function addFriend(parameter) {
  return request({
    url: Api.addFriend,
    method: 'post',
    data:parameter
  })
}

//好友申请已通过
export function friendAgree(parameter) {
  return request({
    url: Api.friendAgree,
    method: 'post',
    data:parameter
  })
}

//websocket模拟对方申请加好友
export function incomingFriend() {
  return request({
    url: Api.incomingFriend,
    method: 'get',
  })
}

//向后端发送我是否接受还是拒绝了某个人
export function AgreeOrNo(parameter) {
  return request({
    url: Api.AgreeOrNo,
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

