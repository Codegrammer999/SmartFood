<template>
    <!-- Menu Item -->
    <div class="text-white bg-white/10 shadow-lg p-4 text-center rounded-md">
        <div class="flex justify-center">
            <Image 
                :src="menu.image" 
                :alt="menu.description"
                class="w-full h-48 object-cover"
            />
        </div>

    <div class="p-4 text-center">
        <h2 class="text-2xl font-bold">{{ menu.name }}</h2>
        <p class="mt-2 line-clamp-2">{{ menu.description }}</p>
        <div class="mt-4 flex items-center justify-between">
            <span class="text-md text-[#ef6002]">
                <span class="line-through opacity-70" v-if="menu.priceoff">&#8358;{{ menu.priceoff }}</span> 
                &#8358;{{ menu.price }}
            </span>
            <div class="text-sm font-semibold">{{ menu.category }}</div>
        </div>
    </div>

    <button
        @click="seeDetails" 
        class="bg-[#ef6002] p-2 rounded-md text-white m-4 hover:opacity-60 duration-300">
        View Details
    </button>
    </div>

</template>

<script setup>
import Image from './Image.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const seeDetails = ()=> {
    router.push({ name: 'login'})
}

const props = defineProps({
    menu: {
        type: Object,
        required: true
    }
})
</script>