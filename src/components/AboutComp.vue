<template>
  <div class="grid-container">
    <div class="about-me-col">
      <h3>About Me</h3>
      <p>
        Hey there, my name is Khaled Matar, I am 20 years old and currently a
        second-year student studying Software Engineering. <br /><br />My main
        expertise lies in web development and Python programming, with a strong
        focus on problem-solving skills. <br /><br />In my free time, I enjoy
        going to the gym, learning about cryptocurrency, delving into creative
        coding and AI projects. Nice to meet you!
      </p>
    </div>
    <div class="tech-i-use-col">
      <h3>Tech I Use</h3>
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
        <div class="tech-item chatgpt">
          <img
            src="../assets/chatgpt.jpeg"
            alt="ChatGPT logo"
            class="tech-logo"
          />
          ChatGPT
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
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
}

.about-me-col {
  padding: 1rem;
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
</style>
