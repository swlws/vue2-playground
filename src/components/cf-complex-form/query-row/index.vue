<template>
  <div class="query-row">
    {{ rowInfo.id }}
  </div>
</template>

<script>
export default {
  name: 'QueryRow',
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
