import {listUser} from '@/api/listUser'

const userList={
    namespaced: true,//只有这里加了这个在...mapState()才可以用
    state:{
        userList:[],
        searName:''
    },
    mutations:{
        SETSEARNAME(state,value){
            state.searName=value;
        },
        SETUSERLIST(state,value){
            state.userList=value;
            console.log(state.userList)
        }
    },
    actions:{
        GetUserList({commit}){
            return new Promise((resolve,reject)=>{
                listUser().then(response=>{
                    const result=response.data.result
                    console.log(result)
                    commit('SETUSERLIST',result)
                    resolve(response)
                }).catch(error=>{
                    reject(error)
                })
            })
        }
    },
    getters:{
        userList:(state) => {
            return state.userList.filter(item=>item.name.indexOf(state.searName)!=-1)
        }
    }
    
}
export default userList