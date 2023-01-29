<template>
  <div class="grid-container">
    <div class="about-me-col">
      <h2>About Me</h2>
      <ul>
        <li>20 years old</li>
        <li>Student</li>
        <li>I solve problems</li>
        <li>
          Free time - Working out, watch <span class="onepice">One Piece</span>,
          chilling with friends
        </li>
      </ul>
    </div>
    <div class="tech-i-use-col">
      <h2>Tech I Use</h2>
      <div class="tech-items-container">
        <div class="tech-item javascript">
          <img src="../assets/js.png" alt="JavaScript logo" class="tech-logo" />
          JavaScript
        </div>
        <div class="tech-item vue">
          <img src="../assets/vue.png" alt="Vue.js logo" class="tech-logo" />
          Vue.js
        </div>
        <div class="tech-item css">
          <img src="../assets/css.png" alt="CSS logo" class="tech-logo" />
          CSS
        </div>
        <div class="tech-item html">
          <img src="../assets/html.png" alt="HTML logo" class="tech-logo" />
          HTML
        </div>
        <div class="tech-item python">
          <img src="../assets/python.png" alt="Python logo" class="tech-logo" />
          Python
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
      </div>
    </div>
  </div>
</template>

<style>
.about-me-col {
  justify-content: space-evenly;
  margin: 1rem;
  background-color: var(--bg-second);
  width: 75%;
  border-radius: 10px;
  padding: 2em;
  border: 1px solid var(--border-color);
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
  background-color: var(--bg-second);
  width: 75%;
  border-radius: 10px;
  padding: 2em;
  border: 1px solid var(--border-color);
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

@media only screen and (max-width: 600px) {
  .grid-container {
    display: flex;
    flex-direction: column;
  }
}
</style>
