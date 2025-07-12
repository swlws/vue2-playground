<template>
  <article class="cf-query-form">
    <QueryTree :activeComponentList="activeComponentList" />
  </article>
</template>

<script>
import QueryTree from './query-tree/index.vue';
export default {
  name: 'CfComplexForm',
  components: {
    QueryTree,
  },
  props: {
    activeComponentList: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
