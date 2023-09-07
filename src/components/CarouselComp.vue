<template>
  <div class="carousel-container">
    <div
      class="carousel"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div
        v-for="(image, index) in images"
        :key="index"
        class="carousel-slide"
        :style="{ backgroundImage: `url(${image})` }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";

const props = defineProps<{ images: string[] }>();
const currentIndex = ref(0);

const nextSlide = () => {
  if (currentIndex.value < props.images.length - 1) {
    currentIndex.value++;
  }
};

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};
</script>

<style>
.carousel-container {
  overflow: hidden;
  position: relative;
  width: 60%;
  margin: 0 auto;
}

.carousel {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-slide {
  min-width: 100%;
  height: 300px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: 1px solid #ddd; /* Adding a border to separate the images */
}

.carousel-slide:not(:last-child) {
  margin-right: 20px; /* Adding some spacing between the images */
}
</style>
