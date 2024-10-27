<template>
    <footer class="bg-black p-2 opacity-0" ref="footer">
        <div class="flex flex-col gap-2">

            <div class="text-center flex flex-col justify-center items-center gap-2">
                <p lass="text-center font-semibold">Social Links</p>

                <div class="flex space-x-2 items-center">
                    <div class="size-10 bg-white rounded-full"></div>
                    <div class="size-10 bg-white rounded-full"></div>
                    <div class="size-10 bg-white rounded-full"></div>
                </div>
            </div>

            <div class="text-center p-2">
                <p class="text-center font-bold text-lg">Services</p>

                <div class="text-sm p-2">
                    <p>Online Order</p>
                    <p>Super Chefs</p>
                    <p>24/7 Services</p>
                    <p>Online Payment</p>
                    <p>Payment On Delivery</p>
                </div>
            </div>

            <div class="text-center">
                <p class="text-center font-semibold">Quick Links</p>

                <div class="text-sm p-2 space-x-4">
                    <router-link :to="{ name: 'login' }">
                        Login
                    </router-link>

                    <router-link :to="{ name: 'register' }">
                        Register
                    </router-link>

                    <router-link :to="{ name: 'menu' }">
                        Menu
                    </router-link>
                </div>
            </div>

            <div>
                <p class="text-center font-semibold">Help</p>

                <div class="text-sm text-center p-2 space-x-4">
                    <router-link :to="{ name: 'contact' }">
                        Contact
                    </router-link>

                    <router-link :to="{ name: 'contact' }">
                        Support
                    </router-link>

                    <router-link :to="{ name: 'contact' }">
                        Faq
                    </router-link>
                </div>
            </div>

            <div class="flex flex-col items-center justify-cente gap-2 space-x-2 font-bold">
                <Image
                    src="/images/logo.jpg"
                    alt="Our Logo"
                    class="size-10 rounded-full"
                />
                <p class="text-md font-semibold"><span class="text-[#ef6002]">Smart</span> Food</p>
                <p>&copy; 2024 All rights reserved</p>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Image from './Image.vue'

const footer = ref(null)

onMounted(()=> {
    setTimeout(() => {
        footer.value.classList.remove('opacity-0')
    }, 3000)
})
</script>