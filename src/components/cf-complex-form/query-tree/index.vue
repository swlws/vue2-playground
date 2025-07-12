<template>
  <section class="cf-query-tree">
    <QueryNode
      v-for="activeComponent in activeComponentList"
      :key="activeComponent.id"
      :activeComponent="activeComponent"
    />
  </section>
</template>

<script>
import QueryNode from '../query-node/index.vue';

export default {
  name: 'QueryTree',
  components: { QueryNode },
  props: {
    activeComponentList: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
