<template>
  <section>
    <CfComplexForm :activeComponentList="activeComponentList" />
  </section>
</template>

<script>
import CfComplexForm from '../../components/cf-complex-form';

export default {
  name: 'QueryDemo001',
  components: {
    CfComplexForm,
  },
  data() {
    return {
      activeComponentList: [
        {
          id: 'uuid-100',
          componentList: [],
          children: [
            {
              id: 'uuid-110',
              componentList: [],
              children: [
                {
                  id: 'uuid-111',
                  componentList: [],
                },
              ],
            },
            {
              id: 'uuid-120',
              children: [
                {
                  id: 'uuid-121',
                  componentList: [],
                },
              ],
            },
          ],
        },
        {
          id: 'uuid-200',
          componentList: [],
          children: [
            {
              id: 'uuid-210',
              componentList: [],
              children: [
                {
                  id: 'uuid-211',
                  componentList: [],
                },
              ],
            },
            {
              id: 'uuid-220',
              children: [
                {
                  id: 'uuid-221',
                  componentList: [],
                },
              ],
            },
          ],
        },
      ],
    };
  },
};
</script>
