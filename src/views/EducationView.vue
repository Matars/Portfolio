<template>
  <div>
    <h1>My College Courses</h1>
    <div v-for="year in years" :key="year">
      <h2>{{ year }}</h2>
      <ul>
        <span v-for="course in courses" :key="course.name">
          <li v-if="course.year === year">
            {{ course.name }} - {{ course.department }}
          </li>
        </span>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data: function () {
    return {
      years: [2021, 2022, 2023],
      courses: [
        {
          name: "Linear Algebra",
          department: "Mathematics",
          year: 2021,
        },
        {
          name: "Introduction to Programming (python)",
          department: "Sofware Engineering",
          year: 2021,
        },
        {
          name: "Diskrete Mathematics",
          department: "Mathematics",
          year: 2021,
        },
        {
          name: "Introduction to Project (IoT Project)",
          department: "Sofware Engineering",
          year: 2021,
        },
        {
          name: "Calculus I + II",
          department: "Mathematics",
          year: 2021,
        },
        {
          name: "Database and Datamodelling",
          department: "Sofware Engineering",
          year: 2021,
        },
        {
          name: "Probability and Statistics",
          department: "Mathematics",
          year: 2021,
        },
        { name: "Mechanical Physics", department: "Physics", year: 2021 },
        {
          name: "Object Oriented Programing",
          department: "Sofware Engineering",
          year: 2022,
        },
        {
          name: "Electricity and magnetism",
          department: "Physics",
          year: 2022,
        },
        { name: "Technical Communication", department: "", year: 2022 },
        { name: "Algorithms", department: "Sofware Engineering", year: 2022 },
        {
          name: "Parallel Programing",
          department: "Sofware Engineering",
          year: 2023,
        },
        {
          name: "Sofware Project",
          department: "Sofware Engineering",
          year: 2023,
        },
        {
          name: "Sistainamble growth",
          department: "",
          year: 2023,
        },
      ],
    };
  },
};
</script>

<style></style>
