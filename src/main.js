import Vue from "vue";
import App from "./App.vue";
// router
import VueRouter from "vue-router";
import Routes from "./router/routes.js";

// vuex
import store from "./store/store.js";

Vue.config.productionTip = false;

Vue.use(VueRouter);
const router = new VueRouter({
  routes: Routes,
});
new Vue({
  render: (h) => h(App),
  router: router,
  store: store,
}).$mount("#app");
