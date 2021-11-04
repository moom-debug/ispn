//为当前聊天窗口提供数据
import { getCurrentRecord } from "@/api/listUser"

const currentRecord={
    //只有打开了命名空间才可以使用...mapState的语法糖
    namespaced: true,//只有这里加了这个在...mapState()才可以用
    state:{
        id:'',
        anotherName:'', //聊天窗口的对方名字
        anotherHeadImg:'', //聊天窗口对方的名字
        record:'', //聊天记录
        lastWrite:''  //自己的输入还未发送时
    },
    mutations:{
        SETNAME(state,value){  //最后同步向state中注册
            state.anotherName=value
        },
        SETANOTHERHEADIMG(state,value){
            state.anotherHeadImg=value
        },
        SETRECORD(state,value){
            state.record=value
        },
        SETID(state,value){
            state.id=value
        }
    },
    actions:{
        //当点击不同人物的小方框时记录id，向后端请求和对方的name,和聊天记录
        SetRecordSpan({commit},id){  //这里的{commit}是context的解构赋值获得commit，调用位置为leftFriendList.vue的click事件
            return new Promise((resolve,reject)=>{
                getCurrentRecord({id}).then(response=>{  //这里的id要包装到对象中,相当于{id:id}
                    const result=response.data.result  //封装到data里了
                    console.log(result)
                    commit('SETNAME',result.name)   //获取后到mutations中向state中注册
                    commit('SETRECORD',result.record)
                    commit('SETANOTHERHEADIMG',result.headimg)
                    commit('SETID',id)  //这里设置id的原因是输入框需要知道现在在跟谁对话，好利用此id上传新发送的内容
                    resolve('SETID')
                }).catch(error=>{
                    reject()
                    })
            })
        }
    }
}
//向外暴露
export default currentRecord