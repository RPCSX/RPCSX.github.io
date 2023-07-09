<template>
    <div class="wrapper">
        <n-icon>
            <slot name="icon" class="pitch-item-icon" />
        </n-icon>
        <slot class="body-text"></slot>
    </div>
</template>

<style scoped>
    .pitch-item-icon {
        font-size: 50px;
    }

    .wrapper {
        display: inline-block;
        
    }

</style>

<script>
import './assets/text-styles.css'


</script>