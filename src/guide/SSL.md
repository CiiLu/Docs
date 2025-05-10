---
icon: bookmark
title: SSL 错误 引导页
---

首先 按下 `Win+R` 快捷键 **打开运行对话框**，
并输入 `sysdm.cpl`，
<img width="400" src="/assets/image/Windows/运行对话框.png">
按下 **确定**，打开系统属性对话框，
点击上方 **高级**，
<img width="400" src="/assets/image/Windows/系统属性高级.png">
点击 **环境变量** 按钮，
<img width="400" src="/assets/image/Windows/系统属性环境变量.png">
点击下面的 **新建** 按钮，
<img width="400" src="/assets/image/Windows/环境变量输入.png">
上方 **变量名** 输入 `JAVA_TOOL_OPTIONS`
下方 **变量值** 输入 `-Djavax.net.ssl.trustStoreType=WINDOWS-ROOT`
点击两个 **确定** 按钮后重启电脑，
再次打开启动器即可正常使用。
