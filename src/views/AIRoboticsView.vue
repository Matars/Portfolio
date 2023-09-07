<template>
  <div class="wrapper">
    <h1>Chat across Ages.</h1>
    <p>
      You can pose questions to Misty in various languages and have the robot
      respond as if it were a person or character. Misty will be used by both
      students and our researchers in contexts concerned with understanding and
      developing children’s learning about AI and computational thinking.
    </p>
    <div class="media">
      <img src="../assets/mistyshot.jpeg" alt="Misty shot" class="media-img" />
    </div>
  </div>
  <FooterComp />
</template>

<script setup lang="ts">
import FooterComp from "../components/FooterComp.vue";
</script>

<style scoped>
.media-img {
  width: 700px;
  margin: 2em;
}
</style>
