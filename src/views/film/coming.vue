<template>
	<div>
		<ul>
			<li v-for="(item,index) in list">
				<img :src="item.img" alt="">
				<p>{{item.nm}}</p>
			</li>
		</ul>
	</div>
</template>

<script>
	import axios from 'axios'
	import Vue from 'vue'
	 import http from "@/assets/utils.js"
	// import { Toast } from 'vant'
	
	// Vue.use(Toast)
	export default{
		mounted() {
			http[0]({
			  baseURL:"/ajax/comingList?token=&limit=10"
			}).then(res=>{
			  this. list = res.data.coming;
			})
			// axios.get("/ajax/comingList?token=&limit=10")
			// .then(res=>{
			// 	console.log(res)
			// 	this.list=res.data.coming;
			// })
		},
		data() {
			return {
				msg:"123",
				list:[]
				
			} 
		},
		methods:{
			
		}
	}
</script>
<style scoped="scoped" lang="scss">
	ul{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		list-style: none;
		li{
			width: 45%;
			img{
				width: 100%;
			}
		}
	}
	li{
		width: 45%;
		img{
		   width: 100%;	
		}
	}
</style>