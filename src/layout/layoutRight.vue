//右边界面区，分为了左边搜索框和右边聊天区
<template>
  <div class="layout_right">
    <div class="layrig_left">
      <leftSearch></leftSearch>
      <leftFirendList></leftFirendList>
    </div>
    <div class="layrig_right">
      <recordName></recordName>
      <recordSpan></recordSpan>
      <writeSpan></writeSpan>
    </div>
  </div>
</template>

<script>
import leftSearch from "../components/leftSearch";
import leftFirendList from "../components/leftFirendList";
import recordName from "../components/recordName";
import recordSpan from "../components/recordSpan";
import writeSpan from "../components/writeSpan";
export default {
  components: {
    leftSearch,
    leftFirendList,
    recordName,
    recordSpan,
    writeSpan,
  },
};
</script>

<style>
.layout_right {
  min-width: 500px;
  height: 90%;
  display: flex;
  flex-direction: row;
  margin-top: 8px;
}
.layrig_left {
  width: 280px;
  min-width: 150px;
}
.layrig_right {
  width: 1080px;
  height: 745px;
  margin-top: 3px;
}
</style>