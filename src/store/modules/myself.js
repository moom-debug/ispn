import {GetMyself} from '@/api/listUser'

const myself={
    namespaced:true,
    state:{
        headImg:null,  //headImg每个字母的大小写一定要搞清楚
        name:'',
        token:0,
    },
    mutations:{
        SETNAME(state,value){
            state.name=value
        },
        SETHEADIMG(state,value){
            state.headImg=value
        },
        SETTOKEN(state,value){
            state.token=value
        }
    },
    actions:{
        //触发的地方是左边个人栏加载时，去后端获取到数据放到仓库里
        getMyself({commit}){
            return new Promise((resolve,reject)=>{
                GetMyself().then(response=>{
                    const result=response.data.result
                    commit('SETNAME',result.name)
                    commit('SETHEADIMG',result.headimg)
                    commit('SETTOKEN',result.token)
                    resolve()
                }).catch(error=>{
                    reject(error)
                })
            })
        }
    }
}
export default myself
