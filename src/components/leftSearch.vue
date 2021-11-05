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
        <input
          class="sear_text"
          type="text"
          v-model="searname"
          placeholder="搜索"
          @keyup="search(searname)"
        />
      </div>
      <!-- 添加好友按钮 -->
      <div class="search_right">
        <div class="search_icon_right">
          <a href="javascript:;"
            ><span
              class="icon iconfont icon-jiahao"
              @click="dialogVisible = true"
            ></span
          ></a>
        </div>

        <!-- 以下部分为魔改element组件部分，add开头的类名都是新加的样式可以在本组件找到css，否则css在其他组件.vue的style部分基本实现了响应式-->
        <!-- 添加好友框 -->
        <el-dialog title="添加好友" :visible.sync="dialogVisible" width="50%">
          <!-- 不瞒你说，好友搜索部分搜索框直接拿过来改了样式 -->
          <div class="search_left addsearch_left">
            <div class="search_icon_left addsearch_icon_left">
              <span class="icon iconfont icon-sousuo"></span>
            </div>
            <input
              class="sear_text addsear_text"
              type="text"
              v-model="searname"
              placeholder="搜索用户名"
              @keyup="search(searname)"
            />
          </div>
          <div class="left_firendList addleft_firendList">
            <ul class="firend_ul addleft_firendList">
              <!-- 每个li都是一个区域 -->
              <li class="friend_li addfriend_li">
                <a href="javascript:;">
                  <div class="li_outter" @click="addfri">
                    <!-- 个人头像 -->
                    <div class="li_left">
                      <img src="../assets/img/headimg.jpg" alt="" />
                    </div>
                    <div class="li_right">
                      <!-- 名字与最后的聊天记录 -->
                      <div class="li_text">
                        <div class="liname">mo_om</div>
                      </div>
                      <!-- 时间 -->
                      <div class="litime">
                        <div class="li_time addli_time">添加好友</div>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li class="friend_li addfriend_li">
                <a href="javascript:;">
                  <div class="li_outter" @click="addfri">
                    <!-- 个人头像 -->
                    <div class="li_left">
                      <img src="../assets/img/headimg.jpg" alt="" />
                    </div>
                    <div class="li_right">
                      <!-- 名字与最后的聊天记录 -->
                      <div class="li_text">
                        <div class="liname">mo_om</div>
                      </div>
                      <!-- 时间 -->
                      <div class="litime">
                        <div class="li_time addli_time">添加好友</div>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li class="friend_li addfriend_li">
                <a href="javascript:;">
                  <div class="li_outter" @click="addfri">
                    <!-- 个人头像 -->
                    <div class="li_left">
                      <img src="../assets/img/headimg.jpg" alt="" />
                    </div>
                    <div class="li_right">
                      <!-- 名字与最后的聊天记录 -->
                      <div class="li_text">
                        <div class="liname">mo_om</div>
                      </div>
                      <!-- 时间 -->
                      <div class="litime">
                        <div class="li_time addli_time">添加好友</div>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li class="friend_li addfriend_li">
                <a href="javascript:;">
                  <div class="li_outter" @click="addfri">
                    <!-- 个人头像 -->
                    <div class="li_left">
                      <img src="../assets/img/headimg.jpg" alt="" />
                    </div>
                    <div class="li_right">
                      <!-- 名字与最后的聊天记录 -->
                      <div class="li_text">
                        <div class="liname">mo_om</div>
                      </div>
                      <!-- 时间 -->
                      <div class="litime">
                        <div class="li_time addli_time">添加好友</div>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false"
              >确 定</el-button
            >
          </span>
        </el-dialog>
        <!-- 好友验证消息框 -->
        <el-dialog
          title="验证信息"
          :visible.sync="innerdialogVisible"
          width="30%"
        >
          <div>请输入好友验证消息</div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            class="textwrite addtextwrite"
          ></textarea>
          <span slot="footer" class="dialog-footer">
            <el-button @click="innerdialogVisible = false">取 消</el-button>
            <el-button
              type="primary"
              @click="
                innerdialogVisible = false;
                messag();
              "
              >确 定</el-button
            >
          </span>
          <div class="innermargin">设置朋友权限</div>
          <el-radio-group v-model="radio">
            <el-radio-button
              label="聊天，朋友圈"
            ></el-radio-button>
            <el-radio-button
              label="仅聊天"
            ></el-radio-button>
          </el-radio-group>
          <div class="innermargin" v-show="radio=== '聊天，朋友圈'">
            更多权限细节
          </div>
          <div class="moreDetail" v-show="radio === '聊天，朋友圈'">
            <dir class="detail">
              <span class="detailspan">不让ta看</span>
              <el-switch
                v-model="value"
                active-color="rgb(17, 40, 53)"
                inactive-color="rgb(230, 230, 230)"
                active-value="100"
                inactive-value="0"
              >
              </el-switch>
            </dir>
            <dir class="detail">
              <span class="detailspan">不看ta</span>
              <el-switch
                v-model="value2"
                active-color="rgb(17, 40, 53)"
                inactive-color="rgb(230, 230, 230)"
                active-value="100"
                inactive-value="0"
              >
              </el-switch>
            </dir>
          </div>
        </el-dialog>
        <!-- 以上部分为魔改element组件部分，add开头的类名都是新加的样式可以在本组件找到css，否则css在其他组件.vue的style部分 -->

      </div>
    </div>
  </div>
