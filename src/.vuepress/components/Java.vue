<template>
  <div v-if="resolvedMajor == null || resolvedSystem == null || resolvedArch == null">
    <s-card style="min-width: 500px;max-width: none;" clickable="false">
      <div slot="headline">错误</div>
      <div slot="text">缺少参数</div>
    </s-card>
  </div>
  <div v-else>
    <s-card style="height:280px;min-width: 500px;max-width: none;padding: 10px" clickable="false">
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
  ["21", "21.0.7+9"],
  ["17", "17.0.15+10"],
  ["16", "16.0.2+7"],
  ["11", "11.0.27+9"],
  ["8", "8u452+11"],
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
  computed: {
    resolvedMajor() {
      return this.major || this.$route.query.major;
    },
    resolvedSystem() {
      return this.system || this.$route.query.system;
    },
    resolvedArch() {
      return this.arch || this.$route.query.arch;
    },
    currentVersion() {
      return this.getVersion(this.resolvedMajor);
    }
  },
  methods: {
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
      link.href = `https://download.bell-sw.com/java/${this.getVersion(this.resolvedMajor)}/bellsoft-jre${this.getVersion(this.resolvedMajor)}-${this.resolvedSystem}-${this.resolvedArch}-full.${fix}`;
      link.click();
    }
  }
};
</script>

<style>

</style>