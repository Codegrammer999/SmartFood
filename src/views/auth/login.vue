<template>
    <div class="svg-background h-screen text-white flex items-center justify-center">
        <div class="max-w-screen-lg w-[800px] rounded bg-white p-6 container flex flex-col items-center relative shadow-xl">
            <h1 class="text-2xl text-[#2264AB] font-bold absolute left-10">Sign In</h1>

            <form class="w-full" @submit.prevent="login">

                <div class="p-2 flex flex-col w-full mt-8">
                    <Label
                        label-for="email"
                        label-text="Email"
                    />
                    <PrimaryInput
                        input-type="email"
                        input-placeholder="Enter Your Email Address"
                        input-id="email"
                         v-model="formData.email"
                    />
                    <ParagraphError
                        :error="formData.error.email"
                    />
                    <ParagraphError
                        v-if="errors.email"
                        :error="errors.email[0]"
                    />
                </div>

                <div class="p-2 flex flex-col w-full">
                    <Label
                        label-for="password"
                        label-text="Password"
                    />
                    <PrimaryInput
                        input-type="password"
                        input-placeholder="Enter your Password"
                        input-id="password"
                        v-model="formData.password"
                    />
                    <ParagraphError
                        :error="formData.error.password"
                    />
                    <ParagraphError
                        v-if="errors.password"
                        :error="errors.password[0]"
                    />
                </div>

                <div class="text-center pb-4">
                    <LazyLoadingButton v-if="formData.isProcessing"/>
                    <PrimaryButton
                        v-else
                        button-text="Submit"
                        :disabled="formData.isProcessing"
                    />
                </div>
            </form>

            <div>
                <p class="text-slate-800 font-medium">Don't have an account?
                    <NuxtLink to="/auth/register"
                        class="text-[#2264AB] font-bold underline">
                        Register
                    </NuxtLink>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useAuthStore } from '~/stores/auth'

// definePageMeta({
//     middleware: 'auth'
// })

useHead({
    title: 'Smart Food | Sign In',
    meta: [
        { name: 'description', content: 'Smart Food login page' }
    ]
})

const formData = reactive({
    email: ''.trim(),
    password: ''.trim(),
    isProcessing: false,
    error: {}
})

const { login: loginStore } = useAuthStore()
const { errors, redirect } = storeToRefs(useAuthStore())

watch(errors, (val)=> {
    if (val) {
        formData.isProcessing = false
    }
})

watch(redirect, (val)=> {
    if (val.toDashboard) {
        useRouter().push('/dashboard')
    }
})

const login = ()=> {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    switch (true) {
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
            loginStore(`${ useRuntimeConfig().public.apiBase}/login`, formData)
            break
    }
}
</script>

<style scoped>
    .svg-background {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1000%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='%230e2a47'%3e%3c/rect%3e%3cpath d='M 0%2c175 C 57.6%2c163.2 172.8%2c120.2 288%2c116 C 403.2%2c111.8 460.8%2c154.4 576%2c154 C 691.2%2c153.6 748.8%2c112.6 864%2c114 C 979.2%2c115.4 1036.8%2c175.6 1152%2c161 C 1267.2%2c146.4 1382.4%2c65 1440%2c41L1440 560L0 560z' fill='%23184a7e'%3e%3c/path%3e%3cpath d='M 0%2c489 C 96%2c449.4 288%2c303.6 480%2c291 C 672%2c278.4 768%2c418.8 960%2c426 C 1152%2c433.2 1344%2c346.8 1440%2c327L1440 560L0 560z' fill='%232264ab'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1000'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
    }
</style>