<script setup lang="ts">
import PersonalCard from "../components/PersonalCard.vue";
import LatestProjects from "../components/LatestProjects.vue";
import JourneyComp from "../components/JourneyComp.vue";
import AboutComp from "../components/AboutComp.vue";
import ContactComp from "../components/ContactComp.vue";
import FooterComp from "../components/FooterComp.vue";
</script>

<template>
  <main>
    <div class="parent">
      <div class="wrapper">
        <PersonalCard />
        <LatestProjects />
        <AboutComp />
        <JourneyComp />
        <ContactComp />
      </div>
      <FooterComp />
    </div>
  </main>
</template>

<style scoped>
template {
  background-color: red;
}
</style>
