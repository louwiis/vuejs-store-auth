import { defineStore } from 'pinia'

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: localStorage.getItem('token'),
  }),
  actions: {
    login(token) {
      localStorage.setItem('token', token)
      this.token = token
    },

    logout() {
      localStorage.removeItem('token')
      this.token = null
    }
  }
})
