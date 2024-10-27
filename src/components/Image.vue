<template>
    <img 
        :src="src" 
        :alt="alt"
        loading="lazy"
    >
</template>

<script setup>
defineProps({
    src: {
        type: String,
        required: true
    },
    alt: {
        type: String,
        required: true
    }
})
</script>