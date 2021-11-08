import { builder,getBody } from "../util";
import  Mock from 'mockjs'

const addFriend=(options)=>{
    const body=getBody(options)
    const respon=`好友申请已发送`
    return builder(respon)
}
Mock.mock(/\/api\/friend\/add/,'post',addFriend)