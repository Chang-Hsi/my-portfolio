import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    projectName: 'My Portfolio',
  }),
})
