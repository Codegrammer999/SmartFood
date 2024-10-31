<template>
    <label 
        class="flex items-center space-x-2">
        <input 
            :type="inputType"  
            required
        />
        <span>{{ paymentName }}</span>
    </label>
</template>

<script setup>
defineProps({
    paymentName: {
        type: String,
        required: true
    },
    inputType: {
        type: String,
        required: true
    }
})
</script>