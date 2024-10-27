<template>
    <div class="min-h-screen text-slate-100 flex items-center justify-center bg-[#18082f]">
      <div class="bg-white bg-opacity-30 shadow-md rounded-lg px-8 py-10 max-w-sm md:max-w-lg xl:max-w-xl w-full">
        <h2 class="text-3xl font-bold text-center mb-6 text-[#ef6002]">Login</h2>
  
        <form @submit.prevent="login" class="space-y-3">
          <p v-if="errors.message" class="text-center font-bold text-md text-red-500">{{ errors.message }}</p>

        <!-- Email -->
          <div>
            <label class="block text-sm font-medium mb-1" for="email">Email</label>
            <input
              v-model="formData.email"
              type="email"
              id="email"
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#ef6002] bg-slate-200 text-slate-800"
              placeholder="Email Address"
              required
            />
            <ParagraphError :error="formData.error.email"/>
            <ParagraphError :error="errors.email[0]" v-if="errors.email"/>
          </div>
  
          <!-- Password -->
          <div>
            <label class="block text-sm font-medium mb-1" for="password">Password</label>
            <input
              v-model="formData.password"
              type="password"
              id="password"
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#ef6002] bg-slate-200 text-slate-800"
              placeholder="Password"
              required
            />
            <ParagraphError :error="formData.error.password"/>
            <ParagraphError :error="errors.password[0]" v-if="errors.password"/>
          </div>
  
          <!-- Submit Button -->
          <div>
          <LoadingButton v-if="formData.isProcessing"/>
            <button
              v-else
              type="submit"
              class="w-full bg-[#ef6002] hover:bg-[#d45602] text-white font-bold py-2 rounded-md focus:outline-none transition duration-300"
              :disabled="formData.isProcessing"
            >
              Submit
            </button>
          </div>
  
          <div class="text-center">
              <p>Don't have an account? <router-link :to="{ name: 'register' }">Register</router-link></p>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import LoadingButton from '@/components/LoadingButton.vue'
  import ParagraphError from '@/components/ParagraphError.vue'
  import { useAuthStore } from '@/stores/auth'
  import { storeToRefs } from 'pinia'
  import { onMounted, reactive, watch } from 'vue'
  
  onMounted(()=> {
      errors.value = {}
  })
  
  const formData = reactive({
      email: ''.trim(),
      password: ''.trim(),
      isProcessing: false,
      error: {}
  })
  
  const { login: loginStore  } = useAuthStore()
  let { errors } = storeToRefs(useAuthStore())
  
  watch(errors, (val)=> {
      if (val) {
          formData.isProcessing = false
      }
  })
  
  const login = ()=> {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      switch (true) {
          case formData.email === '':
              formData.error.email = 'Email field is required'
              formData.error.name = ''
              formData.error.password = ''
              break
  
          case !emailRegex.test(formData.email):
              formData.error.email = 'Please enter a valid email address'
              formData.error.name = ''
              formData.error.password = ''
              break
  
              case formData.password === '':
              formData.error.password = 'Password field is required'
              formData.error.name = ''
              formData.error.email = ''
              break
  
          case formData.password.length < 6:
              formData.error.password = 'Please use a more secure password'
              formData.error.name = ''
              formData.error.email = ''
              break
      
          default:
              formData.isProcessing = true
              formData.error = {}
              loginStore('/api/login', formData)
              break
      }
  }
  </script>