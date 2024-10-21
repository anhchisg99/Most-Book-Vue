<template lang="">
  <div class="main">
    <div class="people-heading">
      <h1>People</h1>
      <h2>
        Here you'll find all our experts. <br />Feel free to browse around!
      </h2>
    </div>
    <div class="people-submenu">
      <div class="items-list">Home > People</div>
      <div class="share-button">
        <a href=""><i class="bx bxl-facebook"></i></a
        ><a href=""><i class="bx bxl-twitter"></i></a
        ><a href=""><i class="bx bxl-gmail"></i></a>
      </div>
    </div>
    <div class="people-content">
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
        <ul class="expertsbar-list">
          <a href="">
            <li class="expertsbar-item">
              <div class="expertsbar-img">
                <img src="../assets/bill-gate.webp" alt="" />
              </div>
              <div class="expertsbar-item-text">
                <h3>Bill Gates</h3>
                <p>200 Book</p>
              </div>
            </li>
          </a>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "VPeople",
};
</script>
<style lang=""></style>
