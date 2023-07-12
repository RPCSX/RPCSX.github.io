<script setup>
import '../assets/text-styles.css';
</script>

<template>
  <n-card hoverable>
    <div class="card-wrapper">
      <div class="icon-wrapper">
        <n-icon size="35">
          <slot name="card-icon" class="card-icon" />
        </n-icon>
      </div>
      <div class="content-wrapper">
        <div class="card-header">
          <slot name="card-title" />
        </div>
        <div class="body-text" id="card-body">
          <slot />
        </div>
      </div>
    </div>
  </n-card>
</template>

<style scoped>
.n-card {
  max-width: 400px;
  min-width: 400px;
}

.card-wrapper {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}

.icon-wrapper {
  margin: 10px 20px 10px 0px;
  border: 2px;
  border-radius: 2px;
  border-color: black;
  /* TODO fixme */
}

.card-icon {
  font-size: 100px;
}

.content-wrapper {
  flex-shrink: 1;
}

#card-body {
  word-wrap: break-word;
}
</style>