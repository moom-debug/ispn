//为了把本人信息相关store操作集成在这里，所以设立了改Mixin文件
import { mapState,mapActions } from "vuex";
const myselfMixin={
    computed:{
        //调用位置为componentsLeft.vue和recordSpan.vue
        ...mapState('myself',['headImg','name'])
    },
    
}

export default myselfMixin