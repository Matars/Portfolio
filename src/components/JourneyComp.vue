<template>
  <section class="journey-section">
    <h2 class="section-title">Journey</h2>
    <span class="section-subtitle"
      >From my first "Hello World!" program to pressent<br /><br
    /></span>
    <ul class="journey-list">
      <li v-for="journey in journeys" :key="journey.id" class="journey-item">
        <div
          class="journey-item-dot"
          :style="{ backgroundColor: journey.dotColor }"
        ></div>
        <span class="journey-item-year">{{ journey.year }}</span>
        <br />
        <br />
        <span class="journey-item-title">{{ journey.title }}</span>
        <p class="journey-item-description">{{ journey.description }}</p>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
export default {
  data() {
    return {
      journeys: [
        {
          id: 1,
          year: "2014",
          title: "🌎 Hello World!",
          description:
            "I self-taught myself my first programming language, Python.",
          dotColor: "#323b4e",
        },
        {
          id: 2,
          year: "2018 - 2021",
          title: "🏫 High school",
          description:
            "I learned more about C++ and web development - Graduated from engineering high school.",
          dotColor: "#323b4e",
        },
        {
          id: 3,
          year: "2021 - Present",
          title: "🎓 College",
          description: "I study Software Engineering at Linnaeus University",
          dotColor: "#323b4e",
        },
        {
          id: 3,
          year: "2023 - Present",
          title: "💼 Part time work (R&D)",
          description:
            "Part-time Research & Development with Robotics, LLMs and AI.",
          dotColor: "#323b4e",
        },
      ],
    };
  },
};
</script>

<style>
.journey-section {
  /* Add some spacing */
  padding: 2rem;
}

.section-title {
  /* Add some styling to the title */
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.section-subtitle {
  /* Add some styling to the subtitle */
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.journey-list {
  /* Remove list bullet points and add a connecting line between journey items */
  list-style: none;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  margin: 0;
  padding: 0;
  flex-direction: column; /* change flex direction to row*/
}

.journey-item {
  /* Add some spacing and make the items display horizontally */
  padding: 1rem;
  position: relative;
  width: 100%;
}

.journey-item-dot {
  /* Style the dot */
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  position: absolute;
  left: -1.5rem;
  top: 1rem;
}

.journey-item-year {
  /* Add some styling to the year */
  font-size: 0.7rem;
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;
}

.journey-item-title {
  /* Add some styling to the title */
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.journey-item-description {
  /* Add some styling to the description */
  font-size: 1.2rem;
  color: #999;
  margin-bottom: 1rem;
}

.journey-item-link {
  /* Add some styling to the link */
  font-size: 1.2rem;
  color: #337ab7;
  text-decoration: none;
}

.journey-item::before {
  /* Add a connecting line between journey items */
  content: "";
  position: absolute;
  width: 2px;
  height: 100%;
  background-color: #323b4e;
  left: -1.1rem;
  top: 0;
}
</style>
