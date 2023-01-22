<template>
  <div class="card">
    <div class="card-box">
      <div class="card-content">
        <img class="card-icon" src="../assets/icon.png" alt="Card Icon" />
        <div class="card-text-content">
          <p class="card-name">
            Hey, I'm <span style="font-weight: bold">Khaled Matar</span>
          </p>
          <p class="card-description">
            I'm a Software Engineer Student based in 🇸🇪 Sweden.
          </p>
          <div class="buttons">
            <a
              href="https://twitter.com/matar_khaled"
              class="button twitter-button"
              >Twitter</a
            >
            <a
              href="https://github.com/matarkhaled"
              class="button github-button"
              >GitHub</a
            >
            <a href="#" class="button education-button">Education</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
  width: 150px;
  height: 150px;
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
</style>
