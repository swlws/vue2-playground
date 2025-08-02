<template>
  <section class="cf-query-tree">
    <TfNode
      v-for="activeComponent in activeComponentList"
      :key="activeComponent.id"
      :activeComponent="activeComponent"
    />
  </section>
</template>

<script>
import TfNode from '../tf-node/index.vue';

export default {
  name: 'TfTree',
  components: { TfNode },
  props: {
    activeComponentList: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
