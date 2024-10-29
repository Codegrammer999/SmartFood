<template>
  <LoadingSpinner v-show="authStore.isFetchingUser">Loading</LoadingSpinner>
  <div v-show="!authStore.isFetchingUser">
    <div class="px-2 sm:px-6 lg:px-24">
        <Header/>

      <main ref="pages">
        <RouterView/>
      </main>
    </div>

    <FooterView 
        v-show="!($route.name === 'register') && !($route.name === 'login')"
        v-if="!authStore.user"
      />
    </div>
</template>

<script setup>
import { useAutoAnimate } from "@formkit/auto-animate/vue"
import Header from '@/components/Header.vue'
import FooterView from "./components/FooterView.vue"
import { useAuthStore } from "./stores/auth"
import LoadingSpinner from "./components/LoadingSpinner.vue"

const [ pages ] = useAutoAnimate()
const authStore = useAuthStore()
</script>