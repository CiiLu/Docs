---
icon: moon
title: 虚拟内存 引导页
---

首先下载这个文件，双击打开运行

https://img.kookapp.cn/attachments/2025-02/12/67acc25dc5f06.bat

当出现下面的界面的时候，说明运行已经完成

<img width="400" src="/assets/image/虚拟内存脚本.png">

然后按 `Win+R`键，打开运行对话框
并输入`sysdm.cpl`并按下回车，打开 **系统属性**

<img width="400" src="/assets/image/运行对话框.png">

按照图里的顺序打开虚拟内存对话框

<img width="400" src="/assets/image/虚拟内存三巨头.png">

在新打开的页面中
先取消勾选 **自动管理所有驱动器的分页文件大小**
再把虚拟内存换到其他 **剩余容量大于 80GB 的盘** 里
在下方的 **自定义大小中** 初始大小输入 `1024` 最大值输入 `65535` 再点击 **设置** 按钮

<img width="400" src="/assets/image/虚拟内存调节完.png">

之后点击三个 **“确定”** 按钮后重启电脑。