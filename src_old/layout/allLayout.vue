// 总布局面板，分为了左边的竖条和右边界面区
<template>
  <div class="alloutter">
    <componentsLeft></componentsLeft>
    <layoutRight></layoutRight>
  </div>
</template>

<script>
import componentsLeft from "../components/componentsLeft";
import layoutRight from "./layoutRight";
export default {
  components: { componentsLeft, layoutRight },
};
</script>

<style>
/* ----公共样式开始---*/
/* 公用样式表 解决高度塌陷问题*/
.clearfix::before,
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}
/* 所有超链接的格式 */
a {
  text-decoration: none;
  font: 7px/1.5 Helvetica Neue, Helvetica, Arial, Microsoft Yahei,
    Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
  color: #b0b0b0;
}
/* ----公共样式结束---*/

/* ----总体布局开始---- */
html,
body {
  scrollbar-width: none;
}
/* 把滚动体全都搞掉 */
::-webkit-scrollbar {
  width: 0px;
  height: 1px;
  background-color: rgba(234, 232, 231);
  border: none;
  margin-left: -5px;
}
/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  box-shadow: none;
  border-radius: 20px;
  border: none;
  background-color: rgb(245, 245, 245);
}
/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  border: none;
  box-shadow: inset 0 0 0px rgba(199, 162, 162, 0.5);
  background-color: rgba(207, 173, 173, 0.5);
}
.alloutter {
  width: 1500px;
  height: 685px;
  display: flex;
  flex-direction: row;
  min-height: 440px;
}

a,
abbr,
acronym,
address,
applet,
article,
aside,
audio,
b,
big,
blockquote,
body,
canvas,
caption,
center,
cite,
code,
dd,
del,
details,
dfn,
div,
dl,
dt,
em,
embed,
fieldset,
figcaption,
figure,
footer,
form,
h1,
h2,
h3,
h4,
h5,
h6,
header,
hgroup,
html,
i,
iframe,
img,
ins,
kbd,
label,
legend,
li,
mark,
menu,
nav,
object,
ol,
output,
p,
pre,
q,
ruby,
s,
samp,
section,
small,
span,
strike,
strong,
sub,
summary,
sup,
table,
tbody,
td,
tfoot,
th,
thead,
time,
tr,
tt,
u,
ul,
var,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:after,
blockquote:before,
q:after,
q:before {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:after,
blockquote:before,
q:after,
q:before {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  text-decoration: none;
  font: 7px/1.5 Helvetica Neue, Helvetica, Arial, Microsoft Yahei,
    Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
  color: #b0b0b0;
}

/* ----总体布局结束---- */
</style>

