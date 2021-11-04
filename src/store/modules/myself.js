import 'GetMyself'
const myself={
    state:{
        headimg:'',
        name:''
    },
    mutations:{
        SETNAME(state,value){
            state.name=value
        },
        SETHEADIMG(state,value){
            state.headimg=value
        }
    },
    actions:{
        GetMyself({commit}){

        }
    }
}
