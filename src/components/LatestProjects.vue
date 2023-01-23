<template>
  <div class="latestproject-wrapper">
    <h1>Latest Projects</h1>
    <div class="project-grid">
      <div v-for="project in projects" :key="project.id" class="project-card">
        <h3 class="project-card-name">{{ project.name }}</h3>
        <p class="project-card-description">{{ project.description }}</p>
        <router-link :to="`${project.path}`">View Project</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          name: "Hotell Software",
          description: "A short description of the project",
          path: "projects/Hotellview",
        },
        {
          id: 2,
          name: "Art Gallery",
          description: "A short description of the project",
          path: "projects/ArtGalleryView",
        },
        {
          id: 3,
          name: "Processnig Sketches",
          description: "A short description of the project",
          path: "projects/ProcessingSketchesView",
        },
        {
          id: 4,
          name: "AnimeCal extension",
          description: "A short description of the project",
          path: "projects/AnimeCalView",
        },
        {
          id: 5,
          name: "Portfolio (this site)",
          description: "A short description of the project",
          path: "projects/PortfolioView",
        },
        {
          id: 6,
          name: "E-Commerce",
          description: "A short description of the project",
          path: "projects/ECommerceView",
        },
        {
          id: 7,
          name: "URL Shortener",
          description: "A short description of the project",
          path: "projects/URLShortenerView",
        },
      ],
      selectedProject: null,
    };
  },
};
</script>

<style scoped>
.latestproject-wrapper {
  margin-top: 5em;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.project-card {
  width: calc(50% - 10px);
  margin: 5px;
  padding: 20px;
  width: 300px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  background-color: var(--bg-second);
  border: 1px solid var(--border-color);
  border-radius: 5px;
  text-decoration: none;
}

.project-card:hover {
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
}
</style>
