<template>
  <div class="flex flex-col w-full p-2 sm:p-6">
      <div class="mb-2 p-2">
        <h1 class="text-3xl font-semibold">Our Store</h1>
        <p class="mt-2 font-semibold text-gray-300">Discover your favorite groceries!</p>
      </div>

	  <div class="flex font-semibold text-sm items-center pb-2 overflow-y-hidden groceries-category space-x-2">
      <button 
        :class="category === 'all' ? 'p-2 rounded-md bg-[#ef6002] duration-300' : 'p-2 rounded-md bg-white/20 duration-300' " @click="changeCategory('all')">
        All
      </button>
      <button 
        @click="changeCategory('fruits')" 
        :class="category === 'fruits' ? 'p-2 rounded-md bg-[#ef6002] duration-300' : 'p-2 rounded-md bg-white/20 duration-300' ">
        Fruits
      </button>
      <button 
        @click="changeCategory('drinks')" 
        :class="category === 'drinks' ? 'p-2 rounded-md bg-[#ef6002] duration-300' : 'p-2 rounded-md bg-white/20 duration-300' ">
        Drinks
      </button>
      <button 
        @click="changeCategory('cooked')" 
        :class="category === 'cooked' ? 'p-2 rounded-md bg-[#ef6002] duration-300' : 'p-2 rounded-md bg-white/20 duration-300' ">
        Cooked
      </button>
      <button 
        @click="changeCategory('raw')" 
        :class="category === 'raw' ? 'p-2 rounded-md bg-[#ef6002] duration-300' : 'p-2 rounded-md bg-white/20 duration-300' ">
        Raw
      </button>
      <button 
        @click="changeCategory('frozen')" 
        :class="category === 'frozen' ? 'p-2 rounded-md bg-[#ef6002] duration-300' : 'p-2 rounded-md bg-white/20 duration-300' ">
        Frozen
      </button>
      <button 
        @click="changeCategory('vegetables')" 
        :class="category === 'vegetables' ? 'p-2 rounded-md bg-[#ef6002] duration-300' : 'p-2 rounded-md bg-white/20 duration-300' ">
        Vegetables
      </button>
    </div>
    
    <!-- Centered container with grid layout -->
    <div class="flex justify-center w-full">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 w-full">
        <MenuCard v-for="item in menus" :key="item.id" :menu="item" />
      </div>
    </div>

    <!-- Show if no products are available -->
    <div v-if="!menus.length" class="p-8 text-xl opacity-70 text-center">
      No groceries available!
    </div>
  </div>
</template>

<script setup>
import { MenuCard } from "@/asyncComponents"
import { onMounted, ref, watch } from 'vue'
import { useMenus } from "@/composables/UseMenus"

const { menus, currentPage, totalPages, fetchMenus } = useMenus()
const category = ref('all')

const changeCategory = (query) => {
  category.value = query
}

watch(category,(val)=> {
  if (val) {
    fetchMenus(val)
  }
})

onMounted(()=> {
  fetchMenus(category.value)
})
</script>
