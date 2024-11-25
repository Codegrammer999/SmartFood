<template>
    <div class="container mx-auto p-4 space-y-2">
        <section class="bg-[#311952c4] p-2 rounded-md shadow-md w-fit">
            <div class="px-4 pt-2 lg:px-10 flex flex-conl flex-row justify-between items-center gap-4">
                <div class="w-full lg:w-1/2">
                    <h1 class="text-xl lg:text-3xl font-bold">
                        Order Best Food In Town Whenever You Want 🔥
                    </h1>
                    <p class="text-sm p-2">
                        Discover a variety of mouth-watering dishes delivered straight to your doorstep. We’re here to satisfy your cravings whenever you need it.
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
        </section>

        <section class="text-center space-y-4 bg-[#311952c4] p-2 rounded-md shadow-md">
            <h2 class="text-2xl font-semibold">About Us</h2>
            <p class="text-gray-200 max-w-3xl mx-auto lg:text-lg">
                We are passionate about bringing delicious, affordable, and convenient food options to our community. From savory dishes to sweet treats, our mission is to satisfy your taste buds with the best flavors.
            </p>
        </section>

        <section class="bg-[#311952c4] p-2 rounded-md shadow-md">
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
        </section>

        <section class="bg-[#311952c4] p-4 rounded-md shadow-md">
            <div class="flex flex-col bg-white/10 md:flex-row items-center justify-between py-6 px-2 lg:px-10 shadow-md rounded-lg gap-4">
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
        </section>

        <section class="space-y-4 bg-[#311952c4] p-2 rounded-md">
            <!-- Our Story -->
            <div class="text-center space-y-4 shadow-lg bg-white/10 p-4">
                <h3 class="text-2xl font-semibold">Our Story</h3>
                <p class="text-gray-200 max-w-3xl mx-auto lg:text-lg">
                    Established with a passion for culinary excellence, we have built a team dedicated to serving up the finest food experiences in town. Every dish we make is crafted with love and care, using only the freshest ingredients.
                </p>
            </div>

            <!-- Our Values -->
            <div class="text-center space-y-4 shadow-lg bg-white/10 p-4">
                <h3 class="text-2xl font-semibold">Our Values</h3>
                <ul class="max-w-3xl mx-auto text-gray-200 space-y-2 lg:text-lg">
                    <li>🍲 <strong>Quality:</strong> Only the best ingredients make it to your plate.</li>
                    <li>⚖️ <strong>Integrity:</strong> We stand by honest, fair practices in every part of our service.</li>
                    <li>❤️ <strong>Passion:</strong> We are driven by our love for food and commitment to our customers.</li>
                </ul>
            </div>

            <!-- Meet Our Team -->
            <div class="text-center space-y-4 shadow-lg bg-white/10 p-4">
                <h3 class="text-2xl font-semibold">Meet Our Team</h3>
                <p class="text-gray-200 max-w-3xl mx-auto lg:text-lg">
                    Our team of talented chefs and friendly staff are dedicated to bringing you an unforgettable dining experience. Together, we make every meal special.
                </p>
                <div class="flex justify-center space-x-4 mt-4">
                    <Image src="/images/chef1.jpg" alt="Chef 1" class="w-20 h-20 lg:w-24 lg:h-24 rounded-full shadow-md" />
                    <Image src="/images/chef2.jpg" alt="Chef 2" class="w-20 h-20 lg:w-24 lg:h-24 rounded-full shadow-md" />
                    <Image src="/images/chef3.jpg" alt="Chef 3" class="w-20 h-20 lg:w-24 lg:h-24 rounded-full shadow-md" />
                </div>
            </div>

            <!-- Get in Touch -->
            <div class="text-center space-y-4 shadow-lg bg-white/10 p-4">
                <h3 class="text-2xl font-semibold">Get in Touch</h3>
                <p class="text-gray-200 max-w-3xl mx-auto lg:text-lg">
                    We'd love to hear from you! Whether you have a question about our menu, services, or anything else, feel free to reach out.
                </p>
                <button class="bg-[#ef6002] text-white px-6 py-2 rounded-lg duration-300 hover:bg-[#ef6102c7]">
                    Contact Us
                </button>
            </div>
        </section>
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
</script>
