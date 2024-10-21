import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    products: "",
  },
  getters: {
    // saleProduct: "",
  },
});
export default store;
