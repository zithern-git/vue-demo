import { nanoid } from 'nanoid'
import { defineStore } from 'pinia'

export const useTalkStore = defineStore('talk', {
  actions: {
    getATalk() {
      let obj = { id: nanoid(), title: '这是一个新创建的li元素' }
      this.talkList.unshift(obj)
    },
  },
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
