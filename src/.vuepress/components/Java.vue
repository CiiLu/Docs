<template>
  <div v-if="major==null||system==null||arch==null">
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
            <s-td>{{ getVersion(major) }}</s-td>
          </s-tr>
          <s-tr>
            <s-td>系统架构</s-td>
            <s-td>{{ arch }}</s-td>
          </s-tr>
          <s-tr>
            <s-td>操作系统</s-td>
            <s-td>{{ system }}</s-td>
          </s-tr>
        </s-tbody>
      </s-table>
      <s-snackbar slot="action" type="success">
        <s-button @click="download(getVersion(major),arch,system)" slot="trigger">下载</s-button>
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
  ["8", "8u452+11"]
]);
export default {
  data() {
    return {
      major: null,
      system: null,
      arch: null,
    };
  },
  mounted() {
    this.updateQueryParams();
  },
  watch: {
    '$route': 'updateQueryParams'
  },
  computed: {
    currentVersion() {
      return this.getVersion(this.major);
    }
  },
  methods: {
    updateQueryParams() {
      const {major, system, arch} = this.$route.query;
      Object.assign(this, {major, system, arch});
    },
    getVersion(version) {
      return versionMap.get(version);
    },
    download(version, arch, system) {
      let fix;
      if (system === "windows") {
        fix = "msi"
      } else if (system === "macos") {
        fix = "pkg"
      } else {
        fix = "tar.gz"
      }
      const link = document.createElement('a');
      link.href = `https://download.bell-sw.com/java/${version}/bellsoft-jre${version}-${system}-${arch}-full.${fix}`;
      link.click()
    }
  }
};
</script>

<style>

</style>