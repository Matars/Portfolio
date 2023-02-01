<script setup lang="ts">
import FooterComp from "../components/FooterComp.vue";
</script>

<template>
  <main>
    <div class="parent">
      <div class="wrapper">
        <div class="text">
          <h1>AnimeCal</h1>
          <p>
            Anime Calendar is a Chrome extension that helps anime fans stay on
            top of new anime releases. The extension is designed to be easy to
            use and provides users with a convenient way to view upcoming anime
            releases in a calendar format. The extension also includes a
            built-in search function, allowing users to quickly find the anime
            they are looking for.
          </p>
          <img src="../assets/animecal.png" alt="Anime cal image" />
        </div>
      </div>
      <FooterComp />
    </div>
  </main>
</template>

<style scoped>
img {
  width: 50%;
  height: 50%;
  display: block;
  margin: 0 auto;
  padding-bottom: 5em;
  padding-top: 3em;
}
</style>
