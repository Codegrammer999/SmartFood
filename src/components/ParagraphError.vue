<template>
    <p class="text-red-600 text-sm">{{ error }}</p>
</template>

<script setup>
defineProps({
    error: {
        type: String,
        default: ''
    }
})
</script>