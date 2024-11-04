import Main from "@/components/Main.vue";
import VItem from "@/components/VItem.vue";
import VPeople from "@/components/VPeople.vue";
import SearchPage from "@/components/SearchPage.vue";
import Summaries from "@/components/Summaries.vue";
import Books from "@/components/Books.vue";
// import SmallCard from "@/components/SmallCard.vue";
export default [
  { path: "/summaries", component: Summaries },
  { path: "/book/:slug", component: Books },
  { path: "/search", component: SearchPage },
  { path: "/", component: Main },
  { path: "/category/:slug", component: VPeople },
  // { path: "/people/", component: VPeople },
  // { path: "/category/:slug", component: SmallCard },
  { path: "/:slug", component: VItem },
];
