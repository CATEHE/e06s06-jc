import { create } from 'zustand'
import api from '../services/api'

const ls = window.localStorage

export const useAuth = create((set) => ({
    user: JSON.parse(ls.getItem('user')) || null,
    token: ls.getItem('token') || null,
    isAuth: !!ls.getItem('token'),
    status: 'idle',
    error: null,
    
    login: async ( {email, password}) => {
      set({ status:'pendiente'})
      
      try {
        const res = await api.post('user/login', { email, password})
        const { user, token } = res.data

        ls.setItem('token', token)
        ls.setItem('user', JSON.stringify(user))

        set ({
          user,
          token,
          isAuth: true,
          status: 'resolved',
          error: null,
        })  

      } catch (error) {
        set({
          status: 'rejected',
          error: error.response?.data?.message || error.message,
        })

      }

      return set({ state:1 })
    },

    logout: () => {
      ls.removeItem('token')
      ls.removeItem('user')
    
    set({
      user: null,
      token: null,
      isAuth: false,
      status: 'idle',
      error: null,
      })
    }

}))