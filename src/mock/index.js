import {isIE} from "@/utils/util"
if(process.env.NODE_ENV !=='production'||process.env.VUE_APP_PREVIEW==='true'){
    if(isIE()){
        console.error("IE不能用mockjs")
    }
    const Mock=require('mockjs')
    require('./services/userList')
    require('./services/recordSpan')
    Mock.setup({
        timeout:0
    })
    console.log("mock已挂载")
}