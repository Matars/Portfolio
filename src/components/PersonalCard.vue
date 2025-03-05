<template>
  <div class="card">
    <div class="card-box">
      <div class="card-content">
        <img class="card-icon" src="../assets/me.jpeg" alt="Card Icon" />
        <div class="card-text-content">
          <p class="card-name">
            Hey, I'm <span style="font-weight: bold">Khaled Matar</span>
            <br />
          </p>
          <p class="card-description">
            I'm a {{ age }} year old Software Engineer Student based in 🇸🇪
            Sweden.
          </p>
          <div class="buttons">
            <a href="https://github.com/Matars" class="button github-button"
              >GitHub</a
            >
            <router-link to="/CV" class="button cv-button">CV</router-link>
            <router-link to="/Education" class="button education-button"
              >Education</router-link
            >
            <a
              href="https://www.linkedin.com/in/khaled-matar-b9a332298/"
              class="button github-button"
              >Linked In</a
            >
          </div>
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

<style scoped>
img {
  margin-left: 20px;
}
.card-box {
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  padding: 20px;
  border-radius: 10px;
  border: 1px solid var(--border-color);
  background-color: var(--bg-second);
}

.card-text-content {
  margin-top: 2em;
  margin-left: 1em;
}
.card-content {
  display: flex;
  align-items: center;
}

.card-icon {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 15px;
}

.buttons {
  display: flex;
  /* justify-content: space-between; */
}

.card-name {
  font-size: 2em;
}

.card-description {
  font-size: 1.2em;
}

.button {
  padding: 1em;
  margin: 0.6em;
  border-radius: 5px;
  border: 1px solid var(--border-color);
  text-decoration: none;
}

@media only screen and (max-width: 600px) {
  .card-content {
    display: flex;
    flex-direction: column;
  }
}
</style>
