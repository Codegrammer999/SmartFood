import { defineStore } from 'pinia'
const apiUrl = import.meta.env.VITE_API_URL

export const useOrderStore = defineStore('orderStore', {
  state: ()=> ({
    orders: [],
  }),

    actions:{
        placeOrder(cartItems){
           const newOrder = {
            items: cartItems
           } 
           this.orders.push(newOrder)
           this.saveOrders()
        },

        saveOrders(){
          localStorage.setItem('orders', JSON.stringify(this.orders))
        }, 

        loadOrders(){
          const storedOrders = localStorage.getItem('orders')
          if (storedOrders) {
            this.orders = JSON.parse(storedOrders)
          }
        },

        async getServerOrders(query){
          try {
            const res = await fetch(`${apiUrl}/api/getUserOrders`, {
              method: 'POST',
              headers: {
                "Accept": 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('Dababy_token')}`
              },
              body: JSON.stringify({ query: query})
            })

            const data = await res.json()
            if (res.ok) {
              this.orders = data
            }
            
          } catch (error) {
            console.error('Error fetching orders', error)
          }
        },

        clearLocalOrders(){
          localStorage.removeItem('orders')
          this.orders = []
        }
    }
})