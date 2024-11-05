<template>
    <div class="p-4 flex flex-col items-center justify-center gap-8">
        <p class="text-center text-lg">Make your payment to the below account details</p>

        <div class="flex flex-col items-center p-4">
            <p>47489393394849333</p>
            <p>Bank name</p>
            <p>Account name</p>
        </div>

        <form @submit.prevent="sendOrder" enctype="multipart/form-data">
            <p class="text-center p-2">Send a screenshot of your payment.</p>

            <div class="flex flex-col items-center gap-4" ref="parent">
                <p v-if="form.payment_receipt" class="opacity-70">A file has been selected.</p>
                <p v-else class="opacity-70">No file selected!</p>
                
                <button 
                    type="button"
                    @click="selectFile"
                    class="backdrop-blur-lg bg-white/10 rounded flex flex-col items-center justify-center px-4 py-2">
                    Select a screenshot
                    <input
                        type="file"
                        ref="fileInput"
                        class="hidden"
                        @change="getFile"
                    >
                </button>

                <p v-if="form.errors.payment_receipt" class="opacity-90 text-sm text-red-600">{{ form.errors.payment_receipt[0] }}</p>
                <p v-if="form.errors.orders" class="opacity-90 text-sm text-red-600">{{ form.errors.orders[0] }}</p>

                <LoadingButton
                    v-if="form.isProcessing" 
                    class="bg-opacity-0"  
                />

                <button type="submit" class="bg-[#ef6002] text-white px-8 py-3 rounded-full font-bold text-lg shadow-md hover:bg-[#ff7b33] transition-all duration-300" v-else>
                    Proceed
                </button>
            </div>
        </form>
        
        <Notify :message="notifyMsg" />
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue"
import Notify from '@/components/Notify.vue'
import { useOrderStore } from "@/stores/order"
import autoAnimate from "@formkit/auto-animate"
import LoadingButton from "@/components/LoadingButton.vue"
import { useRouter } from "vue-router"

const orderStore = useOrderStore()
const fileInput  = ref(null)
const notifyMsg = ref('')
const parent = ref(null)
const router = useRouter()

const selectFile = ()=> {
    fileInput.value.click()
} 

onMounted(()=> {
    parent.value && autoAnimate(parent.value)
    orderStore.loadOrders()
    form.orders = orderStore.orders
})

let form = reactive({
    payment_receipt: '',
    orders: null,
    isProcessing: false,
    errors: {}
})

const getFile = (e)=> {
    var fileReader = new FileReader()
    fileReader.readAsDataURL(e.target.files[0])

    fileReader.onload = (e) => {
        form.payment_receipt = e.target.result
    }
}

const sendOrder = async () => {
    if (form.payment_receipt === '') {
        notifyMsg.value = 'Please select your payment screenshot.'
        setTimeout(() => { notifyMsg.value = '' }, 4000)
        return
    }

    try {
        form.isProcessing = true

        notifyMsg.value = 'Processing order...'
        setTimeout(() => { notifyMsg.value = '' }, 2000)

        const res = await fetch('/api/make-order', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('Dababy_token')}`
            },
            body: JSON.stringify(form)
        })
        
        const data = await res.json()
        
        if (res.ok && data.success) {
            notifyMsg.value = 'Order received.'
            form = {
                    payment_receipt: '',
                    orders: null,
                    errors: {}
                }
            router.push({ name: 'orders'})  
        }else if (data.errors) {
            form.errors = data.errors
        }
        
    } catch (error) {
        console.log('Error making order', error)
    }finally {
        form.isProcessing = false
        setTimeout(() => { notifyMsg.value = '' }, 4000)
    }
}
</script>