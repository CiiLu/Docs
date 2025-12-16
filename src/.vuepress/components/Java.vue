<template>
  <div v-if="!resolvedMajor || !resolvedSystem || !resolvedArch">
    <s-card style="min-width: 500px; max-width: none;" clickable="false">
      <div slot="headline">错误</div>
      <div slot="text">缺少必要参数</div>
    </s-card>
  </div>
  <div v-else>
    <s-card style="height:280px; min-width: 500px; max-width: none; padding: 10px" clickable="false">
      <div slot="headline">Java 下载</div>
      <s-table style="overflow: auto; display: block">
        <s-thead>
          <s-tr>
            <s-th>键</s-th>
            <s-th>值</s-th>
          </s-tr>
        </s-thead>
        <s-tbody>
          <s-tr>
            <s-td>Java 版本</s-td>
            <s-td>{{ currentVersion }}</s-td>
          </s-tr>
          <s-tr>
            <s-td>系统架构</s-td>
            <s-td>{{ resolvedArch }}</s-td>
          </s-tr>
          <s-tr>
            <s-td>操作系统</s-td>
            <s-td>{{ resolvedSystem }}</s-td>
          </s-tr>
        </s-tbody>
      </s-table>
      <s-snackbar slot="action" type="success">
        <s-button @click="download" slot="trigger">下载</s-button>
        下载已开始
      </s-snackbar>
    </s-card>
  </div>
</template>

<script>
const versionMap = new Map([
  ["25", "25.0.1+13"],
  ["21", "21.0.9+15"],
  ["17", "17.0.17+15"],
  ["16", "16.0.2+7"],
  ["11", "11.0.29+12"],
  ["8", "8u472+11"],
  ["8_312", "8u312+7"]
]);

export default {
  name: "JavaDownloader",
  props: {
    major: {
      type: String,
      default: null
    },
    system: {
      type: String,
      default: null
    },
    arch: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      detectedArch: "",
      detectedSystem: ""
    };
  },
  async created() {
    await this.getUserAgentInfo();
  },
  computed: {
    resolvedMajor() {
      return this.major || this.$route.query.major;
    },
    resolvedSystem() {
      return this.system || this.$route.query.system || this.detectedSystem;
    },
    resolvedArch() {
      return this.arch || this.$route.query.arch || this.detectedArch;
    },
    currentVersion() {
      return this.getVersion(this.resolvedMajor);
    }
  },
  methods: {
    async getUserAgentInfo() {
      if (navigator.userAgentData !== undefined) {
        const d = await navigator.userAgentData.getHighEntropyValues(["architecture"]);
        this.detectedArch = d.architecture === "x86" ? "amd64" : "aarch64";
        this.detectedSystem = d.platform.toLowerCase();
      } else {
        const ua = navigator.userAgent;
        if (ua.includes("Windows")) {
          this.detectedSystem = "windows";
        } else if (ua.includes("Mac")) {
          this.detectedSystem = "macos";
        } else {
          this.detectedSystem = "linux";
        }
        this.detectedArch = ua.includes("Mac") ? "aarch64" : "amd64";
      }
    },
    getVersion(version) {
      return versionMap.get(version);
    },
    download() {
      let fix;
      if (this.resolvedSystem === "windows") {
        fix = "msi";
      } else if (this.resolvedSystem === "macos") {
        fix = "pkg";
      } else {
        fix = "tar.gz";
      }

      const link = document.createElement("a");
      link.href = `https://download.bell-sw.com/java/${this.currentVersion}/bellsoft-jre${this.currentVersion}-${this.resolvedSystem}-${this.resolvedArch}-full.${fix}`;
      link.click();
    }
  }
};
</script>

<style></style>
