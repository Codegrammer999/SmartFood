<template>
  <div class="flex items-center justify-center h-screen">
    <div class="backdrop-blur-lg bg-white/10 p-8 rounded-lg shado max-w-sm w-full">
      
      <h1 class="text-3xl font-extrabold mb-6"><span class="text-[#ef6002]">Smart</span>Food</h1>

      <h2 class="text-2xl font-bold text-white text-cente mb-6">Sign In</h2>

      <form @submit.prevent="login" class="space-y-6" ref="formParent">
        
        <!-- Email -->
        <div ref="emailParent">
          <input
            v-model="formData.email"
            type="email"
            class="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#ef6002]"
            placeholder="Email Address"
            required
          />
          <ParagraphError :error="formData.error.email"/>
          <ParagraphError :error="errors.email[0]" v-if="errors.email"/>
        </div>

        <!-- Password -->
        <div ref="passwordParent">
          <input
            v-model="formData.password"
            type="password"
            class="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#ef6002]"
            placeholder="Password"
            required
          />
          <ParagraphError :error="formData.error.password"/>
          <ParagraphError :error="errors.password[0]" v-if="errors.password"/>
        </div>

        <ParagraphError :error="errors.message" v-if="errors.message"/>

        <!-- Submit Button -->
        <div>
          <LoadingButton v-if="formData.isProcessing"/>
          <button
            v-else
            type="submit"
            class="w-full bg-[#ef6002] hover:bg-[#d45602] text-white font-semibold py-3 rounded-lg transition duration-300"
            :disabled="formData.isProcessing"
          >
            Sign in
          </button>
        </div>

        <div class="text-center">
          <p class="text-sm text-white">
            Don't have an account? 
            <router-link class="text-[#ef6002]" :to="{ name: 'register' }">Register</router-link>
          </p>
        </div>
      </form>
    </div>
      <Notify
      :message="notifyMsg"
    />
  </div>
</template>

<script setup>
import LoadingButton from '@/components/LoadingButton.vue'
import ParagraphError from '@/components/ParagraphError.vue'
import { useAuthStore } from '@/stores/auth'
import { useAutoAnimate } from '@formkit/auto-animate/vue'
import { storeToRefs } from 'pinia'
import { onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import Notify from '@/components/Notify.vue'

const [ formParent ] = useAutoAnimate()
const notifyMsg = ref('')
const router = useRouter()

onMounted(() => {
    errors.value = {}
})

let formData = reactive({
    email: '',
    password: '',
    isProcessing: false,
    error: {}
})

const { login: loginStore } = useAuthStore()
let { errors } = storeToRefs(useAuthStore())

const login = async() => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    switch (true) {
        case formData.email === '':
            formData.error.email = 'Email field is required'
            break
        case !emailRegex.test(formData.email):
            formData.error.email = 'Invalid email address'
            break
        case formData.password === '':
            formData.error.password = 'Password field is required'
            break
        case formData.password.length < 6:
            formData.error.password = 'Password must be at least 6 characters'
            break
        default:
          errors.value = {}
          formData.error = {}
          const res = await loginStore('/api/login', formData)

           if (res) {
            notifyMsg.value = 'Login Success. Redirecting to dashboard...'
            formData = {
                email: '',
                password: '',
                error: {}
            }
            setTimeout(() => {
              notifyMsg.value = ''
              router.push({name: 'dashboard'})
            }, 2000)
          }else {
             notifyMsg.value = 'Login Error!'
             formData.password = ''

             setTimeout(() => {
              notifyMsg.value = ''
             }, 4000)
          }
          break
    }
}
</script>
