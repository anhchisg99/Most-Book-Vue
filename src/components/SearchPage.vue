<template lang="">
  <div class="default-width">
    <div class="search-heading">
      <h1>Search result for: <span>Naval </span></h1>
    </div>
    <div class="searchpage">
      <SearchCategories></SearchCategories>
      <BooksBar :searchResult="searchResult"></BooksBar>
    </div>
  </div>
</template>
<script>
import BooksBar from "./BooksBar.vue";

import SearchCategories from "./SearchCategories.vue";
import { mapState } from "vuex";
export default {
  name: "SearchPage",
  components: {
    BooksBar,
    SearchCategories,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["searchResult"]),
  },
  mounted: {},
};
</script>
<style lang=""></style>
