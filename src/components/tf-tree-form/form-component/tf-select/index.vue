<template>
  <section class="tf-select">
    <el-select :value="values[0]" @change="handleChange">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </section>
</template>

<script>
import props from '../shared/props';
export default {
  name: 'TfSelect',
  props,
  methods: {
    handleChange(value) {
      this.$emit('change', [value]);
    },
  },
};
</script>
