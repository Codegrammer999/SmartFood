import { ref } from "vue"
const apiUrl = import.meta.env.VITE_API_URL

export function useMenus() {
    const menus = ref([])
    const currentPage = ref(1)
    const totalPages = ref(1)

    const fetchMenus = async(category) => {
        try {
            const res = await fetch(`${apiUrl}/api/menus`, {
                method: 'POST',
                headers: {
                    "Accept": 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('Dababy_token')}`
                },
                body: JSON.stringify({ category: category })
            })
            const data = await res.json()

            if (res.ok && res.status === 200) {
                menus.value = data.data
                currentPage.value = data.current_page
                totalPages.value = data.last_page
            }
        
        } catch (error) {
            console.error('Error fetching menus:', error)
        }
    }

    return { menus, currentPage, totalPages, fetchMenus }
}