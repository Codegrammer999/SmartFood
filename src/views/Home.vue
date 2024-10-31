<template>
    <div class="container mx-auto">
        <!-- Header Section -->
        <div class="px-4 pt-2 lg:px-10 flex flex-col lg:flex-row justify-between items-center gap-4">
            <div class="w-full lg:w-1/2 text-center lg:text-left">
                <h1 class="text-xl lg:text-3xl font-bold">
                    Order Best Food In Town Whenever You Want 🔥
                </h1>
                <p class="text-sm p-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam iure nihil delectus obcastias de amet.
                </p>
            </div>

            <div class="w-full max-w-xs">
                <Image
                    src="/images/food4.jpg"
                    alt="A menu"
                    class="w-full rounded-full"
                />
            </div>
        </div>

        <!-- Image Carousel Section -->
        <div class="px-2 lg:px-10 flex flex-col items-center p-4 justify-between">
            <div class="flex -space-x-4 p-2 overflow-x-auto">
                <Image
                    v-for="(src, index) in imageSources"
                    :key="index"
                    :src="src"
                    alt="Menus"
                    class="w-10 h-10 rounded-full"
                />
                <div class="w-10 h-10 bg-slate-400 flex items-center justify-center rounded-full">
                    <p class="text-[12px]">more</p>
                </div>
            </div>

            <div class="flex flex-wrap justify-center items-center space-x-2 opacity-70 text-sm font-semibold pt-2">
                <div class="flex items-center justify-center border rounded-full px-2">
                    <p class="text-3xl text-[#ef6002]">&circledast;</p>
                    <p>Fast Delivery</p>
                </div>
                <p>Online Payment</p>
            </div>
        </div>

        <div class="px-2 lg:px-10">
            <div class="border-b opacity-45 mt-6"></div>
        </div>

        <!-- Popular Dishes Section -->
        <div class="py-6">
            <h3 class="text-2xl font-semibold pb-8 text-center">Popular Dishes</h3>
            
            <div class="px-2 lg:px-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                <OtherMenuCard
                    v-for="menu in menus"
                    :key="menu.id"
                    :menu="menu"
                />
            </div>
        </div>

        <!-- Chef Team Section -->
        <div class="flex flex-col md:flex-row items-center justify-between py-6 px-2 lg:px-10 border border-slate-800 shadow-md rounded-lg gap-4">
            <div class="w-full md:w-1/2 space-y-2">
                <h4 class="text-xl font-semibold">We Have The Best Chef Team.</h4>
                <p class="text-sm">No need to worry because we know your heart ❤</p>
            </div>

            <Image
                src="/images/chef.jpg"
                alt="One of our best chef's"
                class="w-40 h-40 rounded-full"
            />
        </div>
    </div>
</template>

<script setup>
import Image from '@/components/Image.vue'
import OtherMenuCard from '@/components/OtherMenuCard.vue'
import { ref } from 'vue'

const menus = ref([
    { image: '/images/food1.jpg', description: 'Delicious Dish', price: 20, id: 1, name: 'Dish 1' },
    { image: '/images/food2.jpg', description: 'Spicy Delight', price: 7, id: 2, name: 'Dish 2' },
    { image: '/images/food3.jpg', description: 'Yummy Treat', price: 12, id: 3, name: 'Dish 3' },
    { image: '/images/pexels-janetrangdoan-936611.jpg', description: 'Tasty Meal', price: 21, id: 4, name: 'Dish 4' }
])

const imageSources = [
    'images/pexels-janetrangdoan-936611.jpg',
    '/images/pexels-n-voitkevich-5794776.jpg',
    '/images/pexels-nicole-michalou-5768972.jpg',
    '/images/logo.jpg',
    '/images/pexels-janetrangdoan-936611.jpg'
]
</script>
