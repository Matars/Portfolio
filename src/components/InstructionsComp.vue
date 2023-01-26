<template>
  <div class="instructions">
    <span class="physics">Physics</span>
    <span class="math">Mathematics</span>
    <span class="software">Software Engineering</span>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style scoped>
.instructions {
  display: flex;
  justify-content: space-evenly;
  margin: 1rem;
  background-color: var(--bg-second);
  width: 75%;
  border-radius: 10px;
  padding: 2em;
  border: 1px solid var(--border-color);
}
.physics {
  border-bottom: 1px solid #0800ff;
}

.software {
  border-bottom: 1px solid #00ff00;
}

.math {
  border-bottom: 1px solid #ff7700;
}
</style>
