<template>
  <div id="big">
	  <div>
	  	<swiper class="swiper" :options="swiperOption">
	  	  <swiper-slide v-for="(item,index) in list1">
	  		<div class="box1"><img :src="item.img" alt="">
	  		 <p id="fly">观众评分:{{item.mk}}</p>
	  			 <p>{{item.nm}}</p>
	  		</div>
	  	</swiper-slide>
	  	 <div class="swiper-scrollbar"></div>
	  	</swiper>
	  </div>
	  <van-list
	    v-model="loading"
	    :finished="finished"
	    finished-text="没有更多了"
	    @load="onLoad"
		class="filmsList"
		:immediate-check="false"
	  >
	   <van-cell class="li" v-for="item in list" @click="go(item.filmId)" :key="item.filmId">
    <li>
        <div class="left"><img :src="item.poster" alt=""></div>

        <div class="center">
          <p class="title">{{item.name}}</p>
          <p class="grade">观众评分: <span class="grade2">{{item.grade}}</span></p>
          <div class="actors">
            主演: <span>{{item.actors | actorsFilter}}</span>
          </div>
          <div>
              <span>{{item.nation}} </span><span> | </span><span> {{item.runtime}}</span>
          </div>
        </div>

        <div class="right"><button>购买</button></div>
		</li>
     </van-cell>
     </van-list>
  </div>
</template>
<!-- 正在热映 -->
<!-- https://m.maizuo.com/gateway?cityId=440100&pageNum=1&pageSize=10&type=1&k=7006234 -->
<!-- 即将上映 -->
<!-- https://m.maizuo.com/gateway?cityId=440100&pageNum=1&pageSize=10&type=2&k=1521466 -->
<script>
  // import axios from 'axios'
  import http from "@/assets/utils.js"
  import Vue from "vue"
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  import axios from 'axios'
  import { Toast } from 'vant';
  
  Vue.use(Toast);
  Vue.filter("actorsFilter",(item)=>{
    return item.map((item)=>item.name).join(" ")
  })
  Vue.filter("imgFilter",(a)=>a.img1+a.img2)
  export default {
	  name: 'swiper-example-free-mode',
	  title: 'Free mode / No fixed positions',
	  components: {
	    Swiper,
	    SwiperSlide
	  },
    mounted(){
      // axios.get("https://m.maizuo.com/gateway?cityId=440100&pageNum=1&pageSize=10&type=1&k=7006234",{
      //   headers:{
      //     'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.2.1","e":"16644159042790947058352129"}',
      //     'X-Host': 'mall.film-ticket.film.list',
      //     "X-Requested-With": "XMLHttpRequest",
      //     "X-Token": "undefined"
      //   }
      // })
	  
	  axios.get('/api/mmdb/movie/v3/list/hot.json?ct=%E5%B9%BF%E5%B7%9E&ci=20&channelId=4').then(res=>{
	    // console.log(res);
	    this.list1=res.data.data.hot;
	  });
      http[0]({
        baseURL:"https://m.maizuo.com/gateway?cityId=440100&pageNum=1&pageSize=10&type=1&k=7006234"
      }).then(res=>{
		  this.total = res.data.data.total;
        this. list = res.data.data.films;
      })
    },
    data(){
      return {
        list:[],
		list1:[],
		swiperOption: {
		    slidesPerView: 3,
		    spaceBetween: 30,
		    freeMode: true,
		    pagination: {
		      el: '.swiper-pagination',
		      clickable: true
		    },
		scrollbar: {
		      el: '.swiper-scrollbar',
		    },
		  },
		  loading:false,
		  finished:false,
		  currentPageNum:1,
		  total:0
      }
    },
    methods:{
      go(id){
        console.log(id);
         // this.$router 对整体url进行操作
        this.$router.push({
          path:`/film/${id}`
        });
        // console.log(this.$router)
      },
	  onLoad(){
	    console.log(this.total);
	    // 数据全部加载完成
	    if (this.list.length == this.total) {
	      this.finished = true;
	      return ;
	    }
	    this.currentPageNum++;
	     // 异步更新数据
	      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
	     http[0]({
	       baseURL:`https://m.maizuo.com/gateway?cityId=440100&pageNum=${this.currentPageNum}&pageSize=10&type=1&k=7006234`
	     }).then(res=>{
	       this.list = [...this.list,...res.data.data.films];
	       // 加载状态结束
	       this.loading = false;
	     })
	  }
    }
  }
</script>

<style lang="scss" scoped>
	#big{
		background-color: #f5f5f5;
	}
  .filmsList{
	  width: 100vw;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    list-style: none;
    li{
      justify-content: space-around;
      width:100%;
      // padding:0.625rem;
      box-sizing: border-box;
      // background:skyblue;
      display: flex;
	  border-bottom: 0.0625rem solid darkgray;
	  // height: 9.375rem;
	  background-color: white;
     .left{
       flex: 1;
       // background:lavenderblush;
       padding:0.625rem;
       box-sizing: border-box;
	   img{
		   width: 100%;
	   }
     }
     .center{
        flex: 4;
        // background:pink;
        padding:0.625rem;
        box-sizing: border-box;
        color:gray;
        font-size:0.8rem;
        .grade2{
          color:#f60;
          font-size:1.2rem;
        }

        .actors{
          span{
            margin-right:0.3125rem;
          }
        }
     }
     .right{
         flex: 1;
         // background:lightcoral;
         padding:1.625rem;
         box-sizing: border-box;
		 button{
			 border-radius: 0.625rem;
			 border: 0;
			 width: 3.125rem;
			 height: 1.25rem;
			 background-color: red;
			 color: white;
			 font-size: 0.75rem;
			 font-weight: 500;
		 }
     }
    }
  }
  .swiper {
      width: 100%;
  	 height: 14.25rem;
  	
  } 
   .swiper img{
  	 width: 100%;
  	 height: 11.25rem;
   }
   .box1{
  	 color: #ffb400;
  	 #fly{
  	 		 position: absolute;
  			 bottom: 2.9rem;
  			 left: 0.5rem;
  			 color: #ffb400;
  			 font-size: 0.9375rem;
  			 font-weight: 700;
  	 }
  	
   }
    .box1 P:last-of-type{
  	  white-space: nowrap;
  	  overflow: hidden;
  	  text-overflow: ellipsis;
  	  color: black;
  	  text-align: center;
    }
</style>
