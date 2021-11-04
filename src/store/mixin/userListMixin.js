//为了把朋友列表与搜索的相关store操作集成在这里，所以设立了改Mixin文件
import {mapGetters,mapMutations} from 'vuex'
const userListMixin={
        computed: {
          ...mapGetters('userList',['userList']),//调用位置为leftFriendList.vue的列表渲染
          // userList:{
          //   this.$store.getters['userList/userList']
          // }
          
        },
        methods:{
          // search(searname){
          //   this.$store.commit('userList/SETSEARNAME',searname)
          // }
          //调用位置为leftSearch.vue的keyUp事件
          ...mapMutations('userList',{search:'SETSEARNAME'})
        },
        //在开始时就调用获取所有用户列表，调用位置为leftFriendList.vue
        beforeCreate(){
          this.$store.dispatch('userList/GetUserList')
        }
}
//切记暴露
export default userListMixin;


    
