<template>
<div class="flex flex-col items-center justify-center">
    <div class="max-w-6xl mx-auto p-6">

      <div class="bg-white text-[#18082f] rounded-lg shadow-md overflow-hidden">
        <Image 
            :src="menuStore.menu.image" 
            :alt="menuStore.menu.description" 
            class="w-full h-48 object-cover"
        />

        <div class="p-6">
          <h2 class="text-2xl font-bold">{{ menuStore.menu.name }}</h2>
          <p class="mt-2 text-gray-700">{{ menuStore.menu.description }}</p>
          <div class="mt-4 flex items-center justify-between">
            <span class="text-xl font-semibold text-[#ef6002]">${{ menuStore.menu.price }}</span>
            <span class="bg-[#ef6002] text-white px-3 py-1 rounded-full text-sm">{{ menuStore.menu.category }}</span>
          </div>
          <button class="mt-4 w-full flex items-center justify-center bg-[#ef6002] text-white py-2 rounded-lg hover:bg-[#d75402] transition duration-300">
            <!-- SVG Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M16 11V9H4v2h12zm-1-4h-2V5h-2V3h2V1h2v2h2v2h-2v2zm-3 8a2 2 0 110-4 2 2 0 010 4zM5 15a2 2 0 100-4 2 2 0 000 4z"/>
            </svg>
            Add to Cart
          </button>
        </div>
      </div>

    </div>
</div>
</template>

<script setup>
import Image from '@/components/Image.vue'
import { useMenuStore } from '@/stores/menu'

const menuStore = useMenuStore()
</script>