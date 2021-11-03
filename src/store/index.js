import Vue from 'vue'
import Vuex from 'vuex'
import userList from './modules/userList'
import currentRecord from './modules/currentRecord'
Vue.use(Vuex);
export default new Vuex.Store({
    
    modules:{
        userList,
        currentRecord
    },
    state:{},
    actions:{},
    mutations:{}
})