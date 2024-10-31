import { ref } from "vue";

export function useMenus() {
    const menus = ref([])
    const currentPage = ref(1)
    const totalPages = ref(1)

    const fetchMenus = async(page = 1) => {
        try {
            const res = await fetch(`/api/menus?page=${page}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('Dababy_token')}`
                }
            })
            const data = await res.json()
            menus.value = data.data
            currentPage.value = data.current_page
            totalPages.value = data.last_page
        } catch (error) {
            console.error('Error fetching menus:', error)
        }
    }

    return { menus, currentPage, totalPages, fetchMenus }
}