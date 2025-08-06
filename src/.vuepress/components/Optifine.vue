<template>
  <div v-if="mc==null">
    <s-card style="min-width: 500px;max-width: none;" clickable="false">
      <div slot="headline">错误</div>
      <div slot="text">缺少参数</div>
    </s-card>
  </div>
  <div v-else>
    <s-card style="height:280px;min-width: 500px;overflow: auto;max-width: none;padding: 10px" clickable="false">
      <div slot="headline">Optifine Forge 版本对照表</div>
      <div slot="subhead">MC 版本：{{ mc }}</div>
      <s-table style="overflow: auto; display: block">
        <s-thead>
          <s-tr>
            <s-th>Optifine 版本</s-th>
            <s-th>Forge 版本</s-th>
          </s-tr>
        </s-thead>
        <s-tbody>
          <s-tr v-for="(item, index) in items" :key="index">
            <s-td>{{ item.type + item.patch }}</s-td>
            <s-td>{{ item.forge }}</s-td>
          </s-tr>
        </s-tbody>
      </s-table>
    </s-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mc: null,
      items: []
    };
  },
  created() {
    this.updateQueryParams();
    fetch(`https://api.allorigins.win/raw?url=https://bmclapi2.bangbang93.com/optifine/${this.mc}`)
        .then(response => response.json())
        .then(data => {
          this.items = data;
        })
        .catch(error => {
          console.error("There was an error fetching the data!", error);
        });
  },
  watch: {
    '$route': 'updateQueryParams'
  },
  methods: {
    updateQueryParams() {
      const {mc} = this.$route.query;
      Object.assign(this, {mc: mc});
    }
  }
};
</script>

<style>

</style>
