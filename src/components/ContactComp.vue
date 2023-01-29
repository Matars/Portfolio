<template>
  <div class="container">
    <div class="contact-form">
      <h2>Let's work together</h2>
      <p>
        If you have any questions feel free to contact me at
        <span class="mail">km222uq@student.lnu.se</span>
      </p>
      <button class="button" @click="launchMail">Contact me</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  methods: {
    launchMail() {
      let email = "km222uq@student.lnu.se";
      let subject = "Contact from my website";
      let body = "";
      let mailToLink = `mailto:${email}?subject=${subject}&body=${body}`;
      window.location.href = mailToLink;
    },
  },
};
</script>

<style>
.container {
  display: block;
  margin: 0 auto;
}

.mail {
  font-weight: bold;
}
.contact-form {
  text-align: center;
  background-color: var(--bg-second);
  border: 1px solid var(--border-color);
  border-radius: 5px;
  /* margin: 5em; */
  padding: 1em;
}
.contact-form h2 {
  margin-bottom: 2rem;
}
.contact-form form {
  display: inline-block;
}
.contact-form label {
  display: block;
  margin-bottom: 1rem;
}

@media screen and (max-width: 600px) {
  .contact-form {
    width: 60vw;
  }
}
</style>
