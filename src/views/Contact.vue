<template>
  <div class="container mx-auto px-4 lg:px-10 py-10 bg-[#958ca127]">
    <div class="flex items-center mb-6 space-x-2">
    <h1 class="text-xl lg:text-3xl font-bold text-center">Get In Touch With Us</h1>
      <WalletIcon class="size-8"/>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Contact Form -->
      <div class="p-8 bg-white shadow rounded-lg">
        <h2 class="text-lg font-semibold mb-4 text-[#333]">Send Us a Message</h2>
        <form @submit.prevent="submitForm">
          <div class="mb-6">
            <label for="name" class="block mb-1 font-medium text-[#555]">Your Name</label>
            <input 
              type="text" 
              id="name" 
              v-model="formData.name"
              placeholder="Enter your name" 
              class="w-full px-4 py-2 border rounded-lg bg- text-[#333] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ef6002]"
              required
            />
          </div>

          <div class="mb-6">
            <label for="email" class="block mb-1 font-medium text-[#555]">Email Address</label>
            <input 
              type="email" 
              id="email" 
              v-model="formData.email"
              placeholder="Enter your email" 
              class="w-full px-4 py-2 border rounded-lg bg-white text-[#333] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ef6002]"
              required
            />
          </div>

          <div class="mb-6">
            <label for="message" class="block mb-1 font-medium text-[#555]">Your Message</label>
            <textarea 
              id="message" 
              v-model="formData.message"
              rows="4" 
              placeholder="Write your message here..."
              class="w-full px-4 py-2 border rounded-lg bg-white text-[#333] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ef6002]"
              required
            ></textarea>
          </div>

          <button 
            type="submit"
            class="w-full bg-[#ef6002] text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Submit
          </button>
        </form>
      </div>

      <!-- Contact Information -->
      <div class="p-8 bg-white shadow-md rounded-lg space-y-6">
        <h2 class="text-lg font-semibold text-[#333]">Contact Information</h2>
        <p class="text-[#555]">If you have any questions, feel free to reach out to us through the following ways:</p>

        <div class="flex items-center space-x-2">
          <PhoneIcon class="text-[#ef6002] size-8"></PhoneIcon>
          <p class="text-[#555]">+234 123 456 7890</p>
        </div>

        <div class="flex items-center space-x-4">
          <EnvelopeIcon class="text-[#ef6002] size-8"></EnvelopeIcon>
          <p class="text-[#555]">support@yourcompany.com</p>
        </div>

        <div class="flex items-center space-x-4">
          <MapIcon class="text-[#ef6002] size-8"></MapIcon>
          <p class="text-[#555]">123, Main Street, Ibadan, Nigeria</p>
        </div>

        <div class="flex items-center space-x-4">
          <ClockIcon class="text-[#ef6002] size-8"></ClockIcon>
          <p class="text-[#555]">Monday - Friday: 9:00 AM - 6:00 PM</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { PhoneIcon, EnvelopeIcon, MapIcon, ClockIcon, WalletIcon } from '@heroicons/vue/24/solid'
import { reactive } from 'vue'

const formData = reactive({
  name: '',
  email: '',
  message: ''
})

function submitForm() {
  console.log('Form submitted:', formData)
  alert('Thank you for reaching out to us!')
  formData.name = ''
  formData.email = ''
  formData.message = ''
}
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
