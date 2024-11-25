<template>
  <div v-if="menuStore.menu" class="px-2">
    <div class="max-w-xl mx-auto p-6 mt-4 rounded-lg shadow-md bg-[#311952c4]">
      <!-- Product Image -->
      <div v-if="menuStore.menu.image" class="h-64 w-full overflow-hidden rounded-md mb-4">
        <img 
          :src="`${url + '/storage/' + menuStore.menu.image}`" 
          :alt="menuStore.menu.description" 
          class="w-full h-full object-cover"
        />
      </div>
      
      <div v-else class="h-64 w-full overflow-hidden rounded-md mb-4 bg-gray-200 flex items-center justify-center">
        <p class="text-gray-500">No Image Available</p>
      </div>

      <!-- Product Details -->
      <h2 class="text-2xl font-semibold mb-2">{{ menuStore.menu.name }}</h2>
      <p class="text-sm mb-4">Category: {{ menuStore.menu.category }}</p>
      <p class="text-md mb-6">{{ menuStore.menu.description }}</p>
      <p class="text-lg font-semibold text-[#ef6002] mb-2">&#8358;{{ menuStore.menu.price }}</p>

    <div ref="parentButtons" class="mt-4">
              <button
                v-if="addedToCart"
                @click="addToCart" 
                class="w-full flex items-center justify-center bg-[#ef6002] text-white py-2 rounded-lg hover:bg-[#d75402] transition duration-300">
                Added to Cart <span class="text-xl font-extrabold ml-2">&check;</span>
              </button>

              <button
                v-else
                @click="addToCart" 
                class="w-full flex items-center justify-center bg-[#ef6002] text-white py-2 rounded-lg hover:bg-[#d75402] transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M16 11V9H4v2h12zm-1-4h-2V5h-2V3h2V1h2v2h2v2h-2v2zm-3 8a2 2 0 110-4 2 2 0 010 4zM5 15a2 2 0 100-4 2 2 0 000 4z"/>
                </svg>
                Add to Cart
              </button>
            </div>
    </div>
  <Notify
      :message="notifyMsg"
    />
</div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import { useCartStore } from '@/stores/cart'
import { useMenuStore } from '@/stores/menu'
import autoAnimate from '@formkit/auto-animate'
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Notify from '@/components/Notify.vue'

const menuStore = useMenuStore()
const cartStore = useCartStore()
const authStore = useAuthStore()
const router = useRouter()
const route = useRoute()
const nowInCart = ref(false)
const parentButtons = ref(null)
const url = ref(import.meta.env.VITE_API_URL)
const menuId = ref(route.params.id)
const notifyMsg = ref('')

onMounted(async()=> {
  parentButtons.value && autoAnimate(parentButtons.value)
  const res = await menuStore.getSpecificMenu(menuId.value)
  
  if (!res) {
    notifyMsg.value = 'Error fetching menu. Please try again!'
    setTimeout(() => {
      notifyMsg.value = ''
    }, 4000)
  }
})

const addedToCart = computed(()=> {
  return nowInCart.value
})

const addToCart = ()=> {
  if (!authStore.user) {
    return router.push({ name: 'login'})
  }
  menuStore.menu.dateAddedToCart = new Date().toLocaleDateString()
  cartStore.addToCart(menuStore.menu)
  nowInCart.value = true
}
</script>

<style scoped>
.transition-transform {
  transition: transform 0.2s ease;
}

.transform:hover {
  transform: scale(1.05);
}
</style>
