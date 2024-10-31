<template lang="">
  <div class="categories-content">
    <ul>
      <li
        v-for="(category, index) in categories"
        :key="index"
        class="categories-item"
      >
        <!-- <button>{{ category.name }}</button> -->
        <router-link :to="'/category/' + category.slug">{{
          category.name
        }}</router-link>
      </li>

      <!-- <li class="categories-item"><button>Actor</button></li>

      <li class="categories-item">
        <button>Alete</button>
      </li>

      <li class="categories-item">
        <button>Billionaire</button>
      </li> -->
    </ul>
  </div>
</template>
<script>
// import { mapState } from "vuex";
export default {
  name: "CategoriesItem",
  props: ["categories"],
  // computed: {
  //   ...mapState(["categories"]),
  // },

  // async mounted() {
  //   this.$store.dispatch("getCategories");
  // },
};
</script>
<style lang=""></style>
