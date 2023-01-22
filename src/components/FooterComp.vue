<template>
  <footer>
    <div class="footer-container">
      <p>{{ currentYear }} © Matar</p>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style>
.footer-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  border-top: 1px solid var(--border-color);
  background-color: var(--bg-main);
}

footer {
  width: 75%;
  display: block;
  margin: 0 auto;
}
</style>
