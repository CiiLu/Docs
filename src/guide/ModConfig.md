---
icon: cloud
title: 模组配置文件损坏 引导页
---

<!--suppress HtmlUnknownTarget -->
<script setup>import {onMounted, ref} from "vue"; 

const file = ref('');
const server = ref(false);
const e = ref('');
function getUrlParams() {
  const params = new URLSearchParams(window.location.search);
  file.value = params.get('file') || '';
  server.value = params.get('server') === 'true';
if(server.value){
    e.value="服务端配置文件损坏（第一种）";
}else {
    e.value="客户端配置文件损坏（第二种）";
}
}

onMounted(() => {
  getUrlParams();
});
</script>
你的游戏因为 有模组的配置文件损坏 崩溃。
打开 **版本管理** 页面，
<img src="/assets/image/版本管理.png">

之后根据你的情况选择下面二种中的一个
::: tip
据现有信息，你应该为 **{{e}}** 情况
:::
::: details 服务端配置损坏
点击左侧的 **存档/数据包** 按钮，

然后点击 **你的存档旁边的文件夹** 按钮

<img src="/assets/image/打开存档文件夹.png">

打开其中的 `serverconfig` 文件夹

<img src="/assets/image/serverconfig文件夹.png">

然后删除配置文件 **{{file}}** 即可
:::
::: details 客户端配置损坏
点击左侧的 **浏览** 按钮，

然后点击 “配置文件夹”，

然后删除配置文件 **{{file}}** 即可

<img src="/assets/image/打开配置文件夹.png">
:::