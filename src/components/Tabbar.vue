<template>
  <div>
      <!-- hello -->
   <!--  <ul class="tabbar">
        <li>
           <router-link to="/film" active-class="select">index</router-link>
        </li>
         <li>
           <router-link to="/my" active-class="select">my</router-link>
         </li>
      </ul> -->
	  <van-tabbar v-model="active" id="tabber">
	    <van-tabbar-item icon="home-o"> <router-link to="/film">电影/影院</router-link></van-tabbar-item>
	    <van-tabbar-item icon="friends-o"><router-link to="/tv" >视频</router-link></van-tabbar-item>
	    <van-tabbar-item icon="friends-o"><router-link to="/smalltv">小视频</router-link></van-tabbar-item>
	    <van-tabbar-item icon="setting-o"><router-link to="/yanchu">演出</router-link></van-tabbar-item>
		 <van-tabbar-item icon="search"> <router-link to="/my">我的</router-link></van-tabbar-item>
	  </van-tabbar>
      <router-view></router-view>
   </div>
</template>

<script>
	export default {
	  data() {
	    return {
	      active: 0,
	    };
	  },
	};
</script>
<style lang="scss">
       #tabber{
       z-index: 10;
       }
</style>
