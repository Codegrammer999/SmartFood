import { defineStore } from 'pinia'

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
            const res = await fetch('/api/getUserOrders', {
              method: 'POST',
              headers: {
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