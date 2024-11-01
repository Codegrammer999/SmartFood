import { defineAsyncComponent } from "vue"
import LoadingMenuCard from "@/components/LoadingMenuCard.vue"

export const MenuCard = defineAsyncComponent({
    loader: ()=> import('@/components/MenuCard.vue'),
    loadingComponent: LoadingMenuCard,
    delay: 3000,
    timeout: 20000
})