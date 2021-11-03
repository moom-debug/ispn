import {mapGetters} from 'vuex'
const userListMixin={
        computed: {
          ...mapGetters('userList',['userList']),
          // userList:{
          //   this.$store.getters['userList/userList']
          // }
          
        },    
}

export default userListMixin;


    
