<template lang="">
  <div class="main">
    <CommonHeader :header="header" :describe="describe"></CommonHeader>
    <div class="people-submenu default-width">
      <div class="items-list">Home > People</div>
      <div class="share-button">
        <a href=""><i class="bx bxl-facebook"></i></a
        ><a href=""><i class="bx bxl-twitter"></i></a
        ><a href=""><i class="bx bxl-gmail"></i></a>
      </div>
    </div>
    <div class="people-content default-width">
      <div class="categories">
        <div class="categories-heading">Categories</div>
        <CategoriesItem :categories="getAllFirst"></CategoriesItem>
      </div>
      <div class="expertsbar">
        <SmallCard :peopleBasedOnCategory="peopleBasedOnCategory"></SmallCard>
      </div>
    </div>
  </div>
</template>
<script>
import CommonHeader from "./CommonHeader.vue";
import SmallCard from "./SmallCard.vue";
import CategoriesItem from "./CategoriesItem.vue";
import { mapGetters, mapState } from "vuex";
export default {
  name: "VPeople",
  components: {
    SmallCard,
    CategoriesItem,
    CommonHeader,
  },
  data() {
    return {
      // peoples: [],
      header: "People",
      describe: [
        "Here you'll find all our experts.",
        "Feel free to browse around!",
      ],
    };
  },
  computed: {
    // myValue() {
    //   if (!this.$route.params.slug) {
    //     console.log("test 2");
    //     return this.peopleLists;
    //   } else {
    //     return this.peopleBasedOnCategory;
    //   }
    // },
    ...mapState(["categories", "peopleLists", "peopleBasedOnCategory"]),
    ...mapGetters(["getAllFirst"]),
  },
  async mounted() {
    console.log(`router ${this.$route.params.slug}`);
    this.$store.dispatch("getCategories");
    this.$store.dispatch("getPeopleLists");
  },

  watch: {
    "$route.params.slug": {
      handler: function (param) {
        this.$store.dispatch("getCategoriesSlug", param);
        // this.$store.dispatch('product/getPerProduct',param)
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>
<style lang=""></style>
