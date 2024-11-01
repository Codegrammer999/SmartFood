import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menuStore', {
  state: ()=> {
    return {
      menu: {}
    }
},
  actions: {
    async getSpecificMenu(menuId){
      try {
        const res = await fetch(`/api/menus/${menuId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('Dababy_token')}`
          },
        })
        const data = await res.json()
        if (res.ok) {
          this.menu = data
          return true
        }
      } catch (error) {
        console.error('Error fetching specific menu', error)
        return false
      }
    }
  }
})