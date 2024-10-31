<template lang="">
  <ul class="expertsbar-list">
    <PeopleCard
      v-for="(people, index) in peopleBasedOnCategory"
      :key="index"
      :people="people"
    ></PeopleCard>
  </ul>
</template>
<script>
// import { mapState } from "vuex";
import PeopleCard from "./PeopleCard.vue";
export default {
  name: "SmallCard",
  components: {
    PeopleCard,
  },
  props: ["peopleBasedOnCategory"],
};
</script>
<style lang=""></style>
