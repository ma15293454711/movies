import Vue from 'vue'
import Vuex from 'vuex'
import http from '../assets/utils.js'
import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex)

export default new Vuex.Store({
  // vue cli
  // vue router
  // vueX
  // vuex持久化
  plugins:[createPersistedState()],
  state: {
    hello: "你好",
    cityName: "深圳",
    cityId: 440100,
    cinemaList:[]
  },
  getters: {},

  // 只支持同步
  mutations: {
    changeCity(state, c) {
      let [city, cityId] = c;
      state.cityName = city
      state.cityId = cityId
      console.log(city, cityId);
    },
    emptyCinemaList(state){
      state.cinemaList = [];
    }
  },
  actions: {
    getCinemaList(state) {
      http[0]({
        baseURL: `https://m.maizuo.com/gateway?cityId=${state.state.cityId}&ticketFlag=1&k=8607037`,
        headers: {
          "X-Host": "mall.film-ticket.cinema.list"
        }
      }).then(res => {
        console.log(res);
       state.state.cinemaList =  res.data.data.cinemas;
      })
    }
  },
  modules: {

  }
})
