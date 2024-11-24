<template>
    <header>
        <nav class="justify-between items-center p-2 text-[16px] hidden sm:flex desktop" v-if="desktop"> 
            <div class="flex items-center space-x-2 font-bold">
                <Image
                    src="/images/logo.jpg"
                    alt="Our Logo"
                    class="size-12 rounded-full"
                />
                <p class="text-xl font-extrabold"><span class="text-[#ef6002]">Smart</span> Food</p>
            </div>

            <div class="flex space-x-4">
                <router-link
                    :to="{ name: 'home' }"
                    class="">
                    Home
                </router-link>

                <router-link
                    :to="{ name: 'menu' }">
                    Menu
                </router-link>

                <router-link
                    :to="{ name: 'services' }">
                    Services
                </router-link>

                <router-link
                    :to="{ name: 'contact' }">
                    Contact us
                </router-link>
            </div>

            <div class="space-x-2">
                <router-link
                    :to="{ name: 'login' }">
                    Login
                </router-link>

                <router-link
                    :to="{ name: 'register' }"
                    class="px-4 py-1.5 hover:bg-white hover:ring-2 hover:ring-[#6b4d96] hover:text-[#6b4d96] duration-300 bg-blue-500 text-white rounded-2xl">
                    Signup
                </router-link>
            </div>
        </nav>

        <nav class="w-full" v-else>
            <div class="flex justify-between p-4 border-b border-white/80">
                <div class="flex space-x-4 items-center">
                    <ArrowLeftEndOnRectangleIcon class="size-8" @click="$router.back()"/>
                    <h1 class="text-[20px] font-semibold" v-if="authStore.user"><span class="text-[#ef6002]">Smart</span>Food</h1>
                </div>
                <button
                    v-if="mobileNavIsHidden"
                    @click="toggleMobileNav"
                    class="block md:hidden bg-white text-[#ef6002] p-2 rounded focus:outline-none z-30">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
                <button @click="toggleMobileNav" v-else class="text-4xl text-slate-200 font-semibold z-30">&times;</button>
            </div>

            <transition name="slide">
                <div class="flex flex-col items-center absolute right-0 top-0 text-white shadow-xl bg-gradient-to-b from-[#18082f] to-bg-slate-200 rounded z-10 h-screen w-1/2 pt-20 gap-4 px-6 mobile" v-if="showMobileNav" @click="toggleMobileNav">

                    <div class="flex flex-col gap-2" v-if="authStore.user">

                        <router-link
                            :to="{ name: 'dashboard' }"
                            class="w-full flex items-center justify-center text-center px-2 py-3 bg-white text-slate-800 rounded-md duration-300">
                            <span class="mx-1">Dashboard</span> <Squares2X2Icon class="size-6"/>
                        </router-link>

                        <router-link
                            :to="{ name: 'menu' }"
                            class="w-full flex items-center justify-center text-center px-2 py-3 bg-white text-slate-800 rounded-md duration-300">
                            <span class="mx-1">Menu</span> <PuzzlePieceIcon class="size-6"/>
                        </router-link>

                        <router-link
                            :to="{ name: 'cart' }"
                            class="w-full flex items-center justify-center text-center px-2 py-3 bg-white text-slate-800 rounded-md duration-300">
                            <span class="mx-1">Cart</span> <ShoppingCartIcon class="size-6"/>
                        </router-link>

                        <router-link
                            :to="{ name: 'orders' }"
                            class="w-full flex items-center justify-center text-center px-2 py-3 bg-white text-slate-800 rounded-md duration-300">
                            <span class="mx-1">Orders</span> <ClipboardDocumentListIcon class="size-6"/>
                        </router-link>

                        <router-link
                            :to="{ name: 'codes' }"
                            class="w-full flex items-center justify-center text-center px-2 py-3 bg-white text-slate-800 rounded-md duration-300">
                            <span class="mx-1">Codes</span> <CurrencyDollarIcon class="size-6"/>
                        </router-link>

                        <router-link
                            :to="{ name: 'notifications' }"
                            class="w-full flex items-center justify-center text-center px-2 py-3 bg-white text-slate-800 rounded-md duration-300">
                            <span class="mx-1">Notifications</span> <BellAlertIcon class="size-6 text-[#]"/>
                        </router-link>

                        <router-link
                            :to="{ name: 'settings' }"
                            class="w-full flex items-center justify-center text-center px-2 py-3 bg-white text-slate-800 rounded-md duration-300">
                            <span class="mx-1">Settings</span> <Cog6ToothIcon class="size-6"/>
                        </router-link>
                    </div>

                        <div class="flex flex-col items-center gap-2" v-else>
                            <router-link
                                :to="{ name: 'home' }"
                                class="w-full flex items-center justify-center text-center px-2 py-3 bg-white text-slate-800 rounded-md duration-300">
                                <span class="mx-1">Home</span> <HomeIcon class="size-6"/>
                            </router-link>

                            <router-link
                                :to="{ name: 'services' }"
                                class="w-full flex items-center justify-center text-center px-2 py-3 bg-white text-slate-800 rounded-md duration-300">
                                <span class="mx-1">Services</span> <BriefcaseIcon class="size-6"/>
                            </router-link>

                            <router-link
                                :to="{ name: 'contact' }"
                                class="w-full flex items-center justify-center text-center px-2 py-3 bg-white text-slate-800 rounded-md duration-300">
                                <span class="mx-1">Contact us</span> <PhoneIcon class="size-6"/>
                            </router-link>

                            <router-link
                                :to="{ name: 'login' }"
                                class="w-full flex items-center justify-center text-center px-2 py-3 bg-white text-slate-800 rounded-md duration-300">
                                <span class="mx-1">Login</span> <ArrowRightStartOnRectangleIcon class="size-6"/>
                            </router-link>

                            <router-link
                                :to="{ name: 'register' }"
                                class="w-full flex items-center justify-center text-center px-2 py-3 bg-white text-slate-800 rounded-md duration-300">
                                <span class="mx-1">Signup</span> <UserPlusIcon class="size-6"/>
                            </router-link>
                    </div>
                </div>
            </transition>
        </nav>
    </header>
</template>

<script setup>
import { computed, ref } from 'vue'
import Image from './Image.vue'
import { useAuthStore } from '@/stores/auth'
import { 
        Squares2X2Icon,  
        ClipboardDocumentListIcon, 
        Cog6ToothIcon, 
        HomeIcon, 
        ShoppingCartIcon, 
        BellAlertIcon,
        PuzzlePieceIcon,
        PhoneIcon,
        ArrowLeftEndOnRectangleIcon,
        UserPlusIcon,
        BriefcaseIcon,
        ArrowRightStartOnRectangleIcon,
        CurrencyDollarIcon
    } from '@heroicons/vue/24/solid'

const authStore = useAuthStore()

const screenWidth = ref(window.innerWidth)

const desktop = computed(()=> {
    if (screenWidth.value >= 640) {
        return true
    }
    return false
})

const showMobileNav = ref(false)

const toggleMobileNav = () => {
    showMobileNav.value = !showMobileNav.value
}

const mobileNavIsHidden = computed(()=> {
    if (showMobileNav.value) {
        return false
    }
    return true
})
</script>

<style scoped>
.mobile .router-link-exact-active {
    background-color: #ef6002;
    color: white;
}

.desktop .router-link-exact-active {
    color: #ef6002;
}

.slide-enter-active, .slide-leave-active {
    transition: transform 0.3s ease;
}

.slide-enter-from {
    transform: translateX(100%);
}

.slide-leave-to {
    transform: translateX(100%);
}
</style>