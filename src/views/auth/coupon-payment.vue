<template>
    <div class="container m-auto p-4">
        <p class="p-2 text-xl">Enter Code below</p>
     
        <form @submit.prevent="checkCode" class="flex flex-col space-y-4 pt-4">
            <input
                required 
                type="text"
                placeholder="Paste or enter code"
                class="w-full p-2 text-slate-700 placeholder:text-center rounded-sm focus:outline-none"
                v-model="form.code"
            >
            <ParagraphError />
            <LoadingButton v-if="form.isProcessing"/>
            <button v-else class="px-4 py-2 bg-[#ef6002] hover:bg-[#d45602] rounded-md focus:outline-none">Send</button>
        </form>

        <Notify :message="notifyMsg" />
    </div>
</template>

<script setup>
import LoadingButton from '@/components/LoadingButton.vue'
import Notify from '@/components/Notify.vue'
import ParagraphError from '@/components/ParagraphError.vue'
import { onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

let form = reactive({
    code: '',
    user_id: ref(),
    isProcessing: false,
    error: ''
})

const notifyMsg = ref('')
const router = useRouter()

onMounted(()=> {
    form.user_id = localStorage.getItem('Dababy_user_id')
})

const checkCode = async () => {
    try {
            form.isProcessing = true

            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/register/code/verify`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(form)
            })
        
            const data = await res.json()
        
            if (res.ok && data.success) {
                localStorage.removeItem('Dababy_user_id')
                router.push({name: 'login'})
            }
        
            if (data.message && !data.success) {
                notifyMsg.value = data.message
            }
    } catch (error) {
        notifyMsg.value = error
    }finally {
        setTimeout(() => { notifyMsg.value = '' }, 5000)
        form.isProcessing = false
    }
}
</script>
