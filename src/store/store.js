import Vue from "vue";
import Vuex from "vuex";
import {
  getPeople,
  getSlug,
  getPeopleLists,
  getCategories,
  getCategoriesSlug,
} from "@/apis/index.js";

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    products: [],
    people: "",
    peopleLists: [],
    categories: [],
    peopleBasedOnCategory: [],
  },
  getters: {
    getAllFirst(state) {
      const newArr = [];
      state.categories.forEach((element) => {
        if (element.name !== "all") {
          newArr.push(element);
        } else {
          newArr.unshift(element);
        }
      });
      return newArr;
    },
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
    getCategories(state, categories) {
      state.categories = categories;
    },
    getCategoriesSlug(state, payload) {
      state.peopleBasedOnCategory = payload.peoples;
    },
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
    async getCategories({ commit }) {
      const categories = await getCategories();
      commit("getCategories", categories);
    },
    async getCategoriesSlug({ commit }, payload) {
      const categories = await getCategoriesSlug(payload);
      commit("getCategoriesSlug", categories);
    },
  },
});
export default store;
