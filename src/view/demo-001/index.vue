<template>
  <section>
    <CfComplexForm
      :schemaDefine="schemaDefine"
      :activeComponentList="activeComponentList"
    />
  </section>
</template>

<script>
import CfComplexForm from '../../components/cf-complex-form';
import { schemaDefine, activeComponentList } from './config';

export default {
  name: 'QueryDemo001',
  components: {
    CfComplexForm,
  },
  data() {
    return {
      schemaDefine,
      activeComponentList,
    };
  },
};
</script>
