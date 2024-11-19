<template>
  <LoadingSpinner v-show="authStore.isFetchingUser">Loading</LoadingSpinner>
  <div v-show="!authStore.isFetchingUser">
    <div class="px-2 sm:px-6 lg:px-24">

        <Header 
            v-show="!($route.name === 'register')
            && !($route.name === 'login')
            && !($route.name === 'RegistrationPayment')
            && !($route.name === 'CouponPayment')
            && !($route.name === 'WaitingPaymentConfirmation')
            && !($route.name === '404')"
          />

      <main class="slide">
          <router-view 
            v-slot="{ Component }">
            <Transition 
              name="slide" 
              mode="out-in">
              <component :is="Component"/>
            </Transition>
          </router-view>
          <LoadingOverlay/>
      </main>
    </div>

    <FooterView 
        v-show="!($route.name === 'register')
        && !($route.name === 'login')
        && !($route.name === 'RegistrationPayment')
        && !($route.name === 'CouponPayment')
        && !($route.name === 'WaitingPaymentConfirmation')
        && !($route.name === '404')"
        v-if="!authStore.isFetchingUser && !authStore.user"
      />
    </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import FooterView from "./components/FooterView.vue"
import { useAuthStore } from "./stores/auth"
import LoadingSpinner from "./components/LoadingSpinner.vue"
import LoadingOverlay from './components/LoadingOverlay.vue'

const authStore = useAuthStore()
</script>