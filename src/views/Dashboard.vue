<template>
<div class="bg-[#18082f] text-white min-h-screen">

  <div class="max-w-6xl mx-auto p-6 space-y-4">
    <!-- Header Section -->
    <div class="text-center">
      <h1 class="text-2xl font-semibold">Hi, {{ authStore.user.name }}</h1>
      <p class="text-md mt-2">Your Referral ID: <span class="text-[#ef6002]">{{ authStore.user.referral_id }}</span></p>
    </div>

    <!-- Orders Section -->
    <div class="bg-slate-100 p-6 rounded-lg shadow-md text-[#18082f]">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg lg:text-2xl font-semibold">Your Orders</h2>
        <router-link 
            :to="{ name: 'orders'}" 
            class="bg-[#ef6002] opacity-80 px-4 py-1 text-xl font-extrabold text-white rounded-md hover:bg-opacity-70">
            &rightarrow;
        </router-link>
      </div>

      <ul class="space-y-4">
        <li class="border-b-2 border-slate-300 pb-2 flex justify-between">
          <span class="truncate">Burger & Fries</span>
          <span class="text-[#ef6002]">Delivered</span>
        </li>
        <li class="border-b-2 border-slate-300 pb-2 flex justify-between">
          <span>Pepperoni Pizza</span>
          <span class="text-[#ef6002]">In Progress</span>
        </li>
        <li class="border-b-2 border-slate-300 pb-2 flex justify-between">
          <span>Pasta & Salad</span>
          <span class="text-[#ef6002]">Pending...</span>
        </li>
      </ul>
    </div>

    <!-- Cart Section -->
    <div class="bg-slate-100 p-6 rounded-lg shadow-md text-[#18082f]">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg lg:text-2xl font-semibold">Items in Cart</h2>
        <router-link 
            :to="{ name: 'cart'}" 
            class="bg-[#ef6002] opacity-80 px-4 py-1 text-xl font-extrabold text-white rounded-md hover:bg-opacity-70">
            &rightarrow;
        </router-link>
      </div>
      <ul class="space-y-4">
        <li class="border-b pb-2 flex justify-between">
          <span>Burger - 2x</span>
          <span class="font-medium">$10</span>
        </li>
        <li class="border-b pb-2 flex justify-between">
          <span>Pizza - 1x</span>
          <span class="font-medium">$15</span>
        </li>
        <li class="border-b pb-2 flex justify-between">
          <span>Soda - 3x</span>
          <span class="font-medium">$6</span>
        </li>
      </ul>
    </div>

    <!-- Account Overview -->
    <div class="bg-white p-6 rounded-lg shadow-md text-[#18082f]">
      <h2 class="text-2xl font-semibold mb-4">Account Overview</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-4 bg-[#ef6002] text-white rounded-xl shadow-lg">
          <h3 class="text-lg font-medium">Total Orders</h3>
          <p class="text-2xl font-bold">5</p>
        </div>
        <div class="p-4 bg-[#ef6002] text-white rounded-xl shadow-lg">
          <h3 class="text-lg font-medium">Items in Cart</h3>
          <p class="text-2xl font-bold">6</p>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
</script>