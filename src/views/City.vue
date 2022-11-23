<template>
  <van-index-bar :index-list="cityType">
    <div v-for="city in cityList">
      <van-index-anchor :index="city.type" />
      <van-cell :title="data.name" v-for="data in city.city" @click="go(data.name,data.cityId)"/>
    </div>
  </van-index-bar>
</template>

<script>
  import http from "@/assets/utils.js"
  export default {
    mounted(){
      http[0]({
        baseURL:"https://m.maizuo.com/gateway?k=668024",
        headers:{
          "X-Host": "mall.film-ticket.city.list"
        }

      }).then(res=>{
        console.log(res);
        // 存储最后的数据格式
        var citylist = []
        // 存储26个字母
        var list = [];
        // 临时区域
        var temp = [];

        // 把A到Z  26个字母放进 list数组中
        for(var i=65;i<91;i++){
          list.push(String.fromCharCode(i));
        }

        // 转换数据格式
        for(var i=0;i<list.length;i++){

        // 按照每个城市的拼音开头进行数据转换
          temp = res.data.data.cities.filter(item=>{
            return item.pinyin[0].toUpperCase() == list[i]

          // 判断是否为空数组
          })
          if(temp.length>0){
            citylist.push({
              type:list[i],
              city:temp
            })
          }

        }
        console.log(citylist)
       this.cityList = citylist;
      })
    },
    data(){
      return {
        cityList:[]
      }
    },
    methods:{
      go(city,cityId){
        console.log(cityId);
        this.$store.commit("changeCity",[city,cityId])
        this.$router.back();
      }
    },
    computed:{
      cityType(){
        return this.cityList.map(item=>item.type);
      }
    }
  }
</script>

<style>
</style>
