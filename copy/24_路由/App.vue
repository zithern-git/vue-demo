<template>
  <div class="app-container">
    <!-- 头部 -->
    <header>
      <div class="header-logo">路由测试</div>
      <div class="header-user">欢迎访问</div>
    </header>

    <!-- 导航栏 -->
    <nav>
      <ul class="nav-list">
        <li class="nav-item"><RouterLink to="/home" active-class="high-light">首页</RouterLink></li>
        <li class="nav-item"><RouterLink to="/news" active-class="high-light">新闻</RouterLink></li>
        <li class="nav-item"><RouterLink to="about" active-class="high-light">关于</RouterLink></li>
      </ul>
    </nav>

    <!-- 主体内容 -->
    <main>
      <div class="main-content">
        <RouterView></RouterView>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 确保html/body占满屏幕高度，为Flex布局提供基础 */
/* .app {
  height: 100%;
  font-family: 'Microsoft Yahei', sans-serif;
  color: #333;
} */

/* 页面整体容器：垂直Flex布局，占满屏幕 */
.app-container {
  height: 100%;
  font-family: 'Microsoft Yahei', sans-serif;
  color: #333;
  display: flex;
  flex-direction: column; /* 垂直排列header/nav/main */
  height: 100%;
}

/* 1. Header 头部样式 */
header {
  height: 60px; /* 固定高度 */
  background-color: #2c3e50; /* 深色背景 */
  color: white;
  display: flex;
  align-items: center; /* 垂直居中 */
  justify-content: space-between; /* 内容左右分布 */
  padding: 0 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 轻微阴影提升层次感 */
}

.header-logo {
  font-size: 1.2rem;
  font-weight: bold;
}

.header-user {
  font-size: 0.9rem;
}

/* 2. Nav 导航栏样式 */
nav {
  background-color: #34495e;
  padding: 0 20px;
  flex-shrink: 0; /* 防止导航栏被压缩 */
}

.nav-list {
  display: flex; /* 水平排列导航项 */
  list-style: none; /* 清除列表默认样式 */
  flex-wrap: wrap; /* 响应式换行 */
  gap: 10px; /* 导航项间距 */
}

.nav-item a {
  display: block;
  padding: 12px 16px;
  color: white;
  text-decoration: none; /* 清除下划线 */
  transition: background-color 0.3s; /*  hover过渡效果 */
}

.nav-item a:hover {
  background-color: #1abc9c; /*  hover高亮 */
  border-radius: 4px;
}

.high-light {
  background-color: #e5a2d9;
}

/* 3. Main 主体区域样式 */
main {
  flex: 1; /* 核心：占满剩余屏幕高度 */
  background-color: #f8f9fa;
  padding: 20px;
  overflow: auto; /* 内容超出时滚动，避免溢出屏幕 */
}

.main-content {
  max-width: 1200px; /* 限制主体最大宽度，提升阅读体验 */
  margin: 0 auto; /* 水平居中 */
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

/* 响应式适配：小屏幕下优化导航栏 */
@media (max-width: 768px) {
  .nav-list {
    justify-content: center; /* 小屏幕导航项居中 */
  }

  header {
    flex-direction: column; /* 小屏幕头部内容垂直排列 */
    height: auto;
    padding: 10px;
  }
}
</style>
