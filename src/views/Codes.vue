<template>
    <div>
        <div class="flex justify-between items-baseline p-4">
            <h2 class="font-semibold text-2xl">Your codes</h2>
            
            <router-link v-if="!codes.length === 5" :to="{ name: 'PurchaseCode'}" class="px-4 py-2 rounded bg-[#ef6002]">Buy</router-link>
        </div>

        <div class="pb-8 px-4 sm:px-6 lg:px-8">
            <div v-if="codes.length" class="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <CodeCard
                    v-for="code in codes"
                    :key="code.id"
                    :code="code"
                />
            </div>

            <p v-else class="text-center opacity-60 text-lg">You have no codes yet</p>
        </div>
        <Notify :message="notifyMsg"/>
    </div>
</template>

<script setup>
import CodeCard from '@/components/CodeCard.vue'
import Notify from '@/components/Notify.vue'
import { onMounted, ref } from 'vue'

const codes = ref([])
const notifyMsg = ref('')

const fetchCodes = async () => {
    try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/user/codes`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('Dababy_token')}`
            }
        })

        const data = await res.json()

        if (res.ok && res.status === 200) {
            codes.value = data
        }
        
    } catch (error) {
        notifyMsg.value = error
    }finally {
        setTimeout(() => { notifyMsg.value = '' }, 4000)
    }
}

onMounted(() => fetchCodes())
</script>