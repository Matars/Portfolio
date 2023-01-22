<script setup lang="ts">
import PersonalCard from "../components/PersonalCard.vue";
import LatestProjects from "../components/LatestProjects.vue";
import HeaderComp from "../components/HeaderComp.vue";
import JourneyComp from "../components/JourneyComp.vue";
import AboutComp from "../components/AboutComp.vue";
import ContactComp from "../components/ContactComp.vue";
import FooterComp from "../components/FooterComp.vue";
</script>

<template>
  <main>
    <div class="parent">
      <div class="header">
        <HeaderComp />
      </div>
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
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
}

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  min-height: 100vh;
  max-width: 52rem;
}

.parent {
  height: 100vh;
}
.wrapper {
  max-width: 52rem;
  margin: 0 auto;
}

.wrapper > * {
  margin-top: 8em;
}
</style>
