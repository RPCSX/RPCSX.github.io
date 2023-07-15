<script setup lang="ts">

import { ref } from 'vue'

defineProps({
  themex: {
    type: Object
  }
})
</script>

<style scoped>
  .n-card {
    max-width: 300px;
  }
</style>

<template>
  <n-card hoverable>
      <template #cover>
        <img :src="themex == null ? './assets/logo-light.png' : './assets/logo-dark.png'">
      </template>
      <template #header>
        RPCSX is your PlayStation 4 emulator.
      </template>
      <div class="body-text">Use only with lawfully obtained archival copies of PS4 games you physically own.</div>
  </n-card>
</template>