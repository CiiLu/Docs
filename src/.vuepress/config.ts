import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "杂物间",
  description: "杂七杂八的东西",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
