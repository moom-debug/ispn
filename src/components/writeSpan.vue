// 打字面板组件
<template>
  <div class="writepan">
    <!-- 图标层 -->
    <div class="icons">
      <!-- 左侧图标 -->
      <div class="icons_left">
        <a href="javascript:;"
          ><span class="icon iconfont icon-xiaolian"></span
        ></a>
        <a href="javascript:;"
          ><span class="icon iconfont icon-wenjianjia"></span
        ></a>
      </div>
      <!-- 右侧图标 -->
      <div class="icons_right">
        <a href="javascript:;"
          ><span class="icon iconfont icon-yuyin"></span
        ></a>
        <a href="javascript:;"
          ><span class="icon iconfont icon-shipinbofang"></span
        ></a>
      </div>
    </div>
    <!-- 真的写的面板 -->
    <div class="wirte">
      <textarea name="" id="" cols="30" rows="10" class="textwrite">
还行还行</textarea
      >
      <!-- 发送按钮 -->
      <a href="javascript:;">
        <div class="btn">发送</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* 书写的方框 */
.writepan {
  height: 103px;
  width: 1100px;
  border-radius: 20px;
  border: 3px solid rgb(245, 245, 245);
  border-right: none;
  border-bottom: none;

  margin: 5px;
}
.icons {
  width: 95%;
  margin: 5px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.icons_left,
.icons_right {
  width: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
/* textarea */
.textwrite {
  width: 95%;
  height: 53px;
  border: none;
  resize: none;
  cursor: pointer;
  padding-left: 30px;
  padding-top: 5px;
  font-size: 16px;
  scrollbar-width: none;
  word-break: break-all;
}
.textwrite:focus {
  border: none;
  resize: none;
  cursor: pointer;
  outline: none;
  font-size: 16px;
}
/* 发送按钮 */
.btn {
  float: right;
  border: 1px solid rgb(245, 245, 245);
  background-color: rgb(245, 245, 245);
  border-radius: 10px;
  font-size: 16px;
  height: 25px;
  width: 50px;
  text-align: center;
}
.btn:hover {
  background-color: rgb(221, 219, 219);
}
</style>