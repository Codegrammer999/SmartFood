<template>
    <label 
        class="flex items-center space-x-2">
        <input 
            :type="inputType"
            v-model="model"
            :value="inputValue"
            required
        />
        <span>{{ paymentName }}</span>
    </label>
</template>

<script setup>
const model = defineModel({
    type: String,
    required: true,
})

defineProps({
    paymentName: {
        type: String,
        required: true
    },
    inputType: {
        type: String,
        required: true
    },
    inputValue: {
        type: String,
        required: true
    }
})
</script>