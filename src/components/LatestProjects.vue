<template>
  <div class="latestproject-wrapper">
    <h1>Latest Projects</h1>
    <div class="project-grid">
      <div v-for="project in projects" :key="project.id" class="project-card">
        <h3 class="project-card-name">{{ project.name }}</h3>
        <p class="project-card-description">{{ project.description }}</p>
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
          name: "Project 1",
          description: "A short description of the project",
        },
        {
          id: 2,
          name: "Project 2",
          description: "A short description of the project",
        },
        {
          id: 3,
          name: "Project 3",
          description: "A short description of the project",
        },
        {
          id: 4,
          name: "Project 4",
          description: "A short description of the project",
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
  cursor: pointer;
}

.project-card:hover {
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
}
</style>
