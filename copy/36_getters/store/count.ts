import { defineStore } from 'pinia'

export const useCountStore = defineStore('count', {
  // actions里面放置的是一个一个的方法，用于响应组件中的动作
  actions: {
    plus(val: number) {
      if (this.count < 10) {
        this.count += val
      }
    },
  },
  //   真正存储数据的地方
  state() {
    return {
      count: 1,
    }
  },
  getters: {
    bigCount: (state) => state.count * 10,
  },
})
