<template>
  <div class="tf-node-render">
    {{ rowInfo.id }}
  </div>
</template>

<script>
export default {
  name: 'TfNodeRender',
  props: {
    rowInfo: {
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
