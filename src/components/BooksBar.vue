<template lang="">
  <div class="booksbar">
    <div class="booksbar-main">
      <div class="booksbar-heading">
        <p>Books</p>
      </div>
      <ul class="bookslist">
        <BooksBarItem
          v-for="(people, index) in searchResult"
          :key="index"
          :people="people"
        ></BooksBarItem>
      </ul>
    </div>
  </div>
</template>
<script>
import BooksBarItem from "./BooksBarItem.vue";
export default {
  name: "BooksBar",
  components: {
    BooksBarItem,
  },
  props: ["searchResult"],
};
</script>
<style lang=""></style>
