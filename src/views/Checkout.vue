<template>
  <div class="bg-[#18082f] text-white min-h-screen p-6">

    <Notify
      :title="notifyTitle"
      :message="notifyMsg"
      type="warning"
      v-if="callNotify"
      @close="callNotify = false"
    />

    <div class="max-w-4xl mx-auto space-y-8">
      <h1 class="text-3xl font-extrabold text-[#ef6002] mb-6">Checkout</h1>

      <!-- Shipping Information -->
      <div class="backdrop-blur-lg bg-white/10 text-white p-8 rounded-md shadow-md">
        <h2 class="text-2xl font-semibold mb-6">Shipping Information</h2>
        <form class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CheckoutInput
              -input-type="text"
              placeholder="Full Name"
            />
            <CheckoutInput
              -input-type="email"
              placeholder="Email Address"
            />
            <CheckoutInput
              -input-type="number"
              placeholder="Phone Number"
            />
            <CheckoutInput
              -input-type="text"
              placeholder="Address"
            />
            <CheckoutInput
              -input-type="text"
              placeholder="City"
            />
            <CheckoutInput
              -input-type="number"
              placeholder="Postal Code"
            />
          </div>
        </form>
      </div>

      <!-- Order Summary -->
      <div class="backdrop-blur-lg bg-white/10 text-white p-8 rounded-lg shadow-lg">
        <h2 class="text-2xl font-semibold mb-4">Order Summary</h2>
        <div class="space-y-3">
          <div
            v-for="item in cartStore.cartItems"
            :key="item.id"
          >
          <div class="flex justify-between items-center">
            <p>Food: {{ item.name }}</p>
            <p class="font-semibold">&#8358;{{ item.price }}</p>
          </div>
          <div class="flex justify-between items-center">
          <p>Quantity: </p>
          <p>{{ item.quantity }}</p>
          </div>
          </div>

          <hr class="my-4" />

          <div class="flex justify-between items-center text-xl font-bold">
            <span>Total</span>
            <span>&#8358;{{ cartStore.totalPrice }}</span>
          </div>
        </div>
      </div>

      <!-- Place Order Button -->
      <div class="flex justify-center">
        <button
          @click="handleCheckOut"
          class="bg-[#ef6002] text-white px-8 py-3 rounded-full font-bold text-lg shadow-md hover:bg-[#ff7b33] transition-all duration-300">
          Place Order
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import CheckoutInput from '@/components/CheckoutInput.vue'
import { useRouter } from 'vue-router'
import { useOrderStore } from '@/stores/order'
import { useCartStore } from '@/stores/cart'
import Notify from '@/components/Notify.vue'
import { ref } from 'vue'

const orderStore = useOrderStore()
const cartStore = useCartStore()
const router = useRouter()
const notifyMsg = ref('')
const notifyTitle = ref('')
const callNotify = ref(false)

const handleCheckOut = () => {
  if (!cartStore.cartItems.length) {
    notifyTitle.value = 'Empty cart!'
    notifyMsg.value = 'You have no items in cart, Please add'
    callNotify.value = true
    return
  }
  orderStore.placeOrder(cartStore.cartItems)
  cartStore.clearCart()
  router.push({ name: 'orders' })
}
</script>

<style scoped>
body {
  font-family: 'Poppins', sans-serif;
}
input {
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 16px;
  width: 100%;
  transition: border 0.2s;
}
input:focus {
  border-color: #ef6002;
  outline: none;
  box-shadow: 0 0 4px rgba(239, 96, 2, 0.5);
}
</style>
