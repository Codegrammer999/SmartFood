<template>
<div>
  <div class="flex flex-col items-center w-full p-4 pt-0 sm:p-6">
    <div class="flex justify-between items-center w-full max-w-7xl">
	 <div class="text-cente mb-4">
      <h1 class="text-3xl font-semibold">Our Store</h1>
      <p class="mt-2 text-lg text-gray-300">Discover your favorite groceries!</p>
    </div>
    </div>

	  <div class="flex justify-center overflow-y-auto items-center pb-4 p-2 space-x-2">
	<button>All</button>
	<button>Drinks</button>
	<button>Cooked Foods</button>
<button>All</button>
	<button>Drinks</button>
	<button>Cooked Foods</button>
<button>All</button>
	<button>Drinks</button>
	<button>Cooked Foods</button>
    </div>
    
    <!-- Centered container with grid layout -->
    <div class="flex justify-center w-full">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 w-full">
        <MenuCard v-for="item in menus" :key="item.id" :menu="item" />
      </div>
    </div>

    <!-- Show if no products are available -->
    <div v-if="!menus.length" class="p-8 text-xl opacity-70 text-center">
      No products available!
    </div>
  </div>
</div>
</template>

<script setup>
import { MenuCard } from "@/asyncComponents"
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'
import { onMounted } from 'vue'
import { useMenus } from "@/composables/UseMenus"

const { menus, currentPage, totalPages, fetchMenus } = useMenus()

onMounted(()=> {
  fetchMenus()
})
</script>