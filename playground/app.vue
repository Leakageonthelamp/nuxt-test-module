<template>
  <div>
    Nuxt module playground!
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from '#imports';
import { useUsersGroupsMockStore } from './loaders/mock/useMockLoader'

const mock = useUsersGroupsMockStore();

onMounted(() => {
  console.log('mounted');
  mock.fetch()
})
</script>
