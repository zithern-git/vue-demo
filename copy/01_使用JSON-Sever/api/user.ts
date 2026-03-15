/* // src/api/user.ts
import { get, post, put, del } from '@/utils/request'

// 定义 TS 类型（匹配 JSON-Server 返回的数据结构）
export interface User {
  id: number
  name: string
  age: number
  email: string
}

// 获取所有用户
export const getUsers = () => {
  return get<User[]>('/users')
}

// 获取单个用户
export const getUserById = (id: number) => {
  return get<User>(`/users/${id}`)
}

// 添加用户
export const addUser = (user: Omit<User, 'id'>) => {
  // Omit 排除 id（id 由 JSON-Server 自动生成）
  return post<User>('/users', user)
}

// 修改用户
export const updateUser = (id: number, user: User) => {
  return put<User>(`/users/${id}`, user)
}

// 删除用户
export const deleteUser = (id: number) => {
  return del(`/users/${id}`)
} */

// src/api/user.ts 完整可运行代码
import { get, post, del } from '@/utils/request' // 注意：这里用 del 对应删除，和你封装的一致

// 定义 User 类型（和 Person.vue 中导入的 type User 匹配）
export interface User {
  id: number
  name: string
  age: number
  email: string
}

// ✅ 必须导出 getUsers，和 Person.vue 导入匹配
export const getUsers = () => {
  return get<User[]>('/users')
}

// ✅ 必须导出 addUser，和 Person.vue 导入匹配（名称大小写、拼写完全一致）
export const addUser = (user: Omit<User, 'id'>) => {
  // Omit<User, 'id'> 排除 id，因为 JSON-Server 会自动生成 id
  return post<User>('/users', user)
}

// ✅ 必须导出 deleteUser，和 Person.vue 导入匹配
export const deleteUser = (id: number) => {
  return del(`/users/${id}`)
}
