<template>
  <section :class="['tf-node', { 'has-children': hasChildren }]">
    <TfNodeRender :nodeData="nodeData" />

    <template v-if="hasChildren">
      <div class="tf-node-children">
        <TfNodeRender
          v-for="item in nodeData.children"
          :key="item.id"
          :nodeData="item"
        />
      </div>
    </template>
  </section>
</template>

<script>
import TfNodeRender from '../tf-node-render/index.vue';

export default {
  name: 'TrNode',
  components: { TfNodeRender },
  props: {
    nodeData: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    hasChildren() {
      const children = this.nodeData.children;
      return Array.isArray(children) && children.length > 0;
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.tf-node {
  min-height: var(--tf-node-min-height);
  background-color: var(--tf-node-background-color);

  .tf-node-children {
    padding-left: 20px;
  }
}
</style>
