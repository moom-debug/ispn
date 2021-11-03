import { getCurrentRecord } from "@/api/listUser"
const currentRecord={
    namespaced: true,//只有这里加了这个在...mapState()才可以用
    state:{
        name:'',
        record:'',
        lastWrite:''
    },
    mutations:{
        SETNAME(state,value){
            state.name=value
        },
        SETRECORD(state,value){
            state.record=value
        }

    },
    actions:{
        SetRecordSpan({commit},id){
            return new Promise((resolve,reject)=>{
                getCurrentRecord({id}).then(response=>{
                    const result=response.data.result
                    console.log(result)
                    commit('SETNAME',result.name)
                    commit('SETRECORD',result.record)
                    resolve()
                }).catch(error=>{
                    reject()
                    })
            })
        }
    }
}

export default currentRecord