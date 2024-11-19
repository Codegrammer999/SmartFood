<template>
  <div class="flex items-center justify-center p-2 pt-4">
    <div class="backdrop-blur-lg bg-white/10 p-6 rounded-lg shadow-lg max-w-sm md:max-w-lg lg:max-w-2xl w-full">
      
      <h1 class="text-3xl font-extrabold text-center mb-2"><span class="text-[#ef6002]">Smart</span>Food</h1>
      <p class="text-white text-center mb-6"><i>The home of good food!.</i></p>

      <h2 class="text-2xl font-bold text-white text-cente mb-6">Sign Up</h2>

      <form @submit.prevent="register" class="space-y-6">
        <!-- Name -->
        <div ref="nameParent">
          <input
            v-model="formData.name"
            type="text"
            class="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#ef6002]"
            placeholder="Name"
            required
          />
          <ParagraphError :error="formData.error.name"/>
          <ParagraphError :error="errors.name[0]" v-if="errors.name"/>
        </div>

        <div ref="usernameParent">
          <input
            v-model="formData.username"
            type="text"
            class="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#ef6002]"
            placeholder="Username"
            required
          />
          <ParagraphError :error="formData.error.username"/>
          <ParagraphError :error="errors.username[0]" v-if="errors.username"/>
        </div>

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

        <!-- Confirm Password -->
        <div>
          <input
            v-model="formData.password_confirmation"
            type="password"
            class="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#ef6002]"
            placeholder="Confirm Password"
            required
          />
        </div>

        <div>
          <select required class="w-full p-4 bg-white/10 rounded" v-model="formData.paymentMethod">
            <option value="">Payment method</option>
            <option value="transfer">Bank Transfer</option>
            <option value="coupon">Code</option>
          </select>
        </div>

        <!-- Referral ID -->
        <div ref="refParent">
          <input
            v-model="formData.referral_id"
            type="text"
            class="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#ef6002]"
            placeholder="Referral ID (Optional)"
          />
          <ParagraphError :error="errors.referral_id[0]" v-if="errors.referral_id"/>
        </div>

        <!-- Submit Button -->
        <div>
          <LoadingButton v-if="formData.isProcessing"/>
          <button
            v-else
            type="submit"
            class="w-full bg-[#ef6002] hover:bg-[#d45602] text-white font-semibold py-3 rounded-lg transition duration-300"
            :disabled="formData.isProcessing">
            Register
          </button>
        </div>

        <div class="text-center">
          <p class="text-sm text-white">
            Already have an account? 
            <router-link class="text-[#ef6002]" :to="{ name: 'login' }">Login</router-link>
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
import Notify from '@/components/Notify.vue'
import { useRouter } from 'vue-router'

const [ emailParent ] = useAutoAnimate()
const [ nameParent ] = useAutoAnimate()
const [ passwordParent ] = useAutoAnimate()
const [ refParent ] = useAutoAnimate()
const notifyMsg = ref('')
const router = useRouter()

onMounted(() => {
  errors.value = {}
})

let formData = reactive({
  name: '',
  username: '',
  email: '',
  password: '',
  password_confirmation: '',
  referral_id: '',
  paymentMethod: '',
  isProcessing: false,
  error: {}
})

const { register: registerStore } = useAuthStore()
let { errors } = storeToRefs(useAuthStore())

const register = async() => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    switch (true) {
        case formData.name === '':
            formData.error.name = 'Name field is required'
            break
        case formData.name.length < 6:
            formData.error.name = 'Name must be at least 6 characters'
            break
        case formData.username === '':
            formData.error.username = 'Username field is required'
            break
        case formData.username.length < 6:
            formData.error.username = 'Username must be at least 6 characters'
            break
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
          const res = await registerStore('/api/register', formData)
          
          if (res) {
            notifyMsg.value = `Welcome, ${formData.name.slice(0, 20)}...`

            setTimeout(() => {
              notifyMsg.value = ''
            }, 2000)

              if (formData.paymentMethod === 'transfer') {
                router.push({name: 'TransferPayment'})
              }else {
                router.push({name: 'CouponPayment'})
              }

            formData = {
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
                referral_id: '',
                error: {}
            }

          }else {
             notifyMsg.value = 'Registration Error!'
             formData.password = ''
             formData.password_confirmation = ''

             setTimeout(() => {
              notifyMsg.value = ''
             }, 4000)
          }
          break
    }
}
</script>
