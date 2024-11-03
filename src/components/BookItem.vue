<template lang="">
  <ul class="bookitems">
    <li class="bookitem" v-for="(book, index) in books" :key="index">
      <div class="bookitem-img">
        <img :src="book.img" alt="" />
      </div>
      <div class="bookitem-details">
        <div class="bookitem-heading">
          <h3>{{ book.name }}</h3>
        </div>
        <div class="bookitem-sub">{{ book.sub }}</div>
        <h5 class="bookitem-author">Matthew Walker</h5>
        <p class="bookitem-source">
          {{ book.source }}
        </p>
        <button class="bookitem-btn" @click="redirectToTiki(book.name)">
          <span>View on Tiki</span>
        </button>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  name: "BookItem",
  props: ["books"],
  methods: {
    redirectToTiki(source) {
      window.open(`https://tiki.vn/search?q=${source}`, "_blank");
    },
  },
};
</script>
<style lang=""></style>
