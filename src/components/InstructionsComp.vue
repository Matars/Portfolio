<template>
  <div class="instructions">
    <ul>
      <li class="physics"><span class="name">Physics</span></li>
      <li class="math"><span class="name">Mathematics</span></li>
      <li class="software"><span class="name">Software Engineering</span></li>
      <li><span class="name">Other</span></li>
    </ul>
  </div>
</template>

<style scoped>
.name {
  color: var(--text-main);
}

ul {
  display: flex;
  justify-content: space-evenly;
  background-color: var(--bg-second);
  width: 75%;
  border-radius: 10px;
  padding: 2em;
  border: 1px solid var(--border-color);
}
.physics {
  color: #0800ff;
}

.software {
  color: #00ff00;
}

.math {
  color: #ff7700;
}

@media screen and (max-width: 600px) {
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }
}
</style>
