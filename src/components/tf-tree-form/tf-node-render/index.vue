<template>
  <div class="tf-node-render">
    {{ nodeData.id }}
  </div>
</template>

<script>
export default {
  name: 'TfNodeRender',
  props: {
    nodeData: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>
