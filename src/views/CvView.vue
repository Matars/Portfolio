<template>
  <div class="resume-container">
    <div class="namespace">
      <h1>{{ fullName }}</h1>
      <p>{{ jobTitle }}</p>
      <p>
        {{ email }} | {{ phoneNumber }} |
        <a href="https://matars.netlify.app/">Portfolio</a>
      </p>
    </div>

    <section class="summary">
      <h2>Summary</h2>
      <p>{{ summary }}</p>
    </section>

    <section class="experience">
      <h2>Experience</h2>
      <div v-for="(experience, index) in experiences" :key="index">
        <h3>{{ experience.position }} - {{ experience.company }}</h3>
        <p>
          <em>{{ experience.startDate }} - {{ experience.endDate }}</em>
        </p>
        <p>{{ experience.description }}</p>
      </div>
    </section>

    <section class="education">
      <h2>Education</h2>
      <div v-for="(education, index) in educations" :key="index">
        <h3>{{ education.degree }} - {{ education.university }}</h3>
        <p>
          <em>{{ education.startDate }} - {{ education.endDate }}</em>
        </p>
        <p>{{ education.description }}</p>
      </div>
    </section>

    <section class="language">
      <h2>Languages</h2>
      <div v-for="(language, index) in languages" :key="index">
        <h3>
          {{ language.language }} - <em>{{ language.level }}</em>
        </h3>
      </div>
    </section>

    <section class="skills">
      <h2>Tech I use</h2>
      <ul>
        <li v-for="(tech, index) in techstack" :key="index">{{ tech }}</li>
      </ul>
    </section>
    <section class="awards">
      <h2>Awards</h2>
      <div v-for="(award, index) in awards" :key="index">
        <ul>
          <li>{{ award.title }}</li>
          <p>{{ award.description }}</p>
        </ul>
      </div>
    </section>
    <PDFButton />
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      fullName: "Khaled Matar",
      jobTitle: "Student",
      email: "km222uq@student.lnu.se",
      phoneNumber: "0762979728",
      link: "https://matars.netlify.app/",
      summary:
        "Results-oriented software developer with a strong technical background in JavaScript, Python, and Java. Adept at data structures, algorithms, and software design with experience in Agile methodologies and teamwork. A continuous learner with a passion for staying current with industry advancements and utilizing problem-solving skills to drive results. Committed to balancing a high-performance career with personal interests and relationships.",
      experiences: [
        {
          position: "TA in IoT class",
          company: "Linnéuniversitetet",
          startDate: "2022-02-01",
          endDate: "2022-06-01",
          description:
            "Assisting students with their internet of things assignments",
        },
        {
          position: "TA in Database class",
          company: "Linnéuniversitetet",
          startDate: "2023-01-01",
          endDate: "2023-06-01",
          description: "Assisting students with their database assignments",
        },
      ],
      educations: [
        {
          degree: "Civilingenjör i Mjuksvaruteknik - 300HP",
          university: "Linnéuniversitetet",
          startDate: "2021-01-01",
          endDate: "2026-06-01",
          description: "",
        },
      ],
      languages: [
        {
          language: "English",
          level: "5/5",
        },
        {
          language: "Swedish",
          level: "5/5",
        },
        {
          language: "Arabic",
          level: "4/5",
        },
        {
          language: "Greek",
          level: "3/5",
        },
      ],
      techstack: [
        "JavaScript",
        "Python",
        "Java",
        "HTML",
        "CSS",
        "Git",
        "Vue.js",
        "MySQL",
        "Linux",
        "flutter",
        "Typescript",
      ],
      awards: [
        {
          title: "Gymnasium Teknik Stipendium",
          description:
            "“For being engaged and interested in the field of programming”",
        },
      ],
    };
  },
};
</script>

<style scoped>
.resume-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  margin-top: 5em;
}

.namespace {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}
h1 {
  font-size: 36px;
  margin-bottom: 10px;
}
p {
  font-size: 18px;
  margin: 0;
}
section {
  margin-bottom: 50px;
}
h2 {
  font-size: 24px;
  margin-bottom: 20px;
}
h3 {
  font-size: 18px;
  margin-bottom: 10px;
}
em {
  font-style: italic;
  font-size: 14px;
  color: gray;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
li {
  font-size: 16px;
  margin-bottom: 10px;
}
</style>
