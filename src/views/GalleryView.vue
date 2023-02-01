<script setup lang="ts">
import FooterComp from "../components/FooterComp.vue";
</script>

<template>
  <div class="parent">
    <div class="wrapper">
      <div class="art-gallery-view">
        <h1>Art Gallery Project</h1>
        <p>
          For my schools Database project we had to make our own Art Gallery
          Database, with features like tagging and searching.
        </p>
        <video
          src="../assets/gallery-short-film.mp4"
          controls
          muted
          loop
        ></video>
      </div>
    </div>
    <FooterComp />
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style></style>
