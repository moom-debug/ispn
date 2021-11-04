//聊天面板组件
<template>
  <div class="recordpan">
    <ul class="record_ul" ref="scrollBottom">
      <li class="recordli_left" v-for="item in record" :key="item.id">
        <div class="everycord">
          <!-- 类名的数组写法，确定类的个数，但不确定名字时可以像我这样写 -->
          <div :class="['record_img', item.direction]">
            <!-- 类名的判别式，direction是否为left来决定显示哪张照片 -->
            <img
              :src="item.direction == 'left' ? anotherHeadImg : headImg"
              alt=""
            />
          </div>
          <div :class="['record', item.direction]">
            <div :class="['recordname', item.direction]">
              {{ item.direction == "left" ? anotherName : name }}
            </div>
            <!-- 类名的对象写法，不确定个数，也不确定有没有时可以这样写，[item.direction]是可计算属性，键是变量时要写成可计算属性，es6 -->
            <div
              :class="{
                recordtext: true,
                [item.direction]: true,
                green: item.direction == 'right',
              }"
            >
              {{ item.text }}
            </div>
          </div>
        </div>
      </li>
      <li v-for="(item,index) in storag" :key="index+100" class="recordli_left">
        <div class="everycord">
          <div class="record_img right">
            <img :src="headImg" alt="" />
          </div>
          <div class="record right">
            <div class="recordname right">{{name}}</div>
            <div class="recordtext right green">
              {{item}}
            </div>
          </div>
        </div>
      </li>
      
    </ul>
  </div>
</template>

<script>
// 相关数据获取操作封装到了仓库中，因为这里有两边的name和img，所以特别注意mixin时属性名千万不要相同
// import storage from 'store'
import currentRecordMixin from "@/store/mixin/currentRecordMixin";
import myselfMixin from "@/store/mixin/myselfMixin";
import localStroageMixin from '@/store/mixin/localStroageMixin'
export default {
  mixins: [currentRecordMixin, myselfMixin,localStroageMixin],
  updated(){
    this.$refs.scrollBottom.scrollTop=this.$refs.scrollBottom.scrollHeight  //当你输入后滚动条一直在最下面
  },
  //写到了currentRecordMixin里了
  // computed:{
  //       //computed选项注册了currentRecord的name和record，调用位置为recordSpan.vue和recordName.vue
  //       ...mapState("currentRecord",["anotherName",'record','anotherHeadImg','id'])  
  //   },
  
  //写到了localStroageMixin里了
  // computed:{
  //       storag(){
  //           console.log('storage'+storage.get(this.id))
  //           return this.$store.state.localStroage.newList
  //       }
  //   },
  
};
</script>

<style>
.recordpan {
  background-color: rgb(245, 245, 245);
  height: 505px;
  width: 1110px;
  border-radius: 20px;
  margin: 5px;

  padding: 15px 0px 0px;
}
.record_ul {
  height: 95%;
  overflow: auto;
}

.record_ul::-webkit-scrollbar {
  width: 4px;
  height: 6px;
  background-color: rgb(129, 128, 127);
  border-radius: 50%;
}

.recordpan {
  background-color: rgb(245, 245, 245);
  height: 505px;
  width: 1110px;
  border-radius: 20px;
  margin: 5px;
}
.recordli_left {
  width: 100%;
  height: 80px;

  content: "";
  display: table;
  clear: both;
}
.recordli_right {
  width: 100%;
  height: 80px;

  content: "";
  display: table;
  clear: both;
}
.everycord {
  width: 93%;
  margin: 20px auto;
}
.record_img {
  margin: 10px;
}
.record_img img {
  width: 50px;
  height: 50px;
  border-radius: 10px;
}
.record {
  padding-top: 10px;
}
.recordname {
  margin-bottom: 5px;
  font-size: 11px;
  content: "";
}
.recordtext {
  max-width: 400px;
  /* border: 1px solid rgb(235, 234, 240); */
  background-color: rgb(235, 234, 240);
  border-radius: 15px;
  padding: 10px;
  content: "";
  display: table;
  clear: both;
  word-break: break-all;
}
.left {
  float: left;
}
.right {
  float: right;
}
.green {
  background-color: rgb(17, 40, 53, 0.9);
  color: rgb(225, 228, 230);
}
</style>