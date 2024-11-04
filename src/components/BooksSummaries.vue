<template lang="">
  <div class="book-summaries default-width">
    <div class="book-summaries-heading">
      <p>{{ source.title }} Summary Overview</p>
    </div>
    <div class="book-summaries-content">
      {{ source.summary }}
    </div>
  </div>
</template>
<script>
export default {
  name: "BooksSummaries",
  props: ["source"],
};
</script>
<style lang=""></style>
