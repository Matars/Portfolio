<script setup lang="ts">
import FooterComp from "../components/FooterComp.vue";
import HeaderComp from "../components/HeaderComp.vue";
import InstructionsComp from "../components/InstructionsComp.vue";
</script>

<template>
  <div class="parent">
    <div class="header">
      <HeaderComp />
    </div>
    <div class="wrapper">
      <h1>My College Courses</h1>
      <InstructionsComp />
      <div class="year-container">
        <div v-for="year in years" :key="year">
          <h2 class="year-header">{{ year }}</h2>
          <div class="courses-container">
            <span v-for="course in courses" :key="course.name">
              <div class="course-name">
                <p v-if="course.year === year">
                  <span v-if="course.department === 'Mathematics'" class="math">
                    {{ course.name }}
                  </span>
                  <span v-if="course.department === 'Physics'" class="physics">
                    {{ course.name }}
                  </span>
                  <span
                    v-if="course.department === 'Sofware Engineering'"
                    class="software"
                  >
                    {{ course.name }}
                  </span>
                </p>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
    <FooterComp />
  </div>
</template>

<style scoped>
.physics {
  border-bottom: 1px solid #0800ff;
}

.software {
  border-bottom: 1px solid #00ff00;
}

.math {
  border-bottom: 1px solid #ff7700;
}

.year-container {
  display: grid;
  margin: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.year-header {
  margin: 1rem;
}
</style>

<script lang="ts">
export default {
  data: function () {
    return {
      years: [2021, 2022, 2023, 2024, 2025, 2026],
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
          year: 2022,
        },
        {
          name: "Database and Datamodelling",
          department: "Sofware Engineering",
          year: 2022,
        },
        {
          name: "Probability and Statistics",
          department: "Mathematics",
          year: 2022,
        },
        { name: "Mechanical Physics", department: "Physics", year: 2022 },
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
          year: 2022,
        },
        {
          name: "Sustainamble growth",
          department: "",
          year: 2023,
        },
        // Numerical methods
        {
          name: "Numerical Methods",
          department: "Mathematics",
          year: 2023,
        },
        // Computer Components
        {
          name: "Computer Components",
          department: "Sofware Engineering",
          year: 2023,
        },
        // Multivariable Calculus
        {
          name: "Multivariable Calculus",
          department: "Mathematics",
          year: 2023,
        },
        // Computer Architecture
        {
          name: "Computer Architecture",
          department: "Sofware Engineering",
          year: 2023,
        },
        // inbuilt systems
        {
          name: "Inbuilt Systems",
          department: "Sofware Engineering",
          year: 2023,
        },
        // control technology
        {
          name: "Control Technology",
          department: "Sofware Engineering",
          year: 2023,
        },
        // computer graphics
        {
          name: "Computer Graphics",
          department: "Sofware Engineering",
          year: 2023,
        },
        // computer networks
        {
          name: "Computer Networks",
          department: "Sofware Engineering",
          year: 2023,
        },
        // industrial economics
        {
          name: "Industrial Economics",
          department: "Sofware Engineering",
          year: 2024,
        },
        // lititure review
        {
          name: "Lititure Review",
          department: "Sofware Engineering",
          year: 2024,
        },
        // computer security
        {
          name: "Computer Security",
          department: "Sofware Engineering",
          year: 2024,
        },
        // independent project
        {
          name: "Independent Project",
          department: "Sofware Engineering",
          year: 2024,
        },
        // system modeling and simulation
        {
          name: "System Modeling and Simulation",
          department: "Sofware Engineering",
          year: 2024,
        },
        // code transaltion and interpretation
        {
          name: "Code Transaltion and Interpretation",
          department: "Sofware Engineering",
          year: 2024,
        },
        // project in modell driven development
        {
          name: "Project in Modell Driven Development",
          department: "Sofware Engineering",
          year: 2024,
        },
        // formell methods
        {
          name: "Formell Methods",
          department: "Sofware Engineering",
          year: 2024,
        },
        // optimization
        {
          name: "Optimization",
          department: "Sofware Engineering",
          year: 2024,
        },
        // machine learning
        {
          name: "Machine Learning",
          department: "Sofware Engineering",
          year: 2025,
        },
        // parallel and distribute data handling
        {
          name: "Parallel and Distribute Data Handling",
          department: "Sofware Engineering",
          year: 2025,
        },
        // project in data intensive computing
        {
          name: "Project in Data Intensive Computing",
          department: "Sofware Engineering",
          year: 2025,
        },
        // deep machine learning
        {
          name: "Deep Machine Learning",
          department: "Sofware Engineering",
          year: 2025,
        },
        // lean startup
        {
          name: "Lean Startup",
          department: "Sofware Engineering",
          year: 2025,
        },
        // information visualization
        {
          name: "Information Visualization",
          department: "Sofware Engineering",
          year: 2025,
        },
        // data mining
        {
          name: "Data Mining",
          department: "Sofware Engineering",
          year: 2025,
        },
        // projekt in visual computing
        {
          name: "Projekt in Visual Computing",
          department: "Sofware Engineering",
          year: 2025,
        },
        // phd methods in sofware engineering
        {
          name: "Phd Methods in Sofware Engineering",
          department: "Sofware Engineering",
          year: 2025,
        },
        // advanced information visualization
        {
          name: "Advanced Information Visualization",
          department: "Sofware Engineering",
          year: 2025,
        },
        // individual project
        {
          name: "Individual Project",
          department: "Sofware Engineering",
          year: 2026,
        },
      ],
    };
  },
};
</script>
