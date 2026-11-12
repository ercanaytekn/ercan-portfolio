import axios from 'axios'

export const apiClient = axios.create({
  baseURL: 'https://reqres.in/api',
  timeout: 8000,
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': import.meta.env.VITE_REQRES_API_KEY,
  },
})
