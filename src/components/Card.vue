<template>
  <ul class="experts-list">
    <router-link
      class="experts-list-card"
      v-for="(product, index) in products"
      :key="index"
      :to="product.slug"
    >
      <li class="card">
        <div class="card-img">
          <img :src="product.img" alt="" />
        </div>
        <div class="card-content">
          <h3 class="card-name">
            {{ product.name }}
          </h3>

          <p class="card-book-total">
            <img
              src="https://d3bxjxywei423j.cloudfront.net/assets/icon-library.svg"
              alt=""
            />

            {{ product.totalBooks }} books
          </p>
        </div>
      </li>
    </router-link>
  </ul>
</template>
<script>
export default {
  name: "Card",
  props: ["products"],
};
</script>
<style lang=""></style>
