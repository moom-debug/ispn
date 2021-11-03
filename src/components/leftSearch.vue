//搜索组件
<template>
  <div class="left_search">
    <!-- 搜索框 -->
    <div class="search_outter">
      <!-- 搜索框本身 -->
      <div class="search_left">
        <div class="search_icon_left">
          <span class="icon iconfont icon-sousuo"></span>
        </div>
        <input class="sear_text" type="text" v-model="searname" placeholder="搜索" @keyup="search"/>
      </div>
      <!-- 添加好友按钮 -->
      <div class="search_right">
        <div class="search_icon_right">
          <a href="javascript:;"
            ><span class="icon iconfont icon-jiahao"></span
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      searname:''
    }
  },
  methods:{
    search(){
      this.$store.commit('userList/SETSEARNAME',this.searname)
    }
  }
};
</script>

<style>
@import "../assets/iconfont/iconfont.css";
/* --朋友列表栏搜索框开始-- */
.left_search {
  width: 270px;
  height: 60px;
  background-color: rgb(220, 219, 224);
  border-radius: 15px;
  margin: 3px 0px 3px 3px;
  content: "";
  display: table;
  clear: both;
}
/* 搜索框 */
.search_outter {
  margin: 15px auto 0px;
  width: 215px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
/* 搜索框本身 */
.search_left {
  display: flex;
  align-items: center;
  position: relative;
}
/* 搜索图标 */
.search_icon_left {
  position: absolute;
  left: 5px;
}
/* 搜索框 */
.sear_text {
  background-color: rgb(220, 219, 224);
  border: 1px solid rgb(219, 218, 218);
  border-radius: 8px;
  width: 145px;
  padding-left: 32px;
  height: 25px;
  font-size: 14px;
}
/* 搜索框被聚焦时 */
input:focus {
  outline: none;
  border: 1px solid #fff;
  background-color: rgb(248, 248, 248);
}
/* ---朋友列表栏搜索框结束--- */
</style>