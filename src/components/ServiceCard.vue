<template>
  <div class="w-full bg-white/10 max-w-sm rounded-lg shadow-md p-4 text-center">
    
    <Image 
      :src="image" 
      :alt="title" 
      class="size-30 rounded-lg" 
    />

    <h2 class="mt-4 text-lg font-semibold">{{ title }}</h2>
    <p class="mt-2 text-sm opacity-70">{{ description }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import Image from '@/components/Image.vue'

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.size-30 {
  width: 120px;
  height: 120px;
  object-fit: cover;
}
</style>
