<template>
<div class="bg-[#18082f] text-white min-h-screen">

  <div class="max-w-6xl mx-auto p-6">
    <!-- Header -->
    <div class="text-center mb-8">
      <h1 class="text-4xl font-bold">Our Menu</h1>
      <p class="mt-2 text-lg text-gray-300">Discover your favorite meals!</p>
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