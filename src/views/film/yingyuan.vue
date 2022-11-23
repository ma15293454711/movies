<template>

	<div>

		<div>
		  <van-nav-bar title="我的" @click-left="go()">
		    <template #left>
		      <span>{{$store.state.cityName}}</span><van-icon name="arrow-down" size="10" color="black"/>
		    </template>
		    <template #right>
		      <van-icon name="search" size="24" color="black"/>
		    </template>
		  </van-nav-bar>
		  <!-- <van-button type="primary" @click="toast()">主要按钮</van-button> -->
		
		
		  <ul>
		    <li v-for="data in $store.state.cinemaList">
		      <div class="left">
		        <p>{{data.name}}</p>
		        <span>{{data.address}}</span>
		      </div>
		      <div class="right">
		        <span>{{data.lowPrice/100}}起</span>
		      </div>
		    </li>
		  </ul>
		
		</div>
	</div>
</template>


<script>
import Vue from 'vue';
import http from "@/assets/utils.js"
import { Toast } from 'vant';

Vue.use(Toast);
  export default {
    mounted(){
      if(this.$store.state.cinemaList.length==0){
        this.$store.dispatch("getCinemaList");
      }
    },
    destroyed(){
      this.$store.commit("emptyCinemaList");
    },
    data(){
      return {
        list:[]
      }
    },
    methods:{
      go(){
        this.$router.push("/city")
      },
      toast(){
        Toast.loading({
          message: '加载中...',
          forbidClick: true,
          duration:1000,
          position:"top"
        });
      },
      changeHello(){
        this.$store.state.hello = "hello world";
      },
      search(){
        this.$router.push("/search");
      }
    }
  }
</script>

<style lang="scss" scoped="scoped">
  .my-swipe .van-swipe-item {
      color: #fff;
      font-size: 20px;
      line-height: 150px;
      text-align: center;
      background-color: #39a9ed;
    }
    ul{
      li{
        display: flex;
        flex-wrap: wrap;
        height:6.25rem;
        width:100%;
        margin-bottom:10px;
        .left{
          flex:3;
          background:pink;
        }
        .right{
          flex:1;
          background:skyblue;
        }
      }
    }
</style>
