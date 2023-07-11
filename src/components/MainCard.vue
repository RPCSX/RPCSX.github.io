<script setup>
import '../assets/text-styles.css';

defineProps({
  themex: {
    type: ref,
    required: true
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
            <div class="card-header">RPCSX is your PlayStation 4 emulator.</div>
        </template>
        <div class="body-text">Use only with lawfully obtained archival copies of PS4 games you physically own.</div>
    </n-card>
</template>