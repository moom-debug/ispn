//聊天面板组件
<template>
  <div class="recordpan">
    <ul class="record_ul">
      <li class="recordli_left">
        <div class="everycord">
          <div class="record_img right">
            <img src="../assets/img/headimg.jpg" alt="" />
          </div>
          <div class="record right">
            <div class="recordname right">mo_om</div>
            <div class="recordtext right green">
              你好啊，我开发了一个网站！hhhhhhh
            </div>
          </div>
        </div>
      </li>
      <li class="recordli_left">
        <div class="everycord">
          <div class="record_img right">
            <img src="../assets/img/headimg.jpg" alt="" />
          </div>
          <div class="record right">
            <div class="recordname right">mo_om</div>
            <div class="recordtext right green">
              你好啊，我开发了一个网站！hhhhhhh
            </div>
          </div>
        </div>
      </li>
      <li class="recordli_left">
        <div class="everycord">
          <div class="record_img right">
            <img src="../assets/img/headimg.jpg" alt="" />
          </div>
          <div class="record right">
            <div class="recordname right">mo_om</div>
            <div class="recordtext right green">
              你好啊，我开发了一个网站！hhhhhhh
            </div>
          </div>
        </div>
      </li>
      <li class="recordli_left">
        <div class="everycord">
          <div class="record_img right">
            <img src="../assets/img/headimg.jpg" alt="" />
          </div>
          <div class="record right">
            <div class="recordname right">mo_om</div>
            <div class="recordtext right green">
              你好啊，我开发了一个网站！hhhhhhh
            </div>
          </div>
        </div>
      </li>
      <li class="recordli_left">
        <div class="everycord">
          <div class="record_img right">
            <img src="../assets/img/headimg.jpg" alt="" />
          </div>
          <div class="record right">
            <div class="recordname right">mo_om</div>
            <div class="recordtext right green">
              你好啊，我开发了一个网站！hhhhhhh
            </div>
          </div>
        </div>
      </li>
      <li class="recordli_left">
        <div class="everycord">
          <div class="record_img right">
            <img src="../assets/img/headimg.jpg" alt="" />
          </div>
          <div class="record right">
            <div class="recordname right">mo_om</div>
            <div class="recordtext right green">
              你好啊，我开发了一个网站！hhhhhhh
            </div>
          </div>
        </div>
      </li>
      <li class="recordli_left">
        <div class="everycord">
          <div class="record_img right">
            <img src="../assets/img/headimg.jpg" alt="" />
          </div>
          <div class="record right">
            <div class="recordname right">mo_om</div>
            <div class="recordtext right green">
              你好啊，我开发了一个网站！hhhhhhh
            </div>
          </div>
        </div>
      </li>
      <li class="recordli_right">
        <div class="everycord">
          <div class="record_img left">
            <img src="../assets/img/headimg.jpg" alt="" />
          </div>
          <div class="record left">
            <div class="recordname">mo_om</div>
            <div class="recordtext">牛啊！</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
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
.recordname {
  margin-bottom: 5px;
  font-size: 14px;
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