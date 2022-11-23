<template>
	<div>
		<div id="page">
			<van-nav-bar
  left-text="返回" left-arrow title="猫眼电影"  @click-left="onClickLeft">
				<template #right>
					<van-icon name="wap-nav" size="20" color="white" />
				</template>
			</van-nav-bar>
		</div>
		<div id="ad">
			<div><img src="https://p0.meituan.net/scarlett/448afce485c1f342895185c2be668fa411803.png" alt=""></div>
			<div><span>发现最新最热电影</span>
				<span>打开app&gt;</span>
			</div>
		</div>
		<div id="nav">
			<div><span>广州
			<van-icon name="arrow-down" /></span></div>
			<div>
				<ul>
					<li><router-link to="/film/nowhot" active-class="selet">热映</router-link></li>
					<li><router-link to="/film/yingyuan" active-class="selet">影院</router-link></li>
					<li><router-link to="/film/coming" active-class="selet">待映</router-link></li>
					<li><router-link to='/film/jingdian' active-class="selet">经典电影</router-link></li>
				</ul>
			</div>
			<div class="search">
				<van-icon name="search"  size="20" />
			</div>
		</div>
		<transition name="zs" mode="out-in">
			<router-view></router-view>
		</transition>

	</div>
</template>

<script>
	import { Toast } from 'vant';
	export default {
		
		data() {
			return {
			 
			}
		},
		methods: {
		 onClick(name, title) {
		     console.log(title)
		},
		 onClickLeft() {
		      this.$router.back()
		    },
		
	},
	}
</script>

<style scoped lang="scss">
	* {
		margin: 0px;
		padding: 0px;
	}

	.van-nav-bar {
		background-color: red;
	}

	.zs-enter-active {
		animation: show 1s;
	}

	.zs-leave-active {
		animation: show 1s reverse;
	}

	@keyframes show {
		0% {
			transform: translateX(-200px);
			opacity: 0;
		}

		100% {
			transform: translateX(0px);
			opacity: 1;
		}
	}

	.right-enter-active {
		animation: right 1s;
	}

	.right-leave-active {
		animation: right 1s reverse;
	}

	@keyframes right {
		0% {
			transform: translateX(200px);
			opacity: 0;
		}

		100% {
			transform: translateX(0px);
			opacity: 1;
		}
	}

	.right {
		right: 0px;
	}
	a{
		text-decoration: none;
	}

	.zs {
		left: 0px;
	}

	.selet {
		color: blue;
	}

	#ad {
		width: 100%;
		height: 5rem;
		// background-color: aqua;
		display: flex;
		border-bottom: 0.0625rem solid darkgrey;
	}

	#ad>div:first-of-type {
		flex: 2;
		padding-right: 4.25rem;

		img {
			width: 100%;
			margin-top: 1.575rem;
			padding-left: 0.325rem;
		}

	}

	#ad>div:last-of-type {
		flex: 6;
	}

	#ad>div:last-of-type span {
		text-align: center;
		line-height: 5rem;
		padding-right: 0.25rem;
	}

	#ad>div:last-of-type span:first-of-type {
		font-weight: 700;
	}

	#ad>div:last-of-type span:last-of-type {
		color: #b37e7e;
		font-family: PingFangSC-Medium;
		font-weight: 700;
	}

	#nav {
		width: 100%;
		display: flex;
		height: 3.125rem;
			border-bottom: 0.0625rem solid darkgrey;
	}

	#nav div:first-of-type {
		flex: 1;
		line-height: 3.125rem;
	}

	#nav div:nth-of-type(2) {
		flex: 4;
		ul{
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			li{
				list-style: none;
				line-height: 3.125rem;
				padding-right: 0.3125rem;
				font-weight: 700;
				color: black;
			}
		}
	}
	#nav .search .van-icon{
		padding-left: 1.25rem;
	}

	#nav div:last-of-type {
		flex: 1;
		line-height: 3.125rem;
	}
</style>
