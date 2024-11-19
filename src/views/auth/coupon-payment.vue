<template>
    <div class="container m-auto p-4">
        <p class="p-2 text-xl">Enter Code below</p>
     
        <form @submit.prevent="checkCode" class="flex flex-col space-y-8 pt-4">
            <input
                required 
                type="number"
                placeholder="Paste or enter code"
                class="w-full p-2 text-slate-700 placeholder:text-center rounded-sm focus:outline-none"
                v-model="form.code"
            >

            <button class="px-4 py-2 bg-[#ef6002] hover:bg-[#d45602] rounded-md focus:outline-none">Send</button>
        </form>

        <Notify :message="notifyMsg" />
    </div>
</template>

<script setup>
import Notify from '@/components/Notify.vue'
import { onMounted, reactive, ref } from 'vue'

let form = reactive({
    code: 0,
    user_id: ref(),
    isProcessing: false
})

const notifyMsg = ref('')

onMounted(()=> {
    form.user_id = localStorage.getItem('Dababy_user_id')
})

const checkCode = async () => {
    try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/code/verify`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(form)
            })
        
            const data = await res.json()
        
            if (res.ok && data.success) {
                notifyMsg.value = 'registration sucessful. redirecting to dashboard...'
                localStorage.removeItem('Dababy_user_id')
                setTimeout(() => { notifyMsg.value = '' }, 5000)
                router.push({name: 'dashboard'})
                return
            }
        
            if (data.message && !data.success) {
                notifyMsg.value = data.message
        
                setTimeout(() => { notifyMsg.value = '' }, 5000)
                return
            }
    } catch (error) {
        notifyMsg.value = error
    }finally {
        setTimeout(() => { notifyMsg.value = '' }, 5000)
    }
}
</script>
