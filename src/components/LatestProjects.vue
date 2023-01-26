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
          name: "Processnig Sketches",
          description: "Different processing sketches",
          path: "projects/ProcessingSketches",
        },

        {
          id: 2,
          name: "Art Gallery",
          description: "School project for Database Course",
          path: "projects/Gallery",
        },
        {
          id: 3,
          name: "Hotell Software (Unfinished)",
          description: "School project for Software development Course",
          path: "projects/Hotell",
        },
        {
          id: 4,
          name: "AnimeCal extension",
          description: "A chrome extension",
          path: "projects/AnimeCal",
        },
        // {
        //   id: 5,
        //   name: "Portfolio (this site)",
        //   description: "Vue.js + TypeScript",
        //   path: "projects/Portfolio",
        // },
        {
          id: 6,
          name: "Clocks",
          description: "HTML/CSS/JS Clocks",
          path: "projects/Clocks",
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
