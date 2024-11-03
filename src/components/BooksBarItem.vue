<template lang="">
  <li>
    <router-link :to="people.slug">
      <div class="book-search-result-container">
        <img :src="people.img" alt="" />
        <div class="book-search-result-text">
          <h3>{{ people.name }}</h3>
          <h4>by Eric</h4>
        </div>
      </div>
    </router-link>
  </li>
</template>
<script>
export default {
  name: "BooksBarItem",
  props: ["people"],
};
</script>
<style lang=""></style>
