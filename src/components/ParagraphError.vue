<template>
    <p class="text-red-500 font-semibold text-sm">{{ error }}</p>
</template>

<script setup>
defineProps({
    error: {
        type: String,
        default: ''
    }
})
</script>