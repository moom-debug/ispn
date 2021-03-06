//模拟数据库中的所有用户
import { builder,getBody } from "../util";
import Mock from 'mockjs'
import headimg from '@/assets/img/headimg.jpg'
import headimg2 from '@/assets/img/headimg2.jpg'
const allUserSearch=(options)=>{
    const body=getBody(options)
    
    const allUser=[
        {id:5,headimg:headimg,name:'hn'},
        {id:6,headimg:headimg,name:'n'},
        {id:7,headimg:headimg,name:'牛nh'},
        {id:8,headimg:headimg,name:'不h'},
        {id:9,headimg:headimg,name:'ah'},
        {id:10,headimg:headimg,name:'bh'},
        {id:11,headimg:headimg,name:'ch'},
        {id:12,headimg:headimg,name:'dh'},
        {id:13,headimg:headimg,name:'eh'},
        {id:14,headimg:headimg,name:'fh'},

    ]
    // 模拟数据库进行搜索框输入的匹配
    let search=allUser.filter(item=>item.name.indexOf(body.parem)!=-1)
    console.log('测试'+search)
    //包装成http需要的包
    return builder(search)
}

//进行模拟
Mock.mock(/\/api\/allUser\/list/,'post',allUserSearch)