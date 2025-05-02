import {defineUserConfig} from "vuepress";

import theme from "./theme.js";
import {getDirname, path} from "vuepress/utils";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
    base: "/",

    lang: "zh-CN",
    title: "杂物间",
    description: "杂七杂八的东西",

    theme,
    alias: {
        "@JavaComponent": path.resolve(__dirname, "components/Java.vue"),
    }
});

