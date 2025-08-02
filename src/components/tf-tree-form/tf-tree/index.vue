<template>
  <section class="cf-query-tree">
    <TfNode
      v-for="nodeData in treeData"
      :key="nodeData.id"
      :nodeData="nodeData"
    />
  </section>
</template>

<script>
import TfNode from '../tf-node/index.vue';

export default {
  name: 'TfTree',
  components: { TfNode },
  props: {
    treeData: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
