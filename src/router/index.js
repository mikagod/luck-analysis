import { createWebHistory, createRouter } from 'vue-router'


// 路由规则
const routes = [
  { path: '/', component: () => import('@/views/luck-analysis-1.vue') },
  { path: '/2', component: () => import('@/views/luck-analysis-2.vue') },
  { path: '/3', component: () => import('@/views/luck-analysis-3.vue') },
  { path: '/4', component: () => import('@/views/luck-analysis-4.vue') },
  { path: '/yearly-luck-5', component: () => import('@/views/yearly-luck/luck-analysis-5.vue') },
  { path: '/yearly-luck-6', component: () => import('@/views/yearly-luck/luck-analysis-6.vue') },

  { path: '/recent-luck-5', component: () => import('@/views/recent-luck/luck-analysis-5.vue') },
  { path: '/recent-luck-6', component: () => import('@/views/recent-luck/luck-analysis-6.vue') },

  { path: '/7', component: () => import('@/views/luck-analysis-7.vue') },
  
]

// 路由实例
const router = createRouter({
  history: createWebHistory(),
  routes,
})




// // 监听 popstate 事件
// window.addEventListener('popstate', () => {
//   const currentPath = router.currentRoute.value.fullPath;

//   // 检查是否是第四页
//   if (currentPath === '/5') {
//     // 使用 setTimeout 立即刷新页面
//     setTimeout(() => {
//       window.location.reload();
//     }, 0);
//   }
// });





export default router;