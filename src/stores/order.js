import { defineStore } from 'pinia'

export const useOrderStore = defineStore('orderStore', {
  state: ()=> ({
    orders: [],
  }),

    actions:{
        placeOrder(cartItems){
           const newOrder = {
            id: Date.now(),
            items: cartItems,
            placedAt: new Date(),
            status: 'pending'
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
        }
    }
})