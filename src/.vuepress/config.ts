import {defineUserConfig} from "vuepress";
import theme from "./theme.js";
import {getDirname, path} from "vuepress/utils";
import {googleTagManagerPlugin} from "@vuepress/plugin-google-tag-manager";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
    base: "/",

    lang: "zh-CN",
    title: "Guide",
    description: "杂七杂八的东西",
    clientConfigFile: path.resolve(__dirname, './client.ts'),
    theme,
    plugins: [
        googleTagManagerPlugin({
            id: 'GTM-5ZFGDSTZ',
        }),
    ],
    alias: {
        "@JavaComponent": path.resolve(__dirname, "components/Java.vue"),
        "@OptifineComponent": path.resolve(__dirname, "components/Optifine.vue"),
    },
    head: [
        [
            'script',
            {
                src: 'https://s4.zstatic.net/npm/sober@1.1.0/dist/sober.min.js'
            }
        ]
    ]
});