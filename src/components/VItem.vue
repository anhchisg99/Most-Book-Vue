<template lang="">
  <div class="main">
    <div class="info">
      <div class="info-header">
        <div class="info-img">
          <img src="../assets/bill-gate.webp" alt="" />
        </div>
        <div class="info-details">
          <h1>Bill Gatest</h1>
          <p>
            Bill Gates is an American business magnate, software developer,
            investor, and philanthropist. Wikipedia
          </p>
        </div>
      </div>
      <div class="info-maincontent">
        <div class="info-maincontent-bar">
          <a href="">242 Recommended</a><a href="">4 Writters</a>
        </div>
        <h2>Books Recommended by Bill Gates</h2>
        <div class="styles_submenu"></div>
        <ul class="bookitems">
          <li class="bookitem">
            <div class="bookitem-img">
              <img src="../assets/why-we-sleep.webp" alt="" />
            </div>
            <div class="bookitem-details">
              <div class="bookitem-heading">
                <h3>Why We Sleep</h3>
              </div>
              <div class="bookitem-sub">
                Unlocking the Power of Sleep and Dreams
              </div>
              <h5 class="bookitem-author">Matthew Walker</h5>
              <p class="bookitem-source">
                Source: "Explains how neglecting sleep undercuts your
                creativity, problem solving, decision-making, learning, memory,
                heart health, brain health, mental health, emotional well-being,
                immune system, and even your life span." - Bill Gates
              </p>
              <button class="bookitem-btn">
                <span>View on Tiki</span>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "VItem",
};
</script>
<style lang=""></style>
