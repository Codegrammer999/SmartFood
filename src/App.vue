<template>
  <LoadingSpinner v-show="authStore.isFetchingUser">Loading</LoadingSpinner>
  <div v-show="!authStore.isFetchingUser">
    <div class="px-2 sm:px-6 lg:px-24">
        <Header/>

      <main class="slide">
          <router-view v-slot="{ Component }">
            <Transition name="slide" mode="out-in">
              <component :is="Component"/>
            </Transition>
          </router-view>
      </main>
    </div>

    <FooterView 
        v-show="!($route.name === 'register') && !($route.name === 'login')"
        v-if="!authStore.isFetchingUser && !authStore.user"
      />
    </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import FooterView from "./components/FooterView.vue"
import { useAuthStore } from "./stores/auth"
import LoadingSpinner from "./components/LoadingSpinner.vue"

const authStore = useAuthStore()
</script>