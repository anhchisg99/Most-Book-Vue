<template lang="">
  <div class="main">
    <div class="info">
      <div class="info-header">
        <div class="info-img">
          <img :src="people.img" alt="" />
        </div>
        <div class="info-details">
          <h1>{{ people.name }}</h1>
          <p class="author-bio">
            {{ people.introduction }}
          </p>
        </div>
      </div>
      <div class="info-maincontent default-width">
        <div class="info-maincontent-bar">
          <a href="">{{ people.totalBooks }} books</a><a href="">4 Writters</a>
        </div>
        <h2>Books Recommended by {{ people.name }}</h2>
        <div class="styles_submenu"></div>
        <BookItem :books="people.books"></BookItem>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import BookItem from "./BookItem.vue";
export default {
  name: "VItem",
  components: {
    BookItem,
  },
  computed: {
    ...mapState(["people"]),
  },
  watch: {
    "$route.params.slug": {
      handler: function (param) {
        this.$store.dispatch("getSlug", param);
        // this.$store.dispatch('product/getPerProduct',param)
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>
<style lang=""></style>
