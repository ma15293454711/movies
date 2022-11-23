import axios from "axios"
import Vue from 'vue';
	import { Toast } from 'vant';
	Vue.use(Toast);
// const http = function (url){
//   return axios.get(url, {
//     headers: {
//       'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16644159042790947058352129"}',
//       'X-Host': 'mall.film-ticket.film.list',
//       "X-Requested-With": "XMLHttpRequest",
//       "X-Token": "undefined"
//     }
//   })
// }

const http = axios.create({
  baseURL:"https://m.maizuo.com/gateway?cityId=440100&pageNum=1&pageSize=10&type=1&k=7006234",
  timeout:1000,
  headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16644159042790947058352129"}',
        'X-Host': 'mall.film-ticket.film.list',
        "X-Requested-With": "XMLHttpRequest",
        "X-Token": "undefined"
      }
})

const http2 = axios.create({
  baseURL:"https://m.maizuo.com/gateway?cityId=440100&pageNum=1&pageSize=10&type=1&k=7006234",
  timeout:1000
})
 // 2.axios的拦截器
  // 2.1.请求拦截的作用
  http.interceptors.request.use(config => {
   Toast.loading({
     message: '加载中...',
     forbidClick: true,
      duration: 0, // 持续展示 toast
       forbidClick: true,
   	position:'top',
   });
    return config
  }, err => {
    // console.log(err);
  })

  // 2.2.响应拦截
  http.interceptors.response.use(res => {
	   Toast.clear()
   return res;
  }, err => {
    console.log(err);
  })
export default [http,http2]
