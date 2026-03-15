import { defineStore } from 'pinia'

/* export const useCountStore = defineStore('count', {
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
 */

// 组合式store
import { ref, computed } from 'vue'
export const useCountStore = defineStore('count', () => {
  let count = ref(1)
  const bigCount = computed(() => {
    return count.value * 10
  })
  const plus = (val: number) => {
    if (count.value < 10) {
      count.value += val
    }
  }
  return { count, bigCount, plus }
})

// getters（计算属性）不再是单独的配置项，而是直接使用 Vue 原生的 computed 函数来实现
