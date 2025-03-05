<template>
  <div class="grid-container">
    <div class="about-me-col">
      <h2>About Me</h2>
      <ul class="ulgroup">
        <li>🎂 {{ age }} years old</li>
        <li>🎯 Driven</li>
        <li>💻 Skilled and Fffecient</li>
        <li>🚀 Passionate about AI, Robotics, Crypto and the future</li>
        <li>⨊ Strong Math and Physics background</li>
        <li>❖ Strong pattern recognition abilities</li>
        <li>
          🕒 Enjoy working out, watching
          <span id="onepice" style="color: orange">One Piece</span>, and
          spending time with friends and family
        </li>
      </ul>
    </div>

    <div class="tech-i-use-col">
      <h2>Tech I Use</h2>
      <div class="tech-items-container">
        <div class="tech-item Cuda">
          <img src="../assets/cuda.svg" alt="Cuda logo" class="tech-logo" />
          Cuda
        </div>
        <div class="tech-item python">
          <img src="../assets/python.png" alt="Python logo" class="tech-logo" />
          Python
        </div>
        <div class="tech-item MPI">
          <img src="../assets/mpi.png" alt="MPI logo" class="tech-logo" />
          MPI
        </div>
        <div class="tech-item cpp">
          <img src="../assets/cpp.png" alt="C++" class="tech-logo" />
          C++
        </div>
        <div class="tech-item git">
          <img src="../assets/git.png" alt="Git logo" class="tech-logo" />
          Git
        </div>
        <div class="tech-item linux">
          <img src="../assets/linux.png" alt="Linux logo" class="tech-logo" />
          Linux
        </div>
        <div class="tech-item javascript">
          <img src="../assets/js.png" alt="JavaScript logo" class="tech-logo" />
          JavaScript
        </div>
        <div class="tech-item vue">
          <img src="../assets/vue.png" alt="Vue.js logo" class="tech-logo" />
          Vue.js
        </div>

        <div class="tech-item java">
          <img src="../assets/java.png" alt="Java logo" class="tech-logo" />
          Java
        </div>
        <div class="tech-item MySQL">
          <img src="../assets/mysql.png" alt="MySQL logo" class="tech-logo" />
          MySQL
        </div>
        <div class="tech-item flutter">
          <img
            src="../assets/flutter.png"
            alt="Flutter logo"
            class="tech-logo"
          />
          Flutter
        </div>
        <div class="tech-item typescript">
          <img
            src="../assets/typescript.jpeg"
            alt="Typescript logo"
            class="tech-logo"
          />
          TypeScript
        </div>
        <div class="tech-item Node">
          <img src="../assets/node.jpg" alt="Node logo" class="tech-logo" />
          Node
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      age: new Date().getFullYear() - 2002,
    };
  },
};
</script>

<style>
.ulgroup {
  padding: 0;
}

.about-me-col {
  justify-content: space-evenly;
  margin: 1rem;
  padding: 2.5em;
}

.onepiece {
  font-style: italic;
}
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
}

.about-me-col li {
  padding: 0.5rem 0;
  font-size: 1rem;
}

.tech-i-use-col {
  justify-content: space-evenly;
  margin: 1rem;
  padding: 2.5em;
}

.onepiece {
  color: blue;
  font-style: italic;
}

.tech-items-container {
  display: flex;
  flex-wrap: wrap;
}
.tech-item {
  flex: 0 0 auto;
  padding: 0.5rem;
  border: 1px solid;
  margin: 0.5em;
  border-radius: 5px;
}
.tech-item {
  display: flex;
  align-items: center;
}

.tech-logo {
  width: 15px;
  height: 15px;
  margin-right: 0.5em;
}

/* remove dot from about me list */
.about-me-col ul {
  list-style-type: none;
}

@media only screen and (max-width: 600px) {
  .grid-container {
    display: flex;
    flex-direction: column;
  }
}
</style>
