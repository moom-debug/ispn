//为了把本人信息相关store操作集成在这里，所以设立了改Mixin文件
import { mapState,mapActions } from "vuex";
const myselfMixin={
    computed:{
        //调用位置为componentsLeft.vue和recordSpan.vue
        ...mapState('myself',['headImg','name'])
    },
    beforeCreate() {
        // mapActions('myself',['getMyself']) //这个语法糖是对象写法不能写到script里
        //触发的地方是左边个人栏componentsLfet.vue加载时，去后端获取到数据放到仓库里
        this.$store.dispatch('myself/getMyself')
    },
}

export default myselfMixin