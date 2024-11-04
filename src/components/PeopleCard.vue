<template lang="">
  <router-link v-if="people" :to="'/' + people.slug">
    <li class="expertsbar-item">
      <div class="expertsbar-img">
        <img :src="people.img" alt="" />
      </div>
      <div class="expertsbar-item-text">
        <h3>{{ people.name }}</h3>
        <p>
          <img
            src="https://d3bxjxywei423j.cloudfront.net/assets/icon-library.svg"
            alt=""
          />
          {{ people.num_of_books }} Books
        </p>
      </div>
    </li>
  </router-link>
</template>
<script>
export default {
  name: "PeopleCard",
  props: ["people"],
  computed: {
    // isSlug() {
    //   return this.people.slug ? this.people.slug : "";
    // },
  },
};
</script>
<style lang=""></style>
