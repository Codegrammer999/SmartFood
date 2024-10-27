<template>
    <div class="svg-background h-screen text-white flex items-center justify-center">
        <div class="max-w-screen-lg w-[800px] rounded bg-white p-8 container flex flex-col items-center shadow-xl">
            <h1 class="text-slate-800 font-medium text-center"> <span class="font-semibold text-lg">Kindly check your email!</span> <br> We have sent you a 6 digit code to your registered email address</h1>

            <form class="w-full" @submit.prevent="validateCode">
                <div class="p-2 flex flex-col gap-2 w-full">
                    <input 
                        type="Number"
                        class="w-full px-4 ring-slate-500 ring-2 duration-500 py-2 text-slate-800 focus:outline-none focus:ring-2 hover:ring-[#2264AB] rounded"
                        placeholder="Enter or paste in code"
                        v-model="formData.code"
                    >
                    <ParagraphError
                        :error="formData.error"
                    />
                </div>

                <p class="text-slate-800">Did'nt receive code?</p>

                <div class="flex justify-between items-center">
                    <button class="text-[#2264AB]">Resend</button>
                    <NuxtLink 
                        to="/auth/login"
                        class="text-[#2264AB] focus:underline">
                        Back To Login <span>&RightArrow;</span>
                    </NuxtLink>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: 'Smart Food | Forgot-Password',
    meta: [
        {name: 'description', content: 'Smart Food forgot password page. Reset your password here.'}
    ]
})

const formData = reactive({
    code: ref()
})

const validateCode = ()=> {
    console.log(formData.code)
}
</script>

<style scoped>
    .svg-background {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1000%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='%230e2a47'%3e%3c/rect%3e%3cpath d='M 0%2c175 C 57.6%2c163.2 172.8%2c120.2 288%2c116 C 403.2%2c111.8 460.8%2c154.4 576%2c154 C 691.2%2c153.6 748.8%2c112.6 864%2c114 C 979.2%2c115.4 1036.8%2c175.6 1152%2c161 C 1267.2%2c146.4 1382.4%2c65 1440%2c41L1440 560L0 560z' fill='%23184a7e'%3e%3c/path%3e%3cpath d='M 0%2c489 C 96%2c449.4 288%2c303.6 480%2c291 C 672%2c278.4 768%2c418.8 960%2c426 C 1152%2c433.2 1344%2c346.8 1440%2c327L1440 560L0 560z' fill='%232264ab'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1000'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
    }
</style>