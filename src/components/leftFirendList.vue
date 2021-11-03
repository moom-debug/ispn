//朋友列表
<template>
  <div class="left_firendList">
    <ul class="firend_ul">
      <!-- 每个li都是一个区域 -->
      <li class="friend_li" v-for="item in userList" :key="item.index">
        <a href="javascript:;">
          <div class="li_outter">
            <!-- 个人头像 -->
            <div class="li_left">
              <img :src="item.headimg" alt="" />
            </div>
            <div class="li_right">
              <!-- 名字与最后的聊天记录 -->
              <div class="li_text">
                <div class="liname">{{item.name}}</div>
                <div class="lirecord">{{item.lastcord}}</div>
              </div>
              <!-- 时间 -->
              <div class="litime">
                <div class="li_time">{{item.time}}</div>
              </div>
            </div>
          </div>
        </a>
      </li>
    </ul>

  </div>
</template>

<script>
import userListMixin from '@/store/userListMixin'

export default {
  data(){
    return{
      
    }
  },
  mixins:[userListMixin],
  beforeCreate(){
    this.$store.dispatch('userList/GetUserList')
  }
};
</script>

<style>
@import "$/assets/iconfont/iconfont.css";
/* ---朋友列表栏列表开始--- */
/* 朋友列表 */
.left_firendList {
  overflow: auto;
  height: 650px;
  scrollbar-width: none;
}
/* 每个li方块 */
.friend_li {
  height: 60px;
  width: 255px;
  background-color: rgb(235, 234, 240);
  content: "";
  display: table;
  clear: both;
  border-radius: 18px;
  margin: 4px auto 0px;
}
/* li方框被悬浮时 */
.friend_li:hover {
  background-color: rgb(220, 219, 224);
}
/* 让a标签撑满 */
.friend_li a {
  width: 100%;
  height: 60px;
  display: block;
}
/* 方框里面再弄个方框为了flex布局 */
.li_outter {
  height: 100%;
  width: 90%;
  margin: 8px auto 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
/* 方框里的方框左边即头像 */
.li_left {
  height: 45px;
  width: 45px;

  background-size: 45px;
  border-radius: 13px;
}
.li_left img {
  height: 45px;
  width: 45px;
  border-radius: 13px;
}
/* 右边 */
.li_right {
  display: flex;
  flex-direction: row;
  margin-left: 8px;
  width: 80%;
  align-items: center;
  justify-content: space-between;
}
/* 名字 */
.liname {
  font-size: 19px;
  font-weight: 400;
  color: black;
}
/* 最后一条聊天记录 */
.lirecord {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 130px;
  font-size: 12px;
}
/* 最后一条发送时间 */
.li_time {
  font-size: 15px;
}
/* ---朋友列表栏列表结束--- */
/* ----右侧朋友列表全部结束---- */
</style>