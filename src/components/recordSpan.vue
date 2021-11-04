//聊天面板组件
<template>
  <div class="recordpan">
    <ul class="record_ul">
      <li class="recordli_left" v-for="item in record" :key="item.id">
        <div class="everycord">
          <div :class="['record_img', item.direction]">
            <img src="../assets/img/headimg.jpg" alt="" />
          </div>
          <div :class="['record',item.direction]">
            <div :class="['recordname',item.direction]">{{item.direction=='left'?name:'懂'}}</div>
            <div :class="{recordtext:true,[item.direction]:true, green:item.direction=='right'}">
              {{item.text}}
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// 相关数据获取操作封装到了仓库中
import currentRecordMixin from '@/store/currentRecordMixin'
export default {
  data:{
  },
  mixins:[currentRecordMixin]
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
.record{
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