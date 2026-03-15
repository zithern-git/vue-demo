<template>
  <div class="person">
    <h2>用户列表（JSON-Server 模拟）</h2>
    <!-- 新增用户表单 -->
    <div class="add-form">
      <input v-model="newUserName" placeholder="请输入姓名" />
      <input v-model.number="newUserAge" placeholder="请输入年龄" type="number" />
      <input v-model="newUserEmail" placeholder="请输入邮箱" />
      <button @click="handleAddUser">添加用户</button>
    </div>

    <!-- 用户列表展示 -->
    <ul>
      <li v-for="user in userList" :key="user.id">
        {{ user.name }} ({{ user.age }}岁) - {{ user.email }}
        <button @click="handleDeleteUser(user.id)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script setup name="Person" lang="ts">
import { ref, onMounted } from 'vue'
import { type User, getUsers, addUser, deleteUser } from '@/api/user'

// 响应式数据
const userList = ref<User[]>([])
const newUserName = ref('')
const newUserAge = ref(0)
const newUserEmail = ref('')

// 初始化：获取所有用户
const fetchUsers = async () => {
  try {
    const data = await getUsers()
    userList.value = data
  } catch (err) {
    console.error('获取用户列表失败：', err)
  }
}

// 添加用户
const handleAddUser = async () => {
  if (!newUserName.value || !newUserAge.value || !newUserEmail.value) {
    alert('请填写完整信息')
    return
  }
  try {
    // 调用添加用户接口
    await addUser({
      name: newUserName.value,
      age: newUserAge.value,
      email: newUserEmail.value,
    })
    // 重新获取列表
    fetchUsers()
    // 清空表单
    newUserName.value = ''
    newUserAge.value = 0
    newUserEmail.value = ''
    alert('添加用户成功！')
  } catch (err) {
    console.error('添加用户失败：', err)
  }
}

// 删除用户
const handleDeleteUser = async (id: number) => {
  if (confirm('确定要删除该用户吗？')) {
    try {
      await deleteUser(id)
      fetchUsers() // 重新获取列表
      alert('删除用户成功！')
    } catch (err) {
      console.error('删除用户失败：', err)
    }
  }
}

// 组件挂载时加载数据
onMounted(() => {
  fetchUsers()
})
</script>

<style>
.user-list {
  width: 600px;
  margin: 20px auto;
}
.add-form {
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
}
.add-form input {
  padding: 8px;
  flex: 1;
}
.add-form button {
  padding: 8px 16px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  padding: 10px;
  border: 1px solid #eee;
  margin-bottom: 8px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
li button {
  background: #ff4444;
  color: white;
  border: none;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
}
</style>
