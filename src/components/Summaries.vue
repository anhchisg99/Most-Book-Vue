<template lang="">
  <div class="summaries">
    <CommonHeader :header="header" :describe="describe"> </CommonHeader>
    <div class="summaries-content">
      <ul>
        <li v-for="(book, index) in this.$store.state.books" :key="index">
          <router-link :to="'/book/' + book.slug">
            <div>
              <p>{{ book.title }}</p>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
// import { mapState } from "vuex";
import CommonHeader from "./CommonHeader.vue";
export default {
  name: "Summaries",
  data() {
    return {
      header: "Summaries",
      describe: [
        "Here you'll find all our summaries.",
        "We work hard to make sure each page is accurate, so you can trust it!",
      ],
    };
  },
  components: {
    CommonHeader,
  },
  computed: {
    // ...mapState(["books"]),
  },

  async mounted() {
    this.$store.dispatch("getAllBooks");
  },
};
</script>
<style lang=""></style>
