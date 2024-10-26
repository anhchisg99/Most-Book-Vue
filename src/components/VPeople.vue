<template lang="">
  <div class="main">
    <div class="people-heading">
      <h1>People</h1>
      <h2>
        Here you'll find all our experts. <br />Feel free to browse around!
      </h2>
    </div>
    <div class="people-submenu default-width">
      <div class="items-list">Home > People</div>
      <div class="share-button">
        <a href=""><i class="bx bxl-facebook"></i></a
        ><a href=""><i class="bx bxl-twitter"></i></a
        ><a href=""><i class="bx bxl-gmail"></i></a>
      </div>
    </div>
    <div class="people-content default-width">
      <div class="categories">
        <div class="categories-heading">Categories</div>
        <div class="categories-content">
          <ul>
            <li class="categories-item"><button>All</button></li>

            <li class="categories-item"><button>Actor</button></li>

            <li class="categories-item">
              <button>Alete</button>
            </li>

            <li class="categories-item">
              <button>Billionaire</button>
            </li>
          </ul>
        </div>
      </div>
      <div class="expertsbar">
        <SmallCard></SmallCard>
      </div>
    </div>
  </div>
</template>
<script>
import SmallCard from "./SmallCard.vue";
export default {
  name: "VPeople",
  components: {
    SmallCard,
  },
};
</script>
<style lang=""></style>
