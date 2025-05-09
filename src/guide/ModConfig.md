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
你的游戏因为 **有模组的配置文件损坏** 而崩溃。
首先，打开你的版本文件夹

::: details HMCL
在主页面，打开 **版本管理** 页面，
<img src="/assets/image/HMCL/版本管理.png">
在点击左边的 **浏览** 按钮，然后点击 **游戏文件夹**
<img src="/assets/image/HMCL/版本管理.png">
:::

::: details PCL2
在主页面，打开 **版本设置** 页面，
<img src="/assets/image/PCL2/版本特定设置.png">
点击 **版本文件夹** 按钮
<img src="/assets/image/PCL2/版本文件夹.png">
:::

之后根据你的情况选择下面二种中的一个

::: tip
据现有信息，你应该为 **{{e}}** 情况
:::

::: details 服务端配置损坏
打开其中的 `saves` 文件夹

<img src="/assets/image/Saves文件夹.png">

**打开你的存档对应的文件夹**

然后打开其中的 `serverconfig` 文件夹

<img src="/assets/image/ServerConfig文件夹.png">

删除配置文件 **{{file}}** 即可
:::
::: details 客户端配置损坏
打开其中的 `config` 文件夹

<img src="/assets/image/Config文件夹.png">

然后删除配置文件 **{{file}}** 即可

<img src="/assets/image/HMCL/打开配置文件夹.png">
:::