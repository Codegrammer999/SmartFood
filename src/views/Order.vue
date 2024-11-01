<template>
  <div class="text-white bg-[#230d42] p-6">
    <div class="max-w-4xl mx-auto space-y-8" v-if="orderStore">
      <h1 class="text-2xl font-semibold text-white">Your Orders</h1>

      <div v-if="orderStore.orders.length">
        <!-- Filter Orders -->
        <div class="flex justify-between items-center bg-[#311855] p-4 rounded-md shadow-md">
          <label for="orderStatus" class="text-sm">Filter by Status:</label>
          <select id="orderStatus" class="p-2 rounded bg-white text-slate-800 shadow-sm focus:outline-none">
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>

        <!-- Orders List -->
        <div class="space-y-6 mt-6">
          <div 
            v-for="order in orderStore.orders" 
            :key="order.id" 
            class="bg-[#311855] p-6 rounded-lg shadow-lg space-y-4">
            
            <div class="flex justify-between items-center">
              <div>
                <h2 class="text-md">Order #{{ order.id }}</h2>
                <p class="text-sm text-gray-400">Placed on: {{ order.placedAt }}</p>
              </div>
              <span 
                :class="statusClass(order.status)" 
                class="px-3 py-1 rounded-full text-sm font-medium">
                {{ order.status }}
              </span>
            </div>

            <div class="space-y-4">
              <div 
                v-for="item in order.items" 
                :key="item.id" 
                class="bg-white bg-opacity-10 p-4 rounded-md flex justify-between items-center">
                
                <div>
                  <h3 class="font-medium text-lg">{{ item.name }}</h3>
                  <p class="text-sm text-white">Added on: {{ item.placedAt }}</p>
                </div>
                
                <div class="text-right">
                  <p class="font-semibold text-xl">&#8358;{{ item.price }}</p>
                  <button 
                    class="mt-2 bg-[#F97316] text-white px-4 py-2 rounded-md hover:bg-[#ff7b33] transition duration-300">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="flex justify-center items-center h-[400px]">
        <p class="text-xl opacity-70">No Orders Yet!</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useOrderStore } from '@/stores/order'
import { onMounted } from 'vue'

const orderStore = useOrderStore()

onMounted(() => {
  orderStore.loadOrders()
})

const statusClass = (status) => {
  switch (status) {
    case 'pending':
      return 'bg-yellow-500 text-white'
    case 'completed':
      return 'bg-green-500 text-white'
    case 'cancelled':
      return 'bg-red-500 text-white'
    default:
      return 'bg-gray-400 text-black'
  }
}
</script>
