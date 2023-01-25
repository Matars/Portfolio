<script setup lang="ts">
import FooterComp from "../components/FooterComp.vue";
import HeaderComp from "../components/HeaderComp.vue";
</script>

<template>
  <div class="parent">
    <div class="header">
      <HeaderComp />
    </div>
    <div class="wrapper">
      <div class="hotell-view">
        <h1>Hotell Software</h1>
        <p>
          This is a school project for the Software Development course. The
          project is unfinished, but I show it here anyway since all the
          fucntionallity is there and working correctly, we mostly need to
          improve on the layout design (24/1/2023)
        </p>
        <div class="content">
          <img src="../assets/hotell1.png" alt="hotell1" />
          <img src="../assets/hotell3.png" alt="hotell2" />
          <img src="../assets/hotell4.png" alt="hotell2" />
        </div>
      </div>
    </div>
    <FooterComp />
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style scoped>
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  height: 100%;
}
</style>
