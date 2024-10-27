<template>
    <div class="border border-slate-600 p-4 rounded-xl shadow-lg mx-4 sm:mx-0 flex flex-col justify-center">
        <div class="flex items-center justify-between">
            <button class="px-4 py-0.5 bg-blue-500 rounded-full">${{ menu.price }}</button>
            <button>❤</button>
        </div>

        <div class="flex justify-center p-4">
            <Image
                :src="menu.image"
                :alt="menu.description"
                class="rounded-md"
            />
        </div>

        <div class="flex items-center justify-between">
            <p class="text-sm font-bold">{{ menu.name }}</p>
            <div class="size-10 bg-[#ef6002] rounded-full text-extrabold flex items-center justify-center">
                <p class="text-lg">&plus;</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import Image from './Image.vue'

defineProps({
    menu: {
        type: Object,
        required: true
    }
})
</script>