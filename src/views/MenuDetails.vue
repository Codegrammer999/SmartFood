<template>
  <div class="flex flex-col items-center justify-center">
    <div class="max-w-6xl mx-auto p-4 md:p-6 lg:p-8">
      <div class="bg-white text-[#18082f] rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
        <Image 
          :src="`${backendUrl + '/storage/' + menuStore.menu.image}`" 
          :alt="menuStore.menu.category" 
          class="w-full h-64 md:h-48 object-cover"
        />

        <div class="p-4 md:p-6">
          <h2 class="text-xl md:text-2xl font-bold">{{ menuStore.menu.name }}</h2>
          <p class="mt-2 text-gray-700">{{ menuStore.menu.description }}</p>
          <div class="mt-4 flex flex-col md:flex-row items-center justify-between">
            <span class="text-xl font-semibold text-[#ef6002]">&#8358;{{ menuStore.menu.price }}</span>
            <span class="bg-[#ef6002] text-white px-3 py-1 rounded-full text-sm mt-2 md:mt-0">{{ menuStore.menu.category }}</span>
          </div>

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
      </div>
    </div>
    <Notify
      :message="notifyMsg"
    />
  </div>
</template>

<script setup>
import Image from '@/components/Image.vue'
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
const backendUrl = ref(import.meta.env.VITE_API_URL)
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
