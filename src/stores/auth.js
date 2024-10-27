import router from '@/router'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authStore', {
  state: ()=> {
    return {
      user: null,
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
        router.push('/login')
       }else if (data.errors) {
        this.errors = data.errors
       }else if (data.referralErr) {
        this.errors = data
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
          this.user = data.user
         this.errors = {}
         localStorage.setItem('Dababy_token', data.token)
         router.push('/dashboard')
        }else if (data.errors) {
         this.errors = data.errors
        }else if (data.message && !data.success) {
          this.errors = data
        }
 
      } catch (error) {
       this.errors.catchErr = error
       console.log('something went wrong: ', error)
      }
     },

    async getUser() {
    try {
        const res = await fetch('/api/user', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('Dababy_token')}`
          }
        })

        const data = await res.json()

        if (res.ok) {
          this.user = data
        }        
    } catch (error) {
      this.errors.getUser = error
      console.log('something went wrong', error)
    }
  },

  async logout() {
    try {
        const res = await fetch('/api/logout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('Dababy_token')}`
          }
        })

        const data = await res.json()

        if (res.ok && data.success) {
          this.user = null
          localStorage.removeItem('Dababy_token')
          router.push('/login')
        }        
    } catch (error) {
      this.errors.getUser = error
      console.log('something went wrong', error)
    }
  }
  }
})
