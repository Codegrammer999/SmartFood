<template>
  <div class="min-h-screen text-slate-100 flex items-center justify-center bg-[#18082f]">
    <div class="bg-white bg-opacity-30 shadow-md rounded-lg px-8 py-10 max-w-sm md:max-w-lg xl:max-w-xl w-full">
      <h2 class="text-3xl font-bold text-center mb-6 text-[#ef6002]">Register</h2>

      <form @submit.prevent="register" class="space-y-3">
        <!-- Name -->
        <div>
          <label class="block text-sm font-medium mb-1" for="name">Name</label>
          <input
            v-model="formData.name"
            type="text"
            id="name"
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#ef6002] bg-slate-200 text-slate-800"
            placeholder="Name"
            required
          />
          <ParagraphError :error="formData.error.name"/>
          <ParagraphError :error="errors.name[0]" v-if="errors.name"/>
        </div>

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

        <!-- Confirm Password -->
        <div>
          <label class="block text-sm font-medium mb-1" for="confirmPassword">Confirm Password</label>
          <input
            v-model="formData.password_confirmation"
            type="password"
            id="confirmPassword"
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#ef6002] bg-slate-200 text-slate-800"
            placeholder="Confirm Password"
            required
          />
        </div>

        <!-- Referral ID -->
        <div>
          <label class="block text-sm font-medium mb-1" for="referralId">Referral ID(Optional)</label>
          <input
            v-model="formData.referral_id"
            type="text"
            id="referralId"
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#ef6002] bg-slate-200 text-slate-800"
            placeholder="Enter referral ID (optional)"
          />
          <ParagraphError :error="errors.referral_id[0]" v-if="errors.referral_id"/>
          <ParagraphError :error="errors.referralErr" v-if="errors.referralErr"/>
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
            <p>Already have an account? <router-link :to="{ name: 'login' }">login</router-link></p>
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
    name: ''.trim(),
    email: ''.trim(),
    password: ''.trim(),
    password_confirmation: ''.trim(),
    referral_id: '',
    isProcessing: false,
    error: {}
})

const { register: registerStore  } = useAuthStore()
let { errors } = storeToRefs(useAuthStore())

watch(errors, (val)=> {
    if (val) {
        formData.isProcessing = false
    }
})

const register = ()=> {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    switch (true) {
        case formData.name === '':
            formData.error.name = 'Name field is required'
            formData.error.email = ''
            formData.error.password = ''
            break

        case formData.name.length < 6:
            formData.error.name = 'Please enter maximum of 5 characters'
            formData.error.email = ''
            formData.error.password = ''
            break

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
            registerStore('/api/register', formData)
            break
    }
}
</script>