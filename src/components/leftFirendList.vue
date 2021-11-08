//朋友列表
<template>
  <div class="left_firendList">
    <ul class="firend_ul">
      <!-- 每个li都是一个区域 -->
      <li
        class="friend_li"
        v-for="item in userList"
        :key="item.index"
        @click="changeRecordSpan(item.id)"
      >
        <a href="javascript:;">
          <div class="li_outter">
            <!-- 个人头像 -->
            <div class="li_left">
              <img :src="item.headimg" alt="" />
            </div>
            <div class="li_right">
              <!-- 名字与最后的聊天记录 -->
              <div class="li_text">
                <div class="liname">{{ item.name }}</div>
                <div class="lirecord">{{ item.lastcord }}</div>
              </div>
              <!-- 时间 -->
              <div class="litime">
                <div class="li_time">{{ item.time }}</div>
              </div>
            </div>
          </div>
        </a>
      </li>
    </ul>
    <el-dialog
      :title="`${friName}的好友申请`"
      :visible.sync="innerdialogVisible"
      width="30%"
    >
      <div>好友验证消息</div>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        class="textwrite addtextwrite"
        v-bind:value="whoIAm"
        disabled
      ></textarea>
      <span slot="footer" class="dialog-footer">
        <el-button
          @click="
            innerdialogVisible = false;
            refuse();
          "
          >拒绝</el-button
        >
        <el-button
          type="primary"
          @click="
            innerdialogVisible = false;
            agree();
          "
          >接 受</el-button
        >
      </span>
      <div class="innermargin">设置朋友权限</div>
      <el-radio-group v-model="radio">
        <el-radio-button label="聊天，朋友圈"></el-radio-button>
        <el-radio-button label="仅聊天"></el-radio-button>
      </el-radio-group>
      <div class="innermargin" v-show="radio === '聊天，朋友圈'">
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
  </div>
  
</template>

<script>
//相关显示用户列表和click封装到了仓库中
import userListMixin from "@/store/mixin/userListMixin";
import currentRecordMixin from "@/store/mixin/currentRecordMixin";
import myselfMixin from "@/store/mixin/myselfMixin";
import { incomingFriend, AgreeOrNo } from "@/api/listUser";
import { list } from "@/mock/services/userList"; //把mock数据的好友列表的list拿出来临时增加好友
import headimg from "@/assets/img/headimg.jpg";
export default {
  data() {
    return {
      innerdialogVisible: false, //好友验证消息对话框
      radio: "聊天，朋友圈", //好友权限单选框
      value: false, //不让他看选项
      value2: false, //不看他选项
      whoIAm: "", //验证消息,
      friName: "",
      friId: 0,
      jurisdiction: "",
    };
  },
  mixins: [userListMixin, currentRecordMixin, myselfMixin],
  //在开始时就调用获取所有用户列表，调用位置为leftFriendList.vue
  beforeCreate() {
    this.$store.dispatch("userList/GetUserList");
  },
  mounted() {
    incomingFriend()
      .then((response) => {
        const result = response.data.result;
        result.forEach((i) => {     //有可能有很多人加好友，数组遍历每一个都设置
          setTimeout(() => {
            this.$notify({
              title: `${i.name}的好友申请`,
              message: "<a href='javascript:;'>申请添加好友，点击查看详情</a>",
              position: "top-left",
              dangerouslyUseHTMLString: true,
              showClose: false,
              offset: 100,
              duration: 0,
              // 这个地方有必要好好说说，因为本来都放在onClick里面的，但是后面发现如果想要close()方法那就this就必须不能用箭头函数
              //因为箭头函数的this指向是现在这个组件，但是this.innerdialogVisible必须要用箭头函数改变指向才能拿得到
              //后面有尝试用this.$notify.close()但是它要id，因为里面有很多notify组件，拿不到id，所以最后用了下面的方案
              //以后有空一定要尝试解决一下
              onClick() {
                this.close();
              },
              onClose: () => {
                this.innerdialogVisible = true;
                this.whoIAm = i.text;    //会被close证明点击了要打开它，暂时把data的数据设置为它后面提交时好用
                this.friName = i.name;
                this.friId = i.id;
              },
            });
          }, 5000);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    //同意了好友申请
    agree() {  //判断到底给了哪种权限
      if (this.radio == "聊天，朋友圈") {
        if (this.value == true && this.value2 == false) {
          this.jurisdiction = "notLetWatch";
        } else if (this.value2 == true && this.value == false) {
          this.jurisdiction = "notWatch";
        } else if (this.value2 == true && this.value == true) {
          this.jurisdiction = "chatOnly";
        } else {
          this.jurisdiction = "fully";
        }
      } else {
        this.jurisdiction = "chatOnly";
      }

      AgreeOrNo({ //把数据发送到数据库
        yesOrNo: true,
        token: this.token,
        taId: this.friId,
        taName: this.friName,
        jurisdiction: this.jurisdiction,
      })
        .then((response) => {
          const result = response.data.result;
          this.$notify({
            title: "新好友",
            message: `${result.name}是你的好友了，快去看看吧！`,
            type: "success",
            // position: 'top-left'
          });
          //模拟数据库朋友列表添加该位好友
          list.push({
            id: result.id,
            headimg: headimg,
            name: result.name,
            lastcord: "我是新好友",
            time: "9:05",
          });
          // 模拟websocket重新更新好友列表
          setTimeout(() => {
            this.$store.dispatch("userList/GetUserList");
          }, 1000);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // 拒绝好友申请
    refuse() {
      AgreeOrNo({
        yesOrNo: false,
        token: this.token,
        taId: this.friId,
        taName: this.friName,
      })
        .then((response) => {})
        .catch((error) => {
          console.log(error);
        });
    },
  },

  // 在currentRecordMixin里调用了
  //  methods:{
  //       // changeRecordSpan(id){
  //       //   this.$store.dispatch("currentRecord/SetRecordSpan",id);
  //       // }
  //       //点击不同人物跳转到不同聊天窗口，调用位置为leftFirendList.vue的click事件
  //       ...mapActions('currentRecord',{changeRecordSpan:'SetRecordSpan'})
  //   }

  //在userListMixin里调用了
  // computed: {
  //         ...mapGetters('userList',['userList']),//调用位置为leftFriendList.vue的列表渲染
  //         // userList:{
  //         //   this.$store.getters['userList/userList']
  //         // }

  //       },
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

<style scoped>
/* 因为上面的样式有些其他组件也要用，但是下面的不能污染其他地方，所以这样写 */
/* 以下为element部分，从leftSearch组件里拿过来的 */
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
</style>