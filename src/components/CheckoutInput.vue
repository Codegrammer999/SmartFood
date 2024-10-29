<template>
    <input 
        :type="InputType" 
        :placeholder="placeholder" 
        class="p-2 focus:outline-none focus:ring-2 focus:ring-[#ef6002] duration-300 rounded"
    />
</template>

<script setup>
defineProps({
    InputType: {
        type: String,
        required: true
    },
    placeholder: {
        type: String,
        required: true
    },
})
</script>