import Main from "@/components/Main.vue";
import VItem from "@/components/VItem.vue";
import VPeople from "@/components/VPeople.vue";
export default [
  { path: "/", component: Main },
  { path: "/people", component: VPeople },
  { path: "/:slug", component: VItem },
  // { path: "/item", component: VItem },
];
