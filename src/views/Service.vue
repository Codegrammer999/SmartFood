<template>
  <div class="container mx-auto p-4 lg:px-10">
    <section class="text-center py-8">
      <h1 class="text-2xl lg:text-4xl font-bold text-[#ef6002]">
        Our Services
      </h1>
      <p class="text-sm mt-2 opacity-70">
        Providing delicious and affordable food for everyone, anytime. We ensure every bite feels like a celebration.
      </p>
    </section>

    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 place-items-center py-8">
      <ServiceCard 
        title="Food Delivery" 
        description="Fast delivery service to bring your favorite meals to your doorsteps, hot and fresh." 
        image="/images/delivery.jpg"
      />
      <ServiceCard 
        title="Dine-In Experience" 
        description="Enjoy a cozy and relaxing dine-in atmosphere, perfect for families, couples, and friends." 
        image="/images/dinein.jpg"
      />
      <ServiceCard 
        title="Catering Services" 
        description="We offer catering for events, parties, and corporate functions at an affordable rate." 
        image="/images/catering.jpg"
      />
    </div>

    <section class="flex flex-col items-center lg:flex-row lg:justify-between border-t py-8 mt-8">
      <div class="w-full lg:w-1/2 space-y-4">
        <h3 class="text-xl lg:text-2xl font-semibold">
          Affordable Meals, Every Time
        </h3>
        <p class="text-sm opacity-70">
          Our goal is to make quality food accessible to everyone. Whether you're ordering delivery or dining in, we ensure your experience is top-notch without breaking the bank.
        </p>
      </div>
      <Image
        src="/images/chef.jpg"
        alt="Our chef team"
        class="size-40 rounded-full mt-4 lg:mt-0"
      />
    </section>
  </div>
</template>

<script setup>
import Image from '@/components/Image.vue'
import ServiceCard from '@/components/ServiceCard.vue'
</script>

<style scoped>
.size-30 {
  width: 120px;
  height: 120px;
  object-fit: cover;
}
.size-40 {
  width: 160px;
  height: 160px;
  object-fit: cover;
}
</style>
