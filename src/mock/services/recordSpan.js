import Mock from 'mockjs'
import { builder,getBody } from '../util'

const currentRecord=(options)=>{
    const body=getBody(options)
    if(body.id==1){
        return builder({
            name:'东哥',
            record:[
                {id:1,text:'你说我是谁',direction:'left'},
                {id:2,text:'我咋知道',direction:'right'},
                {id:3,text:'hhhhh',direction:'left'},
                {id:4,text:'那你说我是谁',direction:'right'},
            ]
        })
    }
    else if(body.id==2){
        return builder({
            name:'哥',
            record:[
                {id:1,text:'nimofei是那个谁',direction:'left'},
                {id:2,text:'那个。。。',direction:'left'},
                {id:3,text:'忘了',direction:'left'},
                {id:4,text:'。。。',direction:'right'},
            ]
        })
    }
    else if(body.id==3){
        return builder({
            name:'东',
            record:[
                {id:1,text:'你会写前端吗',direction:'right'},
                {id:2,text:'有人吗',direction:'right'},
                {id:3,text:'不会吧',direction:'right'},
                {id:4,text:'你的意思是',direction:'right'},
            ]
        })
    }
    else if(body.id==4){
        return builder({
            name:'东2哥',
            record:[
                {id:1,text:'hhhh',direction:'left'},
                {id:2,text:'hhhh',direction:'right'},
                {id:3,text:'hhhhh',direction:'left'},
                {id:4,text:'hhhhhh',direction:'right'},
            ]
        })
    }


}
Mock.mock(/\/api\/record\/current/,'post',currentRecord)