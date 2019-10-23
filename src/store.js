import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import axios from "@/utils/ajax"
export default new Vuex.Store({
  state: {
    city:"city武汉",
    msg:"daydayup",
    data:{
      types:[],
    },
  },
  actions: {
    getType({commit},{url}){
      axios.get(url).then(res=>{
        console.log(res)
        commit('getType',res.data.result)
      })
    },
    getTypesAjax({commit},{url}){
      axios.get(url)  
      .then(res=>{
          commit("getTypesAjax",res.data.result);
      })
  },
  },
  mutations: {
    getType(state,types){
      state.data={...state.data,types}
    }
  },
  getters:{  

  }
})
