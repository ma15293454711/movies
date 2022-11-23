import Vue from 'vue'
import VueRouter from 'vue-router'
// import My from '@/views/my'
import film from '@/views/film'
import Nowhot from '@/views/film/nowhot'
import Coming from '@/views/film/coming'
import Detial from '@/views/detial'
import login from '@/views/login'
import yingyuan from '@/views/film/yingyuan'
import jingdian from '@/views/film/jingdian'
Vue.use(VueRouter)

const routes = [{
		path: '/film',
		component: film,
		children: [{
				path: '/film/nowhot',
				component: Nowhot
			},
			{
				path: '/film/coming',
				component: Coming
			},
			{
				path: '/film',
				redirect: '/film/nowhot'
			},
			{
				path: '/film/yingyuan',
				component: yingyuan
			},
			{
				path: '/film/jingdian',
				component: jingdian
			},
		]
	},
	{
		path: '/my',
		component: () => import('@/views/my'),
		meta: {
			Icon: true
		}
	},
	{
		path: '/film/:id',
		component: Detial
	},
	{
		path: '/tv',
		component: () => import('@/views/tv'),
	},
	{
		path: '/smalltv',
		component: () => import('@/views/smalltv'),
	},
	{
		path: '/yanchu',
		component: () => import('@/views/yanchu'),
		meta: {
			Icon: true
		}
	},
	{
	   path:"/search",
	   component:() => import('@/views/Search')
	 },
	 {
	    path:"/city",
	    component:() => import('@/views/City'),
	  },
	{
		path: '/login',
		component: login
	},
	// 重定向
	{
		path: '*',
		redirect: '/film'
	}
]

const router = new VueRouter({

	routes
})
// 注册全局前置守卫   前置拦截
// 独享  局部
// 组件
router.beforeEach((to, from, next) => {
	console.log(to.meta.Icon)
	if (to.meta.Icon) {
		// 是否登录
		if (localStorage.getItem('token')) {
			next();
		} else {
			next('/login')
			sessionStorage.setItem("path", to.path);
		}
	} else {
		next();
	}

})

export default router
