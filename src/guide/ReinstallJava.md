---
icon: sun
title: 重装 Java 引导页
---

<script setup>import {onMounted, ref} from 'vue'; 
import Java from '@JavaComponent'; 
const arch = ref('');
const system = ref('');
async function getUserAgentInfo() {
    if(navigator.userAgentData !== undefined){
        const d = await navigator.userAgentData.getHighEntropyValues([
          'architecture'
        ]);
        
        if (d.architecture === 'x86') {
          arch.value = 'amd64';
        } else {
          arch.value = "aarch64";
        }
        system.value = d.platform.toLowerCase();
    }else {
        if(navigator.userAgent.includes("Windows")) {
            system.value = "windows"
        }else if(navigator.userAgent.includes("Mac")) {
            system.value = "macos"
        }else {
            system.value = "linux"
        }
        if(navigator.userAgent.includes("Mac")){
            arch.value = "aarch64"
        }else 
        { 
            arch.value = "amd64"
        }
    }
}

onMounted(() => {
  getUserAgentInfo();
});
</script>

首先，下载卡片中的 Java，
<Java major="21" :arch="arch" :system="system"></Java>
然后打开下载的安装包，开始安装。

::: details Windows 安装教程
打开安装包会出现这个页面，**点击** `Next`
<img src="/assets/image/Windows/WindowsJava安装第一步.png" width="400">
**不要修改任何选项**，依然 **点击** `Next`
<img src="/assets/image/Windows/WindowsJava安装第二步.png" width="400">
**点击** `Install`
<img src="/assets/image/Windows/WindowsJava安装第三步.png" width="400">
最后 **点击** `Finish`
<img src="/assets/image/Windows/WindowsJava安装第四步.png" width="400">
:::
::: details macOS 安装教程
打开安装包会出现这个页面，**点击** `继续`
<img src="/assets/image/Mac/MacJava安装第一步.png" width="400">
**不要修改任何选项**，依然 **点击** `继续`
<img src="/assets/image/Mac/MacJava安装第二步.png" width="400">
**点击** `关闭`
<img src="/assets/image/Mac/MacJava安装第二步.png" width="400">
最后 **点击** `移至废纸篓`
<img src="/assets/image/Mac/MacJava安装第四步.png" width="400">
:::

安装完之后重启电脑即可