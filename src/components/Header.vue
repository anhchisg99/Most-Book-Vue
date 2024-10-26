<template lang="">
  <div class="header default-width">
    <div class="logo">
      <router-link to="/">
        <img src="../assets/logo.svg" alt="" />
      </router-link>
    </div>
    <nav class="navbar-icons">
      <ul>
        <li><router-link to="/people">People</router-link></li>
        <li><router-link to="/item">Lists</router-link></li>
        <li><a href="">Series</a></li>
        <li><a href="">Summaries</a></li>
      </ul>
    </nav>
    <div class="searchbar">
      <i class="bx bx-search"></i>
      <input type="text" name="" id="" placeholder="Search books" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
};
</script>
<style lang=""></style>
