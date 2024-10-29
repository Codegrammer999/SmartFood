<template>
   <div class="flex justify-between">
        <span>{{ item[0].name }}</span>
        <span>${{ item[0].price }}</span>
    </div>
</template>

<script setup>
const props = defineProps({
    item: {
        type: Object,
        required: true
    }
})
</script>