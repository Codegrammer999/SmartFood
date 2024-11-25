<template>
  <div class="p-4">
    <h1 class="text-2xl pb-4 font-bold text-slate-100">Dashboard</h1>

  <div class=" flex justify-center items-center">
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
  
        <div class="backdrop-blur-lg bg-white/10 p-4 rounded-lg shadow-md">
          <h2 class="text-xl font-bold">Welcome, {{ user.name }} 👋</h2>
          <p class="text-sm mt-2">Glad to have you back! Here's an overview of your recent activity.</p>
        </div>

        <div class="p-4 backdrop-blur-lg bg-white/10 rounded-md flex flex-col shadow-md">
          <div class="text-md">
            <p class="text-xl font-semibold pb-2">Wallet</p>
            <p class="font-thin">Main: &#8358;{{ user.mainWallet ?? 0.00 }}</p>
	          <p class="font-thin">Bonus: &#8358;{{ user.bonusWallet ?? 0.00 }}</p>
          </div> 
          <button @click="$router.push({ name: 'payment'})" class="bg-[#ef6002] p-2 mt-4 rounded-md">Top up</button>
        </div>

        <div class="p-4 backdrop-blur-lg bg-white/10 rounded-md flex flex-col shadow-md">
          <div class="text-md">
            <p class="text-xl font-semibold pb-2">Purchased codes</p>
            <p class="font-thin">Available: {{ user.total_codes ?? 0 }}</p>
	          <p class="font-thin">Total codes used: {{ user.used_codes ?? 0 }}</p>
	          <p class="font-thin text-sm text-center pt-2">Maximum purchasable codes: 5</p>
          </div> 
        </div>

        <!-- Item in carts -->
         <div>
            <div class="space-y-3 backdrop-blur-lg bg-white/10 p-6 m-1 rounded-md" v-if="cartStore.cartItems.length">
                <div class="p-4 backdrop-blur-lg bg-white/10 rounded-xl shadow-lg">
                  <h3 class="text-lg font-medium">Items In Cart </h3>
                  <p class="text-md font-normal">{{ cartStore.itemsInCart }}</p>
                </div>

                <div class="p-4 backdrop-blur-lg bg-white/10 rounded-xl shadow-lg">
                  <h3 class="text-lg font-medium">Total Price In Cart</h3>
                  <p class="text-md font-normal">&#8358;{{ cartStore.totalPrice }}</p>
                </div>
            </div>
            <div v-else class="backdrop-blur-lg bg-white/10 p-4 rounded-xl shadow-lg">
              <h3 class="text-xl font-semibold mb-4">Cart Details</h3>
              <div class="flex justify-center space-x-4">
              <p class="text-center opacity-70">You have no items in cart!</p>
              <ShoppingCartIcon class="size-7 opacity-40"/>
              </div>
            </div>
        </div>

        <!-- Recent Orders -->
        <div class="backdrop-blur-lg bg-white/10 p-6 rounded-md shadow-md">
          <h3 class="text-xl font-semibold mb-4">Recent Orders</h3>
          <div v-if="orderStore.orders.length" class="space-y-4">
            <div 
              v-for="order in orderStore.orders.slice(0, 3)" 
              :key="order.id" 
              class="p-4 bg-white bg-opacity-50 rounded-lg flex justify-between items-center">
              
              <div>
                <h4 class="font-semibold">Order #{{ order.id }}</h4>
                <p class="text-sm">Placed on: {{ order.placedAt }}</p>
              </div>
              <span 
                :class="statusClass(order.status)" 
                class="px-3 py-1 rounded-full text-sm font-medium">
                {{ order.status }}
              </span>
            </div>
          </div>
          <div v-else class="text-center opacity-70">No recent orders.</div>
        </div>

        <!-- Account Info -->
        <div class="backdrop-blur-lg bg-white/10 p-6 rounded-md shadow-md">
          <h3 class="text-xl font-semibold mb-4">Account Information</h3>
          <p><span class="font-semibold">Name:</span> {{ user.name }}</p>
          <p><span class="font-semibold">Email:</span> {{ user.email }}</p>
          <p><span class="font-semibold">Referral id:</span> {{ user.referral_id }}</p>
        </div>
    </div>
  </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import { useOrderStore } from '@/stores/order'
import { useCartStore } from '@/stores/cart'
import { onMounted } from 'vue'
import { ShoppingCartIcon } from '@heroicons/vue/24/solid'

const authStore = useAuthStore()
const orderStore = useOrderStore()
const cartStore = useCartStore()
const user = authStore.user

onMounted(() => {
  orderStore.loadOrders()
})

const statusClass = (status) => {
  switch (status) {
    case 'pending':
      return 'bg-white text-yellow-500'
    case 'completed':
      return 'bg-white text-green-500'
    case 'cancelled':
      return 'bg-white text-red-500'
    default:
      return 'bg-white text-black'
  }
}
</script>
