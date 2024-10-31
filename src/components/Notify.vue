<template>
  <Transition name="slide">
    <div class="w-fit flex space-x-2 items-center justify-between right-0 top-2 bg-[#ef6002] bg-opacity-90 rounded-md shadow-lg fixed z-50" v-if="notify">

    <p class="text-md py-2 px-4">{{ message }}</p>

    <button 
      class="text-3xl py-2 px-4 focus:bg-white duration-300 text-slate-800 rounded-md shadow-md"
      @click="handleClick">
      &times;
      </button>
    </div>
  </Transition>
</template>

<script setup>
import { ref, watch } from "vue"

const notify = ref(false)

const props = defineProps({
  message: {
    type: String,
    required: true,
    default: ''
  }
})

watch(props,(val)=>{
  if (val.message) {
    notify.value = true
  }else {
    notify.value = false
  }
})

const emit = defineEmits(['close'])

const handleClick = ()=> {
  emit('close')
}
</script>

<style scoped>
.slide-enter-active, .slide-leave-active {
    transition: transform 0.3s ease-in-out;
}

.slide-enter-from {
    transform: translateX(100%);
}

.slide-leave-to {
    transform: translateX(100%);
}
</style>