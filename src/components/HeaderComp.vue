<template>
  <header>
    <nav>
      <span class="header-name">
        <a href="/" class="no-highlight"> MATAR </a>
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
  </header>
</template>

<style>
.header-name {
  font-weight: bold;
  margin-right: 8em;
}
.no-highlight {
  text-decoration: none;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border: 1px solid var(--border-color);
  border-radius: 20px;
  margin-top: 2em;
}

nav {
  display: flex;
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
</style>
