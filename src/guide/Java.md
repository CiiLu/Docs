---
icon: font-awesome
title: Java 引导页
---

<script setup>
import Java from "@JavaComponent";
import {onMounted, ref} from "vue";

const javaComponent = ref("");
const javaVersion = ref(null);
onMounted(() => {
    javaVersion.value = javaComponent.value.currentVersion.split("+")[0].replace("8u","1.8.0_");
});
</script>
首先，下载卡片中的 Java，
<Java ref="javaComponent"></Java>
然后打开下载的安装包，开始安装

::: details Windows 安装教程
打开安装包会出现这个页面，**点击** `Next`
<img src="/assets/image/WindowsJava安装第一步.png" width="400">
**不要修改任何选项**，依然 **点击** `Next`
<img src="/assets/image/WindowsJava安装第二步.png" width="400">
**点击** `Install`
<img src="/assets/image/WindowsJava安装第三步.png" width="400">
最后 **点击** `Finish`
<img src="/assets/image/WindowsJava安装第四步.png" width="400">
:::
::: details macOS 安装教程
打开安装包会出现这个页面，**点击** `继续`
<img src="/assets/image/MacJava安装第一步.png" width="400">
**不要修改任何选项**，依然 **点击** `继续`
<img src="/assets/image/MacJava安装第二步.png" width="400">
**点击** `关闭`
<img src="/assets/image/MacJava安装第三步.png" width="400">
最后 **点击** `移至废纸篓`
<img src="/assets/image/MacJava安装第四步.png" width="400">
:::

安装完之后，**重启启动器**，然后打开 **版本管理** 页面，
<img src="/assets/image/版本管理.png">
把上面的勾**勾选上**，
<img src="/assets/image/勾选.png">
然后点击展开 **“Java 路径”** 项，选择 **{{javaVersion}}** 版本
<img src="/assets/image/选中版本.png">
再次启动游戏即可。