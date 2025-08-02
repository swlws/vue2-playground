<template>
  <section :class="['tf-node', { 'has-children': hasChildren }]">
    <TfNodeRender :rowInfo="activeComponent" />

    <template v-if="hasChildren">
      <div class="tf-node-children">
        <TfNodeRender
          v-for="item in activeComponent.children"
          :key="item.id"
          :rowInfo="item"
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
    activeComponent: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    hasChildren() {
      const children = this.activeComponent.children;
      return Array.isArray(children) && children.length > 0;
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.tf-node {
  .tf-node-children {
    padding-left: 20px;
  }
}
</style>
