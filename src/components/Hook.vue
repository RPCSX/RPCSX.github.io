<script setup>
defineProps({
  time: {
    type: String,
    required: true
  },

  contributors: {
    type: String,
    required: true
  },
})
</script>

<template>
    <div class="hook">
        <h1>{{ time }} of development.</h1>
        <h1> {{ contributors }} experienced contributors.</h1>
        <h1>0 days since someone asked for Bloodborne.</h1>
      </div>
</template>