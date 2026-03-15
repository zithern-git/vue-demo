import { defineStore } from 'pinia'

export const useTalkStore = defineStore('talk', {
  state() {
    return {
      talkList: [
        { id: '36252201', title: '1234456789' },
        { id: '36252202', title: 'qwertyutyu' },
        { id: '36252203', title: '@#$%^&%^&*$' },
      ],
    }
  },
})
