<template>
    <div class="flex flex-col p-2 bg-gradient-to-b from-white to-green-500 rounded-md">
        <div class="relative px-8 py-4">
            <Image
                :src="menu.image"
                :alt="menu.description"
                class="size-40 rounded-full"
            />
            <div class="size-10 bg-green-800 rounded-full text-white flex items-center justify-center absolute bottom-8 right-4">${{ menu.price }}</div>
        </div>

        <div class="flex -space-x-4 justify-center">
            <Image
                src="/images/logo.jpg"
                alt="A menu item"
                class="size-8 rounded-full"
            />
            <Image
                src="/images/logo.jpg"
                alt="A menu item"
                class="size-8 rounded-full"
            />
            <Image
                src="/images/logo.jpg"
                alt="A menu item"
                class="size-8 rounded-full"
            />
            <Image
                src="/images/logo.jpg"
                alt="A menu item"
                class="size-8 rounded-full"
            />
            <p class="text-yellow-500 px-6">({{ menu.price }})</p>
        </div>

        <div class="text-center space-y-2">
            <p class="text-white">Lorem ipsum isicing elit. Dolores temporibus est distinctio asperiores. Modi nostrum, ad, veritatis provident molestias nulla dolores amet culpa, dolorem voluptatibus sed soluta quos eum mollitia!</p>
            <button class="px-8 py-2 bg-green-800 rounded-full text-white -space-y-2">Order Now</button>
        </div>
    </div>
</template>

<script setup>
import Image from '@/components/Image.vue'

defineProps({
    menu: {
        type: Object
    }
})
</script>