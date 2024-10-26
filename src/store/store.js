import Vue from "vue";
import Vuex from "vuex";
import { getPeople, getSlug, getPeopleLists } from "@/apis/index.js";

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    products: [],
    people: "",
    peopleLists: [],
  },
  mutations: {
    updateProducts(state, products) {
      state.products = products;
    },
    getSlug(state, payload) {
      state.people = payload.people;
    },
    getPeopleLists(state, peopleLists) {
      state.peopleLists = peopleLists;
    },
  },
  getters: {
    // saleProduct: "",
  },
  actions: {
    async getProduct({ commit }) {
      const data = await getPeople();
      console.log(`data ${data}`);
      commit("updateProducts", data);
    },
    async getSlug({ commit }, payload) {
      const peopleBook = await getSlug(payload);

      commit("getSlug", peopleBook);
    },
    async getPeopleLists({ commit }) {
      const peopleList = await getPeopleLists();
      commit("getPeopleLists", peopleList);
    },
  },
});
export default store;
