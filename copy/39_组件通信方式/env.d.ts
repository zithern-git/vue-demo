// src/env.d.ts
/// <reference types="vite/client" />

// 声明.vue文件的类型，让TS识别
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}