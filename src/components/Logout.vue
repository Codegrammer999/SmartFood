<template>
    <button
        @click="logout" 
        class="w-full text-center px-3 py-1 bg-white text-slate-800 rounded-md duration-300">
        Logout
    </button>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()

const logout = async() => {
    await authStore.logout()
}
</script>