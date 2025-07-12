<template>
  <section class="cf-query-node">
    <QueryRow :rowInfo="activeComponent" />

    <template v-if="hasChildren">
      <div class="cf-query-children">
        <QueryNode
          v-for="item in activeComponent.children"
          :key="item.id"
          :activeComponent="item"
        />
      </div>
    </template>
  </section>
</template>

<script>
import QueryRow from '../query-row/index.vue';

export default {
  name: 'QueryNode',
  components: { QueryRow },
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
};
</script>

<style lang="scss" scoped>
.cf-query-node {
  .cf-query-children {
    padding-left: 20px;
  }
}
</style>