</template>

<script>
//相关搜索操作封装到了仓库中
import userListMixin from "@/store/mixin/userListMixin";
export default {
  data() {
    return {
      searname: "", //暂时存取searname用v-model
      dialogVisible: true, //添加好友对话框
      innerdialogVisible: false,  //好友验证消息对话框
      radio: "聊天，朋友圈",  //好友权限单选框    
      value: "",        //不让他看选项
      value2: "",       //不看他选项
    };
  },
  methods: {
    addfri() {
      // 好友权限框弹出
      this.innerdialogVisible = true;
    },
    messag() {
      // 提示好友申请已发送
      this.$message({
          message: '好友申请已发送',
        });
    },
  },
  mixins: [userListMixin],

  //在userListMixin里调用了
  // methods:{
  //         // search(searname){
  //         //   this.$store.commit('userList/SETSEARNAME',searname)
  //         // }
  //         //调用位置为leftSearch.vue的keyUp事件
  //         ...mapMutations('userList',{search:'SETSEARNAME'})
  //       },
};
</script>

<style scoped>
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



/* ----------以下为element部分组件样式,add开头样式是原生自己写到,el开头都是element样式--------- */
/* 无法修改记得用穿透,再不行就用!important,或者看看能不能自己增加类 */
.search_right >>> .el-dialog {   
  border-radius: 20px;
  /* 因为有个最大的element.style压着所以这里只能!important */
}
/* 搜索部分 */
.addsearch_icon_left {
  left: 8px;
  top: -10px;
}
.addsear_text {
  width: 100%;
  margin: 0px auto;
  margin-top: -15px;
}
.addsear_text:focus {
  background-color: rgb(237, 236, 241);
}
.addsearch_left{
  width: 55%;
  margin: 0px auto;
}

/* 所有用户列表展示 */
.addli_time {
  color: rgb(53, 47, 47);
  font-family: "华文琥珀";
  font-weight: 100;
}
.addleft_firendList {
  width: 93%;
  height: 400px;
  margin: 20px auto;
  
}
.addfriend_li {
  float: left;
  clear: none;
  margin: 30px 25px 0px 25px;
}

/* 验证消息框 */
.addtextwrite {
  border: 1px solid rgb(190, 189, 189);
  background-color: rgb(250, 250, 250);
  margin-top: 5px;
  border-radius: 10px;
  padding-left: 5px;
}
.addtextwrite:focus {
  border: 1px solid rgb(216, 216, 216);
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
}

/* 单选框样式element */
.is-active {
  width: 100%;
}
.el-radio-button__inner,
.el-radio-group {
  display: inline-block;
  line-height: 1;
  vertical-align: middle;
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 10px auto;
}
.el-radio-button:last-child .el-radio-button__inner {
  border-radius: 0 4px 4px 0;
  width: 100%;
}
.el-radio-button {
  width: 40%;
}
.el-radio-button >>> .el-radio-button__inner {
  width: 100%;
  border-radius: 20px !important;
  border: 1px solid rgb(190, 189, 189) !important;
}
.el-radio-button
  >>> .el-radio-button__orig-radio:checked
  + .el-radio-button__inner {
  color: #fff;
  background-color: rgb(17, 40, 53) !important;
  border-color: rgb(17, 40, 53) !important;
  box-shadow: none !important;
}
/* 为了实现响应式 */
.el-radio-button >>> .el-radio-button__inner {
  white-space: normal;
}
.el-radio-button >>> .el-radio-button__inner:hover {
  color: rgb(17, 40, 53);
}

/* 所有部分都加个margin-top */
.innermargin {
  margin-top: 40px;
}

/* 按钮样式 */
.el-button--primary {
  background-color: rgb(22, 44, 56);
  border: rgb(23, 46, 59);
}
.el-button >>> .el-button--primary:focus,
.el-button--primary:hover {
  background-color: rgb(17, 40, 53) !important;
}

.el-button:focus,
.el-button:hover {
  color: rgb(255, 255, 255);
  border-color: rgb(105, 112, 116);
  background-color: rgb(122, 124, 124);
}

/* 更多权限部分 */
.moreDetail {
  margin: 10px auto;
  width: 78%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.detail {
  width: 32%;
  padding-left: 0px;
}
.detailspan {
  margin-right: 5px;
}
</style>


<style>
/* 你还可以再写一个style没有scoped的以实现样式修改但是会造成全局污染最好别用这招 */
/* .el-message-box{
  
} */
/* .message-logout {
  border-radius: 15px !important;
} */
</style>