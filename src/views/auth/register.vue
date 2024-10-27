<template>
    <div>
        
    </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import { storeToRefs } from 'pinia'
import { reactive, watch } from 'vue'
import { useRouter } from 'vue-router'

const formData = reactive({
    name: ''.trim(),
    email: ''.trim(),
    password: ''.trim(),
    password_confirmation: ''.trim(),
    isProcessing: false,
    error: {}
})

const { register: registerStore  } = useAuthStore()
const { errors, redirect } = storeToRefs(useAuthStore())

const register = ()=> {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    switch (true) {
        case formData.name === '':
            formData.error.name = 'Name field is required'
            formData.error.email = ''
            formData.error.password = ''
            break

        case formData.name.length < 6:
            formData.error.name = 'Please enter maximum of 5 characters'
            formData.error.email = ''
            formData.error.password = ''
            break

        case formData.email === '':
            formData.error.email = 'Email field is required'
            formData.error.name = ''
            formData.error.password = ''
            break

        case !emailRegex.test(formData.email):
            formData.error.email = 'Please enter a valid email address'
            formData.error.name = ''
            formData.error.password = ''
            break

            case formData.password === '':
            formData.error.password = 'Password field is required'
            formData.error.name = ''
            formData.error.email = ''
            break

        case formData.password.length < 6:
            formData.error.password = 'Please use a more secure password'
            formData.error.name = ''
            formData.error.email = ''
            break
    
        default:
            formData.isProcessing = true
            formData.error = {}
            registerStore(`${ useRuntimeConfig().public.apiBase}/register`, formData)
            break
    }
}
</script>