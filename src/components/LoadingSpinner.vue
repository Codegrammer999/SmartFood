<template>
<div class="bg-[#18082f] min-h-screen flex items-center justify-center">
  
  <!-- Loading Spinner -->
  <div class="relative w-20 h-20">
    <!-- Outer ring -->
    <div class="absolute inset-0 rounded-full border-4 border-t-[#ef6002] border-r-white border-b-[#ef6002] border-l-transparent animate-spin"></div>
    
    <!-- Inner Circle for effect -->
    <div class="absolute inset-4 bg-[#18082f] rounded-full"></div>
  </div>

</div>

</template>

<style scoped>
 @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
}
</style>