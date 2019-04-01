// 二级路由的实现:
import Vue from 'vue'
import Router from 'vue-router'
/* 直接引入 */
import Home from './views/Home.vue'
import contentList from './components/page/contentList.vue'


Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	/* 配置页面的跳转 */
	routes: [{
		{
      // 一级路由
			path: '/content',
			name: 'contetnList',
			component: () => import('./components/page/contentList.vue'),
      // 二级路由
			children: [
				{
					path: '/login',
					name: 'login',
					component: () => import('./components/login/login.vue'),
					children: [
							{path: '/film', component: () => import ('./components/login/userInfo.vue')}
					]
					
				},
      ]
  ]
})

