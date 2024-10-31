<template>
<div class="bg-[#18082f] text-white p-4 flex flex-col justify-between relative" :class="{ 'opacity-30': approveModal }">
  <!-- Cart Items Section -->
  <div class="p-4" ref="parent">
    <h1 class="text-3xl font-bold mb-6 text-cente text-slate-200" v-if="cartStore.cartItems.length">Your Cart</h1>

    <!-- Cart Item -->
    <div class="space-y-4" v-if="cartStore.cartItems.length">
      <div class="bg-white text-[#18082f] rounded-lg w-full" 
        v-for="item in cartStore.cartItems"
        :key="item.id">

        <div class="px-4">
          <div class="text-xl font-semibold flex justify-between items-center p-2">
            <div class="flex">
              <p class="p-2">{{ item.name }}</p><span class="text-lg p-2 font-light text-[#ef6002]">- {{ item.quantity }}</span>
            </div>
            <p class="font-normal p-2">&#8358;{{ item.price }}</p>
          </div>
          <p class="text-sm text-gray-500">{{ item.category }}</p>
          <p class="text-sm text-gray-500">Added on: <span>{{ item.dateAddedToCart }}</span></p>
        </div>

        <div class="flex items-center justify-between space-x-2 px-4 py-2 mt-6">
            <div class="flex space-x-6">
              <button
                  @click="cartStore.addToCart(item)"
                  class="bg-[#ef6002] text-white rounded-full size-12 flex items-center justify-center text-xl font-bold">
                  &plus;
                </button>
                <button
                  @click="decrementQuantity(item)" 
                  class="bg-[#ef6002] text-white rounded-full size-12 flex items-center justify-center text-xl font-bold">
                  &minus;
                </button>
            </div>

          <button 
            class="text-red-500"
            @click="approveDelete(item)">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-1 14H6L5 7M9 4h6M10 2h4a1 1 0 011 1v1M7 7h10" />
            </svg>
          </button>
        </div>

      </div>
    </div>

    <div v-else class="text-xl opacity-50 grid place-items-center min-h-[500px]">
      <p>No items in cart</p>
    </div>
  </div>

  <!-- Checkout Section -->
  <div class="max-w-4xl mx-auto mt-8" v-if="cartStore.cartItems.length">
    <div class="flex justify-between items-center">
      <router-link
        :to="{ name: 'checkout' }"
        class="bg-[#ef6002] text-white px-4 py-2 rounded-md font-bold hover:bg-[#ff7b33] duration-300">
        Proceed to Checkout - &#8358;{{ cartStore.totalPrice }}
      </router-link>
    </div>
  </div>
</div>

<div
  v-if="approveModal"
  class="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-10/12 text-center bg-white bg-opacity-90 z-50 rounded space-y-2 p-2 text-slate-800">
    <p class="p-4 font-semibold">Are you sure you want to remove item from cart?</p>
    <button
      @click="removeItemFromCart" 
      class="bg-[#ef6002] hover:bg-white hover:ring hover:ring-[#ef6002] duration-300 text-white px-4 py-2 rounded-md m-2">Remove</button>
    <button @click="cancelItemRemoval" class="bg-white ring ring-[#ef6002] px-4 py-2 rounded-md m-2">Cancel</button>
</div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'
import autoAnimate from '@formkit/auto-animate'
import { onMounted, ref } from 'vue'

const cartStore = useCartStore()

const parent = ref(null)
const approveModal = ref(false)
const itemToDelete = ref(null)

const removeItemFromCart = ()=> {
  approveModal.value = false
  cartStore.removeFromCart(itemToDelete.value.id)
}

const cancelItemRemoval = ()=> {
  approveModal.value = false
}

const decrementQuantity = (item)=> {
  if (item.quantity <= 1) {
    return
  }
  item.quantity--
  cartStore.saveCart()
}

const approveDelete = (item)=> {
  approveModal.value = true
  itemToDelete.value = item
}

onMounted(()=> {
  parent.value && autoAnimate(parent.value)
  cartStore.loadCart()
})
</script>