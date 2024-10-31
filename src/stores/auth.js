import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authStore', {
  state: ()=> {
    return {
      user: null,
      isFetchingUser: true,
      errors: {}
    }
},

  actions: {
    async register(apiRoute, formData) {
     try {
      formData.isProcessing = true
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
        return true
       }else if (data.errors) {
        this.errors = data.errors
        return false
       }else if (data.referralErr) {
        this.errors = data
        return false
       }

     } catch (error) {
      this.errors.catchErr = error
      console.log('something went wrong: ', error)
     }finally {
      formData.isProcessing = false
     }
    },

    async login(apiRoute, formData) {
      try {
        formData.isProcessing = true
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
         return true
        }else if (data.errors) {
         this.errors = data.errors
         return false
        }else if (data.message && !data.success) {
          this.errors = data
          return false
        }
 
      } catch (error) {
       this.errors.catchErr = error
       console.log('something went wrong: ', error)
      }finally {
        formData.isProcessing = false
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
    }finally {
      this.isFetchingUser = false
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
          return true
        }        
    } catch (error) {
      this.errors.getUser = error
      console.log('something went wrong', error)
      return false
    }
  }
  }
})
