import { builder,getBody } from "../util";
import Mock from 'mockjs'
import headimg from '@/assets/img/headimg.jpg'
import headimg2 from '@/assets/img/headimg2.jpg'
const allUserSearch=(options)=>{
    const body=getBody(options)
    
    const allUser=[
        {id:5,headimg:headimg,name:'hn'},
        {id:6,headimg:headimg,name:'n'},
        {id:7,headimg:headimg,name:'牛n'},
        {id:8,headimg:headimg,name:'不h'},
    ]

    let search=allUser.filter(item=>item.name.indexOf(body.parem)!=-1)
    console.log('测试'+search)
    return builder(search)
}

Mock.mock(/\/api\/allUser\/list/,'post',allUserSearch)