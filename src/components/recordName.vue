// 聊天区顶部名字组件，其实没什么用，但是...可以扩展
<template>
  <div class="right_name">
    <div class="name">mo_om</div>
    <!-- 更多 -->
    <a href="javascript:;"><div class="more">...</div></a>
  </div>
</template>

<script>
export default {};
</script>

<style>
.right_name {
  background-color: rgb(245, 245, 245);
  border: 1px solid rgb(231, 231, 231);
  border-right: 0px;
  height: 20px;
  display: flex;
  flex-direction: row;
  width: 1030px;
  padding: 20px 40px;
  justify-content: space-between;
  align-items: center;
  border-radius: 18px;
  margin-left: 5px;
}
.name {
  font-size: 24px;
  font-weight: normal;
}
.more {
  font-size: 24px;
  font-weight: normal;
  padding-bottom: 10px;
}
</style>