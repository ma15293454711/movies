<template>
	<div>
		<!-- <div>
			<van-nav-bar title="登录猫眼" left-text="返回" left-arrow>
			</van-nav-bar>
		</div>
		<div id="form">
			<div id="form1">
				<div id="img"><img src="http://p1.meituan.net/scarlett/250ea3bcd3f706c953a35ee314605f8914743.png" alt=""></div>
				<div 	id="zhanghao">账号：<input type="text" placeholder="请输入账号" v-model="username"></div>
				<div id="mima">密码：<input type="password" placeholder="请输入密码" v-model="password"></div>
				<button @click="login()">登录</button>
				<div id="jizhu">
					<van-checkbox v-model="checked">登录即同意<a href="#">《《猫眼用户同意协议》》《《隐私政策》》</a></van-checkbox>
					<p>客服电话：1232-4321</p>
					<p>未注册的手机号将自动生成新手机号</p>
				</div>
			</div>
		</div> -->
		
		
		    <div class="dowebok">
		
		    <div class="logo"></div>
		
		    <div class="form-item">
		
		    <input id="username" type="text" autocomplete="off" placeholder="邮箱">
		
		    </div>
		
		    <div class="form-item">
		
		    <input id="password" type="password" autocomplete="off" placeholder="登录密码">
		
		    </div>
		
		    <div class="form-item"><button id="submit" @click="login()">登 录</button></div>
		
		    <div class="reg-bar">
		
		    <a class="reg" href="javascript:">立即注册</a>
		
		    <a class="forget" href="javascript:">忘记密码</a>
		
		    </div>
		
		    </div>

	</div>
	
</template>

<script>
	import { Toast } from 'vant';
	export default{
		data(){
			return{
				username:'',
				password:'',
				 checked: true,
			}
		},
		methods:{
			login(){
				localStorage.setItem('token',{
					password:this.password,
					username:this.username
				})
				 this.$router.push(sessionStorage.getItem("path"));
			}
		}
		
	}
</script>

<style lang="scss" scoped>
	#form{
		width: 90%;
		background: url(http://p1.meituan.net/scarlett/5897aa52c9a63d5ad62ffd62eb99afa930024.png) no-repeat 100%;
		// height: 20rem;
		border: 0.0625rem solid red;
		margin: 2rem auto;
		#form1{
			margin: 0 auto;
				#img{
					width: 60%;
					margin: 0 auto;
					img{
						width: 100%;
					}
				}
			
		}
	}

</style>