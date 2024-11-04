<template lang="">
  <div class="books">
    <div class="book-container">
      <div class="book-info" v-if="specificBook">
        <div class="book-info_img">
          <img :src="specificBook.img" alt="" />
        </div>
        <div class="book-info_content">
          <div class="book-info_content-heading">{{ specificBook.title }}</div>
          <h2>Description</h2>
          <div class="book-info_content-description">
            {{ specificBook.description }}
            <br />
            We begin with a summary of the entire book, and then you can read
            each individual chapter's summary by visiting the links on the
            "Chapters" section.
          </div>
          <div class="book-info_content-author">Claude</div>
        </div>
      </div>
      <div class="no-book" v-else>no book</div>
      <BooksSummaries
        :source="{ summary: specificBook.summaries, title: specificBook.title }"
      ></BooksSummaries>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import BooksSummaries from "./BooksSummaries.vue";

export default {
  name: "Books",
  data() {
    return {};
  },
  components: {
    BooksSummaries,
  },
  computed: {
    ...mapState(["specificBook"]),
  },
  watch: {
    "$route.params.slug": {
      handler: function (param) {
        console.log("test ", param);
        this.$store.dispatch("getSpecificBook", param);
        // this.$store.dispatch('product/getPerProduct',param)
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>
<style lang=""></style>
