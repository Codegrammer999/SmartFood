<template>
<div class="bg-[#18082f] text-white">

  <div class="max-w-6xl mx-auto p-4">
    <!-- Header -->
    <div class="text-cente mb-4">
      <h1 class="text-3xl font-semibold">Our Menu</h1>
      <p class="mt-2 text-lg text-gray-300">Discover your favorite meals!</p>
    </div>

    <div class="flex justify-center items-center pb-4 p-2 space-x-2">
      <input 
        type="text"
        class="w-full py-3 px-4 text-slate-800 focus:outline-none duration-500 rounded-md"
        placeholder="Search by category"
      >
      <div class="bg-[#ef6002] py-2 px-2 duration-300 rounded-md">
        <MagnifyingGlassIcon class="size-8"/>
      </div>
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
import { MenuCard } from "@/asyncComponents"
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'
import { onMounted, ref } from 'vue'
import { useMenus } from "@/composables/UseMenus"

const { menus, currentPage, totalPages, fetchMenus } = useMenus()
onMounted(()=> {
  fetchMenus()
})
</script>