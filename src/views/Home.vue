<template>
    <div class="container">
        <div class="px-4 pt-2 lg:px-10 flex justify-between items-center">
            <div class="w-1/">
                <h1 class="text-xl lg:text-3xl font-bold">Order Best Food In Town Whenever You Want 🔥</h1>
                <p class="text-sm p-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam iure nihil delectus obcastias de amet.</p>
            </div>

            <div>
                <Image
                    src="/images/food4.jpg"
                    alt="A menu"
                    class="max-w-[160px] rounded-full"
                />
            </div>
        </div>

        <div class="px-2 lg:px-10 flex flex-col items-center p-4 justify-between">

            <div class="flex -space-x-4 p-2">
                <Image
                    src="/images/pexels-janetrangdoan-936611.jpg"
                    alt="Menus"
                    class="size-10 rounded-full"
                />
                <Image
                    src="/images/pexels-n-voitkevich-5794776.jpg"
                    alt="Menus"
                    class="size-10 rounded-full"
                />
                <Image
                    src="/images/pexels-nicole-michalou-5768972.jpg"
                    alt="Menus"
                    class="size-10 rounded-full"
                />
                <Image
                    src="/images/logo.jpg"
                    alt="Menus"
                    class="size-10 rounded-full"
                />
                <Image
                    src="/images/pexels-janetrangdoan-936611.jpg"
                    alt="Menus"
                    class="size-10 rounded-full"
                />
                <Image
                    src="/images/pexels-janetrangdoan-936611.jpg"
                    alt="Menus"
                    class="size-10 rounded-full"
                />
                <div class="size-10 bg-slate-400 flex items-center justify-center rounded-full">
                    <p class="text-[12px]">more</p>
                </div>
            </div>

            <div class="flex items-center space-x-2 opacity-70 text-sm font-semibold pt-2">
                <div class="flex items-center justify-center border rounded-full px-2">
                    <p class="text-3xl text-[#ef6002]">&circledast;</p>
                    <p>Fast Delivery</p>
                </div>
                <p>Pay on Delivery</p>
                <p>Online Payment</p>
            </div>
        </div>

        <div class="px-2 lg:px-10">
            <div class="border-b opacity-45 mt-6"></div>
        </div>

        <div class="py-6">
            <h3 class="text-2xl font-semibold pb-8 text-center">Popular Dishes</h3>
            
            <div class="px-2 lg:px-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 place-content-center gap-4">
                <MenuCard
                    v-for="menu in menus"
                    :key="menu.id"
                    :menu="menu"
                />
            </div>
        </div>

        <div class="flex items-center justify-center py-6 px-2 lg:px-10 border border-slate-800 shadow-md rounded-lg">
            <div class="w-1/2 space-y-2">
                <h4 class="text-xl font-semibold">We Have The Best Chef Team.</h4>
                <p class="text-sm">No need to worry because we know your heart ❤</p>
            </div>

            <Image
                src="/images/chef.jpg"
                alt="One of our best chef's"
                class="size-40 rounded-full"
            />
        </div>

        <div class="flex overflow-x-auto">
            <!-- <p class="font-semibold text-xl text-center p-2">Our Client Say's</p> -->

            <!-- <div class="flex flex-col items-center p-4 border">
                <div class="border w-fit rounded-full p-2 border-[#ef6002]">
                    <Image
                        src="/images/chef.jpg"
                        alt="One of our best chef's"
                        class="size-20 rounded-full"
                    />
                </div>
                <p class="p-2">Name</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quis impedit, natus sint dolorum facere quas iure ducimus magnam dignissimos iste odit error possimus beatae nulla similique veritatis modi ipsum?</p>
            </div>

            <div class="flex flex-col items-center p-4 border">
                <div class="border w-fit rounded-full p-2 border-[#ef6002]">
                    <Image
                        src="/images/chef.jpg"
                        alt="One of our best chef's"
                        class="size-20 rounded-full"
                    />
                </div>
                <p class="p-2">Name</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quis impedit, natus sint dolorum facere quas iure ducimus magnam dignissimos iste odit error possimus beatae nulla similique veritatis modi ipsum?</p>
            </div> -->
        </div>
    </div>
</template>

<script setup>
import Image from '@/components/Image.vue'
import { MenuCard } from "@/asyncComponents"
import { ref } from 'vue'

const menus = ref([
    { image: '/images/food1.jpg', description: 'ffffffff', price: 20, id: 1, name: 'Dish 1' },
    { image: '/images/food2.jpg', description: 'ffffffff', price: 7, id: 2, name: 'Dish 2' },
    { image: '/images/food3.jpg', description: 'ffffffff', price: 12, id: 3, name: 'Dish 3' },
    { image: '/images/pexels-janetrangdoan-936611.jpg', description: 'ffffffff', price: 21, id: 4, name: 'Dish 4' }
])
</script>

<style scoped>

</style>