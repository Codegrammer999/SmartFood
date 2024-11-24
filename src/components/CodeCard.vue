<template>
    <div class="bg-white/10 border border-white/20 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <div class="flex justify-between items-center mb-2">
            <h3 class="text-lg font-semibold text-white truncate">
                {{ code.code }}
            </h3>

            <ClipboardDocumentCheckIcon class="size-6 text-white/50" v-if="changeCopyText" />
            <ClipboardIcon class="size-6 text-white/50 cursor-pointer" @click="copyCode(code.code)" v-else />
        </div>

        <div class="text-sm text-gray-300 space-y-1">
            <p><span class="font-bold">Used by: {{ code.used_id }}</span></p>
            <p><span class="font-bold">Value: {{ code.value }}</span></p>
            <p>
                <span class="font-bold">Status: </span>
                <span class="px-2 py-1 rounded text-xs font-semibold" :class="code.status === 'Active' ? 'bg-green-600 text-white': 'bg-red-600 text-white'">{{ code.status }}</span>
            </p>
            <p>
                <span class="font-bold">Redeemed:</span>
                {{ code.is_redeemed ? 'Yes' : 'No' }}
            </p>
            <p><span class="font-bold">Expires At:</span> {{ code.expires_at }}</p>
        </div>
        <div class="mt-4">
            <button :class="code.is_redeemed ?  'w-full bg-[#ef6002] bg-opacity-30 text-white text-sm font-medium py-2 rounded' : 'w-full bg-[#ef6002] text-white text-sm font-medium py-2 rounded hover:bg-[#d24e01] transition duration-200'" :disabled="code.is_redeemed">{{ code.is_redeemed ? 'Used' : 'Use' }}</button>
        </div>
    </div>
</template>

<script setup>
import { ClipboardIcon, ClipboardDocumentCheckIcon } from '@heroicons/vue/24/solid'
import { computed, ref } from 'vue'

defineProps(['code'])

const copied = ref(false)

const changeCopyText = computed(()=> {
    if (copied.value) {
        return true
    }
    return false
})

const copyCode = (code)=> {
    navigator.clipboard.writeText(code)
    .then(()=> {
        copied.value = true
        setTimeout(() => {
            copied.value = false
        }, 1000)
    })
    .catch((error)=> {
        alert('Error copying code')
    })   
}
</script>