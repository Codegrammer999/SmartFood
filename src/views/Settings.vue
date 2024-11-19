<template>
  <div class="bg-[#18082f] text-white p-4">
    <h1 class="text-xl font-semibold text-white pb-2">Account Settings</h1>

    <!-- Main Content -->
    <div class="max-w-4xl mx-auto space-y-6">
      <!-- User Info -->
      <section class="backdrop-blur-lg bg-white/10 text-white text-opacity-90 p-4 rounded">
        <h2 class="text-xl font-semibold mb-6">Your Information</h2>
        <div class="space-y-2">
          <p><span class="font-bold">Name:</span> {{ user.name }}</p>
          <p><span class="font-bold">Email:</span> {{ user.email }}</p>
          <p><span class="font-semibold">Referral id: </span>{{ user.referral_id }}</p>
          <div class="flex space-x-2 bg-white focus:bg-[#ef6102b2] duration-300 text-slate-800 w-fit px-4 py-2 rounded-md" @click="copyReferralId">
            <p>{{ changeCopyText }}</p>
            <ClipboardDocumentCheckIcon class="size-6" v-if="copied"/>
            <ClipboardIcon class="size-6" v-else/>
        </div>
        </div>
      </section>

      <section class="backdrop-blur-lg bg-white/10 text-white text-opacity-90 p-4 rounded">
        <h2 class="text-xl font-semibold mb-6">Change Password</h2>
        <form @submit.prevent="updatePassword" class="space-y-4">
          <div>
            <label for="currentPassword" class="block font-semibold">Current Password</label>
            <CheckoutInput
              -input-type="password"
              id="currentPassword"
              placeholder="Enter current password"/>
          </div>
          <div>
            <label for="newPassword" class="block font-semibold">New Password</label>
            <CheckoutInput
              -input-type="password"
              id="newPassword"
              placeholder="Enter new password"/>
          </div>
          <button 
            class="bg-white bg-opacity-80 text-slate-800 px-4 py-2 rounded-md hover:bg-white focus:ring-2 focus:ring-[#ef6002] duration-300 focus-within:text-slate-800">
            Update Password
          </button>
        </form>
      </section>

      <div class="bg-white opacity-80 text-slate-800 p-2 flex items-center justify-center w-fit rounded" @click="logoutUser">
        <ArrowLeftEndOnRectangleIcon class="size-8"/>
        <p>Sign out</p>
      </div>
    </div>

    <Notify :message="notifyMsg"/>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import CheckoutInput from '@/components/CheckoutInput.vue'
import { 
    ClipboardIcon, 
    ClipboardDocumentCheckIcon, 
    ArrowLeftEndOnRectangleIcon 
    } from '@heroicons/vue/24/solid'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import Notify from '@/components/Notify.vue'

const authStore = useAuthStore()
const user = authStore.user
const username = ref('')
const currentPassword = ref('')
const newPassword = ref('')
const router = useRouter()
const notifyMsg = ref('')

const updateUsername = async () => {
  try {
    await authStore.updateUsername(username.value)
    alert('Username updated successfully!')
  } catch (error) {
    console.error(error)
    alert('Failed to update username.')
  }
}

const updatePassword = async () => {
  try {
    await authStore.updatePassword(currentPassword.value, newPassword.value)
    alert('Password updated successfully!')
  } catch (error) {
    console.error(error)
    alert('Failed to update password.')
  }
}

const deleteAccount = async () => {
  const confirmDelete = confirm('Are you sure you want to delete your account? This action cannot be undone.')
  if (confirmDelete) {
    try {
      await authStore.deleteAccount()
      alert('Account deleted successfully.')
    } catch (error) {
      console.error(error)
      alert('Failed to delete account.')
    }
  }
}

const logoutUser = async() => {
  const res = await authStore.logout()

  if (res) {
    router.push({name: 'login'})
  }else {
    notifyMsg.value = 'Something went wrong!'
    setTimeout(() => { notifyMsg.value = '' }, 4000)
  }
}

const copied = ref(false)

const changeCopyText = computed(()=> {
    if (copied.value) {
        return 'Copied'
    }
    return 'Copy'
})

const copyReferralId = ()=> {
    const id = authStore.user.referral_id
    navigator.clipboard.writeText(id)
    .then(()=> {
        copied.value = true
        setTimeout(() => {
            copied.value = false
        }, 2000)
    })
    .catch((error)=> {
        alert('Error in copying referral id')
    })   
}
</script>
