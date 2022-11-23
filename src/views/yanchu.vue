<template>
	<div>
		<h1>演出</h1>
		<van-button type="primary" @click="toast()">主要按钮</van-button>
	</div>
	
</template>

<script>
	import Vue from 'vue';
	import { Button } from 'vant';
	import { Toast } from 'vant';
	
	Vue.use(Toast);
	
	Vue.use(Button);
	export default{
		methods:{
			// toast(){
			// 	Toast.loading({
			// 	  message: '加载中...',
			// 	  forbidClick: true,
			// 	   duration: 1000, // 持续展示 toast
			// 	    forbidClick: true,
			// 		position:'top',
			// 	});
			// }
		}
		}
	
</script>

<style>
</style>