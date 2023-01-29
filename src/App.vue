<template>
  <nav>
    <span class="header-name">
      <a href="/" class="no-highlight">MATAR</a>
    </span>
    <ul>
      <li>
        <router-link to="/" class="no-highlight">Home</router-link>
      </li>
      <li>
        <router-link to="/Education" class="no-highlight"
          >Education</router-link
        >
      </li>
    </ul>
  </nav>
  <router-view />
</template>

<style scoped>
.header-name {
  font-weight: bold;
  margin-right: 8em;
}
.no-highlight {
  text-decoration: none;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border: 1px solid var(--border-color);
  border-radius: 20px;
  margin-top: 2em;
  background-color: var(--bg-second);
  position: fixed;
  top: 0;
  width: 30vw;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.9;
  z-index: 1;
}

nav > ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}
nav > ul > li {
  margin-left: 1rem;
}

@media only screen and (max-width: 600px) {
  nav {
    width: 80vw;
  }
  .header-name {
    font-weight: bold;
    margin-right: 4em;
  }
}
</style>
