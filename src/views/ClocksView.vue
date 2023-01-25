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
      <div class="clocks-view">
        <h1>Clocks</h1>
        <p>
          made two different clocks in highschool, was really happy with how
          they turned out.
        </p>
        <video src="../assets/clocks.mp4" controls muted loop></video>
      </div>
    </div>
    <FooterComp />
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style></style>
