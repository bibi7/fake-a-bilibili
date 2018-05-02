import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutation: {

  }
})
console.log(store)
export {store};
