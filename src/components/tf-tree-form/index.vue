<template>
  <article class="tf-tree-form">
    <TfTree :treeData="treeData" />
  </article>
</template>

<script>
import TfTree from './tf-tree/index.vue';

export default {
  name: 'TfTreeFrom',
  components: {
    TfTree,
  },
  props: {
    treeData: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    addNode() {},
    removeNode() {},
    getTreeData() {},
    validateTree() {},
  },
};
</script>
<style lang="scss">
@import './style/var.scss';
</style>
