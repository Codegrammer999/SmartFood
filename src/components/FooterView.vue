<template>
    <footer class="bg-slate-950 p-2" ref="footerEl">
        <div class="flex flex-col gap-2">

            <div class="text-center flex flex-col justify-center items-center gap-2">
                <p lass="text-center font-semibold">Social Links</p>

                <div class="flex space-x-2 items-center">
                    <div class="size-10 bg-white rounded-full"></div>
                    <div class="size-10 bg-white rounded-full"></div>
                    <div class="size-10 bg-white rounded-full"></div>
                </div>
            </div>

            <div class="text-center">
                <p class="text-center font-semibold">Quick Links</p>

                <div class="text-sm p-2 space-x-4">
                    <router-link :to="{ name: 'services' }">
                        Services
                    </router-link>

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
import Image from './Image.vue'
</script>