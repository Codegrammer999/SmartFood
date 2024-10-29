<template>
<div class="bg-[#18082f] text-white min-h-screen">

  <div class="max-w-6xl mx-auto p-4">
    <!-- Header -->
    <div class="text-cente mb-4">
      <h1 class="text-3xl font-semibold">Our Menu</h1>
      <p class="mt-2 text-lg text-gray-300">Discover your favorite meals!</p>
    </div>

    <div class="flex justify-center items-center space-x-2 p-4">
      <input 
        type="text"
        class="w-full py-2 px-4 rounded-md text-slate-800 focus:outline-none focus:outline-dotted focus:outline-[#ef6002] duration-500"
        placeholder="Search by category"
      >
      <button class="px-6 py-2 bg-[#ef6002] rounded-md focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#ef6002] focus:text-slate-800 duration-300">Search</button>
    </div>

    <!-- Menu Grid -->
    <div class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <MenuCard 
            v-for="item in menus"
            :key="item.id"
            :menu="item"
        />
    </div>
  </div>
</div>
</template>

<script setup>
import MenuCard from '@/components/MenuCard.vue'
import { ref } from 'vue'

const menus = ref([
    { image: '/images/food1.jpg', description: 'or sit amet consectetur adipisicing elit. Fuga unde quam numquam officia nesciunt necessitatibus, expedita minus!', price: 21, priceoff: 41, id: 1, name: 'Dish 1', category: 'Food categgory' },
    { image: '/images/food2.jpg', description: 'or sit amet consectetur adip', price: 17, priceoff: 22, id: 2, name: 'Dish 2', category: 'Food categgory' },
    { image: '/images/food3.jpg', description: 'or sit amet consectetur adipisicing elit. Fuga unde quam numquam officia nesciunt necessitatibus, expedita minus! Sapiente ducimus laboriosam qu', price: 12, id: 3, name: 'Dish 3', category: 'Food categgory' },
    { image: '/images/pexels-janetrangdoan-936611.jpg', description: 'ffffffff', price: 21, id: 4, name: 'Dish 4', category: 'Food categgory' }
])
</script>