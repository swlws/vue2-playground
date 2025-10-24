<template>
  <article>
    <VpList />
  </article>
</template>

<script>
export default {
  name: 'QueryDemo001',
  components: {
    VpList: () => import('@/components/vp-list/index.vue'),
  },
  data() {
    return {};
  },
};
</script>
