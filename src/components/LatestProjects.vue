<template>
  <div class="latestproject-wrapper">
    <h1>Latest Projects</h1>
    <div class="project-grid">
      <div v-for="project in projects" :key="project.id" class="project-card">
        <h3 class="project-card-name">{{ project.name }}</h3>
        <p class="project-card-description">{{ project.description }}</p>
        <a
          v-if="project.external"
          :href="project.path"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
        <router-link v-else :to="project.path">View Project</router-link>
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
          id: 9,
          name: "HPC",
          description: "GEMM, MPI, OpenMP, CUDA",
          path: "https://github.com/YousefMelhem/4DT906-Parallel-and-Distributed",
          external: true,
        },
        {
          id: 8,
          name: "AI and Robotics",
          description: "Chat across ages - anyone, anywhere.",
          path: "projects/AIRobotics",
        },
        {
          id: 7,
          name: "AI Academia",
          description: "Exploring how AI can be used in Academia",
          path: "projects/AIAcademia",
        },
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
          name: "Hotell Software",
          description: "School project for Software development Course",
          path: "projects/Hotell",
        },
        {
          id: 4,
          name: "AnimeCal extension",
          description: "A chrome extension",
          path: "projects/AnimeCal",
        },
        {
          id: 5,
          name: "E-Commerce",
          description: "Around 4000kr in sales",
          path: "projects/ECommerce",
        },
        {
          id: 6,
          name: "Clocks (made when I was 14)",
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
  text-align: center;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-left: 2.5em;
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

@media only screen and (max-width: 600px) {
  .project-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
