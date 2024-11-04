<template lang="">
  <div class="header default-width">
    <div class="logo">
      <router-link to="/">
        <img src="../assets/logo.svg" alt="" />
      </router-link>
    </div>
    <nav class="navbar-icons">
      <ul>
        <li><router-link to="/category/all">People</router-link></li>
        <li><router-link to="/item">Lists</router-link></li>
        <li><a href="">Series</a></li>
        <!-- <li><a href="">Summaries</a></li> -->
        <li><router-link to="/summaries">Summaries</router-link></li>
      </ul>
    </nav>
    <div class="searchbar">
      <i class="bx bx-search"></i>
      <input
        type="text"
        name=""
        v-on:keyup.enter="onEnter"
        v-model="search"
        placeholder="Search books"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      search: "",
    };
  },
  computed: {
    filterSearch() {
      return 2;
    },
  },
  methods: {
    isWhitespaceString(str) {
      return !str.replace(/\s/g, "").length;
    },
    onEnter() {
      const isVoid = this.isWhitespaceString(this.search);
      if (isVoid) {
        return;
      } else {
        this.$router.push({ path: "/search" });
        this.$store.dispatch("searchPeople", this.search);
      }
    },
  },
};
</script>
<style lang=""></style>
