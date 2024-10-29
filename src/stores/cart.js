import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: ()=> ({
        cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
    }),

    getters: {
        cartCount: (state) => state.cartItems.reduce((count, item) => count + item.quantity * item.quantity, 0),
        totalPrice: (state) => state.cartItems.reduce((total, item)=> total + item.price * item.quantity, 0),
        itemsInCart: (state) => state.cartItems.length
    },

    actions: {
        addToCart(menu){
            const item = this.cartItems.find((i) => i.id === menu.id)
            if (item) {
                item.quantity++
            }else {
                this.cartItems.push({...menu, quantity: 1})
            }
            this.saveCart()
        },

        removeFromCart(menuId){
            this.cartItems = this.cartItems = this.cartItems.filter((item)=> item.id !== menuId)
            this.saveCart()
        },

        saveCart(){
            localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
        },

        loadCart(){
            const storedCart = localStorage.getItem('cartItems')
            if (storedCart) {
                this.cartItems = JSON.parse(storedCart)
            }
        },

        clearCart(){
            const storedCart = localStorage.getItem('cartItems')
            if (!storedCart) {
                return 'Cart is Empty'
            }

            this.cartItems.splice(0, this.cartItems.length)
            this.saveCart()
        }
    }
})