import { defineAsyncComponent } from "vue"
import LoadingMenuCard from "@/components/LoadingMenuCard.vue"
import LoadingCodeCard from "@/components/LoadingCodeCard.vue"

export const MenuCard = defineAsyncComponent({
    loader: ()=> import('@/components/MenuCard.vue'),
    loadingComponent: LoadingMenuCard
})

export const CodeCard = defineAsyncComponent({
    loader: ()=> import('@/components/CodeCard.vue'),
    loadingComponent: LoadingCodeCard
})