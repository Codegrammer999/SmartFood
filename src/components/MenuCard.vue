<template>
<div class="max-w-xs p-4 rounded-lg shadow-md bg-[#311952c4]">
    
    <div v-if="menu.image" class="h-64 w-full overflow-hidden rounded-md mb-4">
      <img
	:src="`${url + '/storage/' + menu.image}`" 
        :alt="menu.description" 
        class="w-full h-full object-cover"
      />
    </div>

    <div v-else class="h-40 w-full overflow-hidden rounded-md mb-4 bg-gray-200 flex items-center justify-center">
      <p class="text-gray-500">No Image Available</p>
    </div>

    <!-- Product Details -->
    <h2 class="text-lg font-bold truncate">{{ menu.name }}</h2>
    <p class="text-md mb-2">Category: {{ menu.category }}</p>
    <p class="text-md mb-4 truncate">{{ menu.description }}</p>
    <p class="text-md font-semibold text-[#ef6002] mb-2"><span class="line-through opacity-70" v-if="menu.priceoff">&#8358;{{ menu.priceoff }}</span> &#8358;{{ menu.price }}</p>

    <!-- See More Button -->
    <button
	@click="seeMore(menu.id)"
      	class="w-full px-4 py-2 bg-[#ef6002] text-white rounded-md hover:bg-purple-900 transition duration-300"
    >
      See More
    </button>
  </div>

</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const url = ref(import.meta.env.VITE_API_URL)
const router = useRouter()

const seeMore = (id) => {
  router.push({ name: 'menuDetails', params: { id } })
}

const props = defineProps({
    menu: {
        type: Object,
        required: true
    }
})
</script>

<style scoped>
@media (min-width: 640px) {
  .max-w-xs {
    max-width: 20rem;
  }
}
</style>