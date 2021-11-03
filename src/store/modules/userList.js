
import headimg from '@/assets/img/headimg.jpg'
const userList={
    namespaced: true,//只有这里加了这个在...mapState()才可以用
    state:{
        userList:[
            {headimg:headimg,name:'东哥',lastcord:'还会2321312322312321',time:"9:00"},
            {headimg:headimg,name:'哥',lastcord:'22213123213',time:"9:01"},
            {headimg:headimg,name:'东',lastcord:'还会2',time:"9:03"},
            {headimg:headimg,name:'东2哥',lastcord:'2还会',time:"9:04"},
        ],
        searName:''
    },
    mutations:{
        SETSEARNAME(state,value){
            state.searName=value;
        }
    },
    actions:{

    },
    getters:{
        userList:(state) => {
            return state.userList.filter(item=>item.name.indexOf(state.searName)!=-1)
        }
    }
    
}
export default userList