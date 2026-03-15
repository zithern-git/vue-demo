// src/utils/request.ts
import axios, {
  type InternalAxiosRequestConfig,
  type AxiosRequestConfig,
  type AxiosResponse,
  AxiosError,
} from 'axios'

// 创建 Axios 实例
const service = axios.create({
  baseURL: 'http://localhost:3001', // JSON-Server 接口地址
  timeout: 5000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
})

// 请求拦截器：可添加 token、请求头处理等
// 2. 修复拦截器：使用正确类型 + 兜底 headers
service.interceptors.request.use(
  // ✅ 入参改为 InternalAxiosRequestConfig
  (config: InternalAxiosRequestConfig) => {
    // ✅ 兜底 headers，避免 undefined（核心修复点）
    config.headers = config.headers || {}

    // 示例：添加请求头 token（模拟登录态）
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = 'Bearer ' + token
    }

    return config
  },
  (error: AxiosError) => {
    console.error('请求错误：', error)
    return Promise.reject(error)
  },
)
// 响应拦截器：统一处理响应结果
service.interceptors.response.use(
  (response: AxiosResponse) => {
    // 只返回响应数据的 data 部分，简化组件调用
    return response.data
  },
  (error: AxiosError) => {
    console.error('响应错误：', error)
    // 统一错误提示（可结合 Element Plus 等 UI 库的消息提示）
    alert(`请求失败：${error.message}`)
    return Promise.reject(error)
  },
)

// 导出通用请求方法（适配 TS 泛型）
export const request = <T = any>(config: AxiosRequestConfig): Promise<T> => {
  return service(config) as Promise<T>
}

// 导出常用的请求方法（简化调用）
export const get = <T = any>(url: string, params?: any): Promise<T> => {
  return request<T>({ method: 'GET', url, params })
}

export const post = <T = any>(url: string, data?: any): Promise<T> => {
  return request<T>({ method: 'POST', url, data })
}

export const put = <T = any>(url: string, data?: any): Promise<T> => {
  return request<T>({ method: 'PUT', url, data })
}

export const del = <T = any>(url: string): Promise<T> => {
  return request<T>({ method: 'DELETE', url })
}

export default service
