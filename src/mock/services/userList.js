import Mock from 'mockjs'
import {builder} from '../util'

const userList=options=>{
    const list=[
        {id:1,headimg:'headimg',name:'东哥',lastcord:'还会2321312322312321',time:"9:00"},
        {id:2,headimg:'headimg',name:'哥',lastcord:'22213123213',time:"9:01"},
        {id:3,headimg:'headimg',name:'东',lastcord:'还会2',time:"9:03"},
        {id:4,headimg:'headimg',name:'东2哥',lastcord:'2还会',time:"9:04"},
    ]
    const userList=builder(list)
    console.log(userList)
    return userList
}
Mock.mock(/\/api\/user\/list/,'get',userList)