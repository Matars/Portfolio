<script setup lang="ts">
import FooterComp from "../components/FooterComp.vue";
</script>

<template>
  <div class="wrapper">
    <h1>Welcome to AI Academia</h1>

    <p>
      Professors often have time to provide only 3-4 recommendations, though
      they would want to help you out with all 20. Online tools often check
      syntax, but not language styling. And ChatGPT needs to be taught what kind
      of answers to give. Our tool doesn't do work for you but rather helps you
      to do the work yourself. Our tool provides high-quality human-like
      feedback on a text's clarity, coherency, styling, syntax, argument quality
      and compliance with academic standards. Our tool recommends study
      materials based on the mistakes found in the submitted paper. Our tool is
      a kind university professor who's always there to help you.
    </p>
    <div class="media">
      <img src="../assets/ISP1.png" alt="AI Academia" class="media-img" />
      <img src="../assets/ISP2.png" alt="AI Academia" class="media-img" />
      <img src="../assets/ISP3.png" alt="AI Academia" class="media-img" />
    </div>
  </div>
  <FooterComp />
</template>

<style scoped>
.wrapper {
  max-width: 700px;
}
.media-img {
  width: 700px;
  margin: 2em;
}
</style>
