import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authStore', {
  state: ()=> {
    return {
      user: null,
      redirect: null,
      errors: {}
    }
},

  actions: {
    async register(apiRoute, formData) {
     try {
       const res = await fetch(apiRoute, {
         method: 'POST',
         body: JSON.stringify(formData),
         headers: {
           'Content-Type': 'application/json'
         }
       })
       const data = await res.json()

       if (res.ok && data.success) {
        this.errors = {}
        this.redirect = { toLogin: true }
       }else if (data.errors) {
        this.errors = data.errors
       }

     } catch (error) {
      this.errors.catchErr = error
      console.log('something went wrong: ', error)
     }
    },

    async login(apiRoute, formData) {
      try {
        const res = await fetch(apiRoute, {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const data = await res.json()
 
        if (res.ok && data.token) {
         this.errors = {}
         localStorage.setItem('Dababy_token', data.token)
         this.redirect = { toDashboard: true }
        }else if (data.errors) {
         this.errors = data.errors
        }
 
      } catch (error) {
       this.errors.catchErr = error
       console.log('something went wrong: ', error)
      }
     },

    async getUser(apiRoute) {
    try {
        const res = await fetch(apiRoute, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('Dababy_token')}`
          }
        })
        const data = await res.json()
        this.user = data
    } catch (error) {
      this.errors.getUser = error
      console.log('something went wrong', error)
    }
  }
  }
})
