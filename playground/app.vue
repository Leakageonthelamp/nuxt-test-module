<template>
  <div>
    Nuxt module playground!
  </div>
</template>

<script lang="ts" setup>
import { useUtils } from '#imports';

const { StringHelper } = useUtils();

console.log(StringHelper.toCamelCase('hello-world'));

</script>
