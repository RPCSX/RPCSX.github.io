<template>
  <n-card hoverable>
    <template #cover>
      <img :src="'./assets/logo-light.png'" />
    </template>
    <template #header>
      <div class="card-header">RPCSX is your PlayStation 4 emulator.</div>
    </template>
    <div class="body-text">Use only with lawfully obtained archival copies of PS4 games you physically own.</div>
  </n-card>
</template>

<style scoped>
    .n-card {
        max-width: 300px;
    }
</style>