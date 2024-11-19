import { ref } from 'vue'

const isLoading = ref(false)

export function showLoading() {
    isLoading.value = true
}

export function hideLoading() {
    isLoading.value = false
}

export default function useLoading() {
    return { isLoading, showLoading, hideLoading }
}