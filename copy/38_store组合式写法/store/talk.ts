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
      // 不写“ || []”会报错，因为最开始是 null
      talkList: JSON.parse(localStorage.getItem('talkList') as string) || [],
    }
  },
})
