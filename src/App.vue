<template>
  <div class="px-2 sm:px-6 lg:px-24">
      <Header/>

    <main ref="pages">
      <RouterView/>
    </main>
  </div>

  <FooterView/>
</template>

<script setup>
import { useAutoAnimate } from "@formkit/auto-animate/vue"
import Header from '@/components/Header.vue'
import FooterView from "./components/FooterView.vue"

const [ pages ] = useAutoAnimate()
</script>