<template>
    <label 
        class="flex items-center space-x-2">
        <input 
            :type="inputType" 
            class="focus:outline-none focus:ring-2 focus:ring-[#ef6002]" 
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