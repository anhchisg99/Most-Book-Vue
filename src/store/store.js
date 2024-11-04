import Vue from "vue";
import Vuex from "vuex";
import {
  getPeople,
  getSlug,
  getPeopleLists,
  getCategories,
  getCategoriesSlug,
  searchPeople,
  getAllBooks,
  getSpecificBook,
} from "@/apis/index.js";

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    products: [],
    people: "",
    peopleLists: [],
    categories: [],
    peopleBasedOnCategory: [],
    searchResult: [],
    books: [],
    specificBook: "",
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
    searchPeople(state, payload) {
      state.searchResult = payload.people;
    },
    getAllBooks(state, payload) {
      state.books = payload.books;
    },
    getSpecificBook(state, payload) {
      state.specificBook = payload;
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
    async searchPeople({ commit }, payload) {
      const people = await searchPeople(payload);
      commit("searchPeople", people);
    },
    async getAllBooks({ commit }) {
      const books = await getAllBooks();
      commit("getAllBooks", books);
    },
    async getSpecificBook({ commit }, payload) {
      const books = await getSpecificBook(payload);
      commit("getSpecificBook", books);
    },
  },
});
export default store;
