<template>
  <section>
    <TfTreeFrom :schemaDefine="schemaDefine" :treeData="treeData" />
  </section>
</template>

<script>
// import TfTreeFrom from '../../components/cf-complex-form';
import TfTreeFrom from '../../components/tf-tree-form';
import { schemaDefine, treeData } from './config';

export default {
  name: 'QueryDemo001',
  components: {
    TfTreeFrom,
  },
  data() {
    return {
      schemaDefine,
      treeData,
    };
  },
};
</script>
