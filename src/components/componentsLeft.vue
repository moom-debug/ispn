//右边个人信息竖条
<template>
  <div class="layout_left">
    <!-- 左侧栏上部 -->
    <div class="layleft_top">
      <a href="javascript:;"
        ><img class="headimg" :src="headImg" alt="头像"
      /></a>
      <a href="javascript:;"
        ><span class="icon iconfont icon-yonghu layleft_top"></span
      ></a>
      <a href="javascript:;"
        ><span class="icon iconfont icon-pengyouquan layleft_top"></span
      ></a>
    </div>
    <!-- 左侧栏下部 -->
    <div class="layleft_bottom">
      <a href="javascript:;"
        ><span class="icon iconfont icon-shezhi layleft_top"></span
      ></a>
    </div>
  </div>
</template>

<script>
//相关自己的头像操作已经封装到了仓库里
import myselfMixin from '@/store/mixin/myselfMixin'
export default {
  mixins:[myselfMixin],

  //在myselfMixin里调用了
  // computed:{
  //       //调用位置为componentsLeft.vue和recordSpan.vue
  //       ...mapState('myself',['headImg','name'])
  //   },

  beforeCreate() {
        // mapActions('myself',['getMyself']) //这个语法糖是对象写法不能写到script里
        //触发的地方是左边个人栏componentsLfet.vue加载时，去后端获取到数据放到仓库里
        this.$store.dispatch('myself/getMyself')
        
  },
};
</script>

<style>
@import "../assets/iconfont/iconfont.css";
/* ----左侧个人头像，设置等栏开始---- */
.layout_left {
  width: 88px;
  background-color: rgb(17, 40, 53);
  height: 95.5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0px;
  border-radius: 20px;
  margin-top: 10px;
  margin-left: 10px;
}
/* 左侧栏上部 */
.layleft_top {
  display: flex;
  flex-direction: column;
  height: 50px;
  justify-content: space-between;
  align-items: center;
}
/* 头像设置 */
.headimg {
  width: 48px;
  overflow: hidden;
  height: 48px;
  border-radius: 13px;
}
.layleft_top {
  font-size: 24px;
  margin-top: 20px;
}
/* ----左侧个人头像，设置等栏结束---- */
</style>