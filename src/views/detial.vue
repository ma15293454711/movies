<template>
  <div id="page">
			<van-nav-bar
  left-text="返回" left-arrow title="猫眼电影"  @click-left="onClickLeft">
				<template #right>
					<van-icon name="wap-nav" size="20" color="white" />
				</template>
			</van-nav-bar>
	  
	 <div id="bigtop">
		 <div class="top"><p>猫眼电影>{{item.name}}</p> </div>
		  <div class="bottom">
				<div class="b_left"><img :src="item.poster"></div>
				<div class="b_right">
					<p>{{item.name}}</p>
					<p>{{item.category}}</p>
					<p>{{item.actors | actorsFilter}}</p>
					<p>{{ item.premiereAt | timeFilter}} {{item.nation}}上映/{{item.runtime}}</p>
	<van-button icon="like-o"  type="info" color="#80919b">想看</van-button>
				<van-button icon="star-o"  type="info" color="#80919b">看过</van-button>
				</div>
			</div>
			<div class="watch">
				<div class="one"><van-icon color="white" name="manager-o" /><span>猫眼想看</span></div>
				<div class="two"><p><span>{{item.premiereAt}}</span>人想看</p></div>
			</div>
			<div class="jieshao">
				<div>简介</div>
				<p>{{item.synopsis}}</p>
			</div>
			<div class="people">
				<div>演职人员</div>
				<div>
					<swiper class="swiper" :options="swiperOption">
					  <swiper-slide v-for="(item1,index) in actors">
						<div class="box1"><img :src="item1.avatarAddress" alt="">
						 <p id="fly">{{item1.role}}</p>
							 <p>{{item1.name}}</p>
						</div>
					</swiper-slide>
					 <div class="swiper-scrollbar"></div>
					</swiper>
				</div>
			</div>
			<div class="peo2">
				<div>剧照</div>
				<div>
					<swiper class="swiper" :options="swiperOption">
					  <swiper-slide v-for="(item2,index) in photos">
						<div class="box1"><img :src="item2" alt="">
						</div>
					</swiper-slide>
					 <div class="swiper-scrollbar"></div>
					</swiper>
				</div>
			</div>
			
  </div>
  </div>
</template>

<script>
  import axios from "axios"
  // import http from "@/assets/utils.js"
  import http from "@/assets/utils.js"
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  import { Toast } from 'vant';
  import Vue from "vue"
  Vue.filter("actorsFilter",(item)=>{
    return item.map((item)=>item.name).join(" ")
  })
  Vue.filter("timeFilter",(d)=>{
    var a = new Date(d*1000);
    return a.getFullYear()+"年-"+(a.getMonth()+1)+"月-"+a.getDate()+"日"
  })
  export default {
	  name: 'swiper-example-free-mode',
	  title: 'Free mode / No fixed positions',
	  components: {
	    Swiper,
	    SwiperSlide
	  },
    data(){
      return {
        item:"",
		actors:'',
		photos:'',
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
      }
    },
	methods:{
		onClickLeft() {
		     this.$router.back()
		   },
	},
    created(){
      // this.$route 对当前哈希值操作
      console.log(this.$route.params.id);
      http[0](`https://m.maizuo.com/gateway?filmId=${this.$route.params.id}&k=8797333`,{
        headers:{
           "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.1","e":"16644159042790947058352129"}',
           "X-Host": "mall.film-ticket.film.info",
           "X-Requested-With": "XMLHttpRequest",
            "X-Token": "undefined"
          }
      })
     // axios.get("https://m.maizuo.com/gateway?filmId=6112&k=8797333",{
     //   headers:{
     //    "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.1","e":"16644159042790947058352129"}',
     //    "X-Host": "mall.film-ticket.film.info",
     //    "X-Requested-With": "XMLHttpRequest",
     //     "X-Token": "undefined"
     //   }
     // })
     .then(res=>{
		 // this.id=res.data.data.filmId;
        this.item = res.data.data.film;
		this.actors=res.data.data.film.actors;
		this.photos=res.data.data.film.photos;
        console.log(res);
      })
	  
    }
  }
</script>

<style lang="scss" scoped>
	*{
		padding: 0px;
		margin: 0px;
	}
	#page{
		background-color:#3c5666;
		width: 100%;
	}
	#bigtop{
		width: 100%;
		margin-bottom: 3.125rem;
		.top{
			width: 100%;
			height: 1.875rem;
			p{
				color: white;
				line-height: 1.895rem;
				font-size: 0.875rem;
				font-weight: 100;
				padding-top: 0.625rem;
				padding-left: 0.625rem;
				
			}
		}
		.bottom{
			padding-top: 1.25rem;
			width: 100%;
			display: flex;
			.b_left{
				flex: 2;
				padding-left: 0.625rem;
				img{
					width: 100%;
				}
			}
			.b_right{
				padding-left: 0.625rem;
				flex: 4;
			}
		}
		.watch{
			margin-top: 0.625rem;
			width: 90%;
			background-color:#314654;
			margin: 0 auto;
			// height: 12.5rem;
			border-radius: 0.625rem;
			padding-bottom: 1.875rem;
			.one{
				height: 1.875rem;
				width: 100%;
				padding-left: 0.625rem;
				padding-top: 0.625rem;
				span{
					color: white;
					display: inline-block;
					font-size: 1rem;
					font-weight: 400;
					padding-left: 0.3125rem;
				}
			}
			.two{
				width: 100%;
				height: 3.125rem;
				p{
					text-align: center;
					line-height: 3.125rem;
					font-size: 1rem;
					font-weight: 700;
					color: white;
					span{
						font-size: 1.875rem;
						color: #f3b001;
						
					}
				}
				
			}
		}
		.jieshao{
			font-size: 0.8rem;
			font-weight: 600;
			color: rgb(185, 195, 199);
			div,p{
				padding: 0.625rem;
			}
			
		}
		.people{
			padding: 0.625rem;
			div{
				color: white;
				font-weight: 600;
			}
		}
		.peo2{
			padding: 0.625rem;
			div{
				color: white;
				font-weight: 600;
			}
		}
	}
	.b_right p:first-of-type{
		font-weight: 700;
		font-size: 1.5625rem;
		color: white;
	}
	.b_right p:not(:first-of-type){
		font-size: 1rem;
		color: #5a707e;
		font-weight: 18.75rem;
		margin-top: 0.625rem;
	}
	.van-button{
		margin-right: 1.25rem;
		border-radius: 0.625rem;
		margin-top: 1.1rem;
	}
 .swiper {
      width: 100%;
  	 // height: 14.25rem;
  	
  } 
   .swiper img{
  	 width: 100%;
   }
   .box1{
  	 color: #ffb400;
  	 #fly{
  			 color: #ffb400;
  			 font-size: 0.9375rem;
  			 font-weight: 700;
			 text-align: center;
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