<template>
  <div class="bg-whit bg-opacity-80 p-4">
    <h1 class="text-2xl font-bold text-slate-100">Dashboard</h1>

    <div class="max-w-6xl m-auto grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
      <!-- Main Content -->
      <section class="col-span-1 md:col-span-3 space-y-6">
        <!-- Welcome Section -->
        <div class="backdrop-blur-lg bg-white/10 text-white p-6 rounded-lg shadow-md">
          <h2 class="text-xl font-bold">Welcome, {{ user.name }} 👋</h2>
          <p class="text-sm mt-2">Glad to have you back! Here's an overview of your recent activity.</p>
        </div>

        <div class="p-4 backdrop-blur-lg bg-white/10 text-white rounded-md flex justify-between shadow-md">
          <div class="text-lg font-semibold">
            <p class="text-xl pb-2">Wallet</p>
            <p class="font-normal">&#8358;{{ user.points }}</p>  
          </div> 
          <button class="bg-[#ef6002] opacity-80 p-2 mt-8 rounded-md text-white">Top up</button>
        </div>

        <!-- Item in carts -->
         <div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 backdrop-blur-lg bg-white/10 text-white p-6 m-1 rounded" v-if="cartStore.cartItems.length">
                <div class="p-4 backdrop-blur-lg bg-white/10 text-white rounded-xl shadow-lg">
                  <h3 class="text-lg font-medium">Items In Cart </h3>
                  <p class="text-md font-normal">{{ cartStore.itemsInCart }}</p>
                </div>

                <div class="p-4 backdrop-blur-lg bg-white/10 text-white rounded-xl shadow-lg">
                  <h3 class="text-lg font-medium">Total Price In Cart</h3>
                  <p class="text-md font-normal">&#8358;{{ cartStore.totalPrice }}</p>
                </div>
            </div>
            <div v-else class="backdrop-blur-lg bg-white/10 text-white p-4 rounded-xl shadow-lg">
              <h3 class="text-xl font-semibold mb-4">Cart Details</h3>
              <div class="flex justify-center space-x-4">
              <p class="text-center opacity-70">You have no items in cart!</p>
              <ShoppingCartIcon class="size-7 opacity-40"/>
              </div>
            </div>
        </div>

        <!-- Recent Orders -->
        <div class="backdrop-blur-lg bg-white/10 text-white p-6 rounded-md shadow-md">
          <h3 class="text-xl font-semibold mb-4">Recent Orders</h3>
          <div v-if="orderStore.orders.length" class="space-y-4">
            <div 
              v-for="order in orderStore.orders.slice(0, 3)" 
              :key="order.id" 
              class="p-4 bg-white bg-opacity-50 rounded-lg flex justify-between items-center">
              
              <div>
                <h4 class="font-semibold">Order #{{ order.id }}</h4>
                <p class="text-sm text-white">Placed on: {{ order.placedAt }}</p>
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
        <div class="backdrop-blur-lg bg-white/10 text-white p-6 rounded-md shadow-md">
          <h3 class="text-xl font-semibold mb-4">Account Information</h3>
          <p><span class="font-semibold">Name:</span> {{ user.name }}</p>
          <p><span class="font-semibold">Email:</span> {{ user.email }}</p>
          <p><span class="font-semibold">Referral id:</span> {{ user.referral_id }}</p>
        </div>
      </section>
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
