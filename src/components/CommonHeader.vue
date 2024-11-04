<template lang="">
  <div class="people-heading">
    <h1>{{ header }}</h1>
    <h2>
      {{ describe[0] }} <br />
      {{ describe[1] }}
    </h2>
    <!-- <h2>Here you'll find all our experts. <br />Feel free to browse around!</h2> -->
  </div>
</template>
<script>
export default {
  name: "CommonHeader",
  props: ["header", "describe"],
};
</script>
<style lang=""></style>
