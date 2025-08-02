<template>
  <article class="tf-tree-form">
    <TfTree :activeComponentList="activeComponentList" />
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
    activeComponentList: {
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
