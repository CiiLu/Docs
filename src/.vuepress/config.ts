import {defineUserConfig} from "vuepress";
import theme from "./theme.js";
import {getDirname, path} from "vuepress/utils";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
    base: "/",

    lang: "zh-CN",
    title: "Guide",
    description: "杂七杂八的东西",
    clientConfigFile: path.resolve(__dirname, './client.ts'),
    theme,
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
        ],
        [
            'script',
            {
                defer: true,
                src: 'https://cloud.umami.is/script.js',
                'data-website-id': '00b6bb39-9fd2-4838-a529-128f02231104'
            }
        ]
    ]
});