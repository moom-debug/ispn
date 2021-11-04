//localStroage原对象对于数组对象支持的不是很好，建议用store包里的stroage
import storage from "store"
const localStroageMixin={
    methods: {
        send(){ //触发位置是writeSpan的回车时间或者发送按钮
          if(storage.get(this.id)!=null){        //当首页时没有点击好友时，避免输入，一般是在输入框按了回车键,这里可扩展功能与自己对话
            //重要的是存在storage里的是字符串数组，这样vue才可以列表渲染，concat是拼数组，强制打平
            storage.set(this.id,storage.get(this.id).concat([this.input]))  
            console.log(storage.get(this.id))
            //把更新的本地储存存到store仓库里，这样聊天面板才会更新，本来是没必要这样的,
            //但是recordSpan里的computed属性没法检测到storage的变化，所以利用仓库对于recordSpan的计算属性来实现实时更新
            this.$store.commit('localStroage/SETNEWLIST',storage.get(this.id)) 
            console.log(this.id)
            this.input="" 
          }
          else
            storage.set(this.id,[this.input])
        }
      },
    computed:{
        storag(){
            console.log('storage'+storage.get(this.id))
            return this.$store.state.localStroage.newList
        }
    },
}
export default localStroageMixin