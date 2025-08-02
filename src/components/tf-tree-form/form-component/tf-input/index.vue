<template>
  <section>
    <ElInput :value="values[0]" @change="handleChange" />
  </section>
</template>

<script>
import props from '../shared/props';
export default {
  name: 'TfInput',
  props,
  methods: {
    handleChange(value) {
      this.$emit('change', [value]);
    },
  },
};
</script>
