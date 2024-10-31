<template lang="">
  <ul class="experts-list">
    <a href="" v-for="(product, index) in products" :key="index">
      <li class="card">
        <div class="card-img">
          <img :src="product.img" alt="" />
        </div>
        <div class="card-content">
          <h3 class="card-name">{{ product.name }}</h3>
          <p class="card-book-total">100 Book</p>
        </div>
      </li>
    </a>
  </ul>
</template>
<script>
export default {
  name: "CardList",
};
</script>
<style lang=""></style>
