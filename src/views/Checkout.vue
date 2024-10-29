<template>
<div class="bg-[#18082f] text-white min-h-screen p-4">
  <div class="max-w-4xl mx-auto">
    <h1 class="text-2xl font-bold text-[#ef6002] mb-6">Checkout</h1>

    <!-- Shipping Information -->
    <div class="bg-white opacity-90 text-[#18082f] p-6 rounded-lg mb-6">
      <h2 class="text-xl font-semibold mb-4">Shipping Information</h2>
      <form>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
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

    <!-- Payment Method -->
    <div class="bg-white opacity-90 text-[#18082f] p-6 rounded-lg mb-6">
      <h2 class="text-xl font-semibold mb-4">Payment Method</h2>
      <form>
        <div class="space-y-4">

          <RadioInput
            input-type="radio"
            payment-name="Bank Transfer"
          />

          <RadioInput
            input-type="radio"
            payment-name="Cash on Delivery"
          />

        </div>
      </form>
    </div>

    <!-- Order Summary -->
    <div class="bg-white opacity-90 text-[#18082f] p-6 rounded-lg mb-6">
      <h2 class="text-xl font-semibold mb-4">Order Summary</h2>
      <div class="space-y-2">

        <div 
          class="flex justify-between" 
          v-for="item in cartStore.cartItems"
          :key="item.id">
          <span>{{ item.name }}</span>
          <span>${{ item.price }}</span>
       </div>

        <hr class="my-2" />
        <div class="flex justify-between font-bold">
          <span>Total</span>
          <span>{{ cartStore.totalPrice }}</span>
        </div>
      </div>
    </div>

    <p class="text-center p-4 opacity-80">Note: If none of the fields are filled, your default info will be used.</p>

    <!-- Place Order Button -->
    <div class="flex justify-center">
      <button
        @click="handleCheckOut"
        class="bg-[#ef6002] text-white px-6 py-3 rounded-md font-bold hover:bg-[#ff7b33] transition duration-300">
        Place Order
      </button>
    </div>
  </div>
</div>
</template>

<script setup>
import CheckoutInput from '@/components/CheckoutInput.vue'
import RadioInput from '@/components/RadioInput.vue'
import { useRouter } from 'vue-router'
import { useOrderStore } from '@/stores/order'
import { useCartStore } from '@/stores/cart'
import CheckoutCard from '@/components/CheckoutCard.vue'

const orderStore = useOrderStore()
const cartStore = useCartStore()
const router = useRouter()

const handleCheckOut = () => {  
  orderStore.placeOrder(cartStore.cartItems)
  cartStore.clearCart()
  router.push({ name: 'orders' })
}
</script>