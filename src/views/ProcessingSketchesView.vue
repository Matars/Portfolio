<script setup lang="ts">
import FooterComp from "../components/FooterComp.vue";
import HeaderComp from "../components/HeaderComp.vue";
</script>

<template>
  <main>
    <div class="parent">
      <div class="wrapper">
        <span>
          <h1>Processing Sketches</h1>
          <p>
            I have a keen interest in creative coding and enjoy experimenting
            with different techniques to create visually interesting and
            interactive pieces. Processing is a great tool for this, as it
            allows for rapid prototyping and iteration.
          </p>
        </span>
        <div class="flowfields">
          <h2>Flowfields</h2>
          <p>
            The flowfield sketch is a recreation of the flowfield sketch from
            Daniel Shiffman's Nature of Code. The sketch uses Perlin noise to
            create a field of vectors that are used to move particles around the
            screen. The particles are attracted to the vectors and move in the
            direction of the vector they are closest to.
          </p>
          <div class="content">
            <img
              src="../assets/flowfield1.jpg"
              alt="Processing Sketches image"
            />
            <img
              src="../assets/flowfield2.jpg"
              alt="Processing Sketches image"
            />
          </div>
        </div>
        <div id="fractaltree">
          <h2>Fractal tree</h2>
          <p>
            The fractal tree sketch is an interactive piece that changes
            properties depending on the position of the mouse. The degrees of
            branching are mapped to the position of the mouse, allowing the user
            to control the complexity of the tree.
          </p>
          <div class="content">
            <img
              src="../assets/fractaltree.png"
              alt="Processing Sketches image"
            />
            <video
              src="../assets/fractalRecording.mp4"
              controls
              muted
              loop
            ></video>
          </div>
        </div>
        <div id="circle">
          <h2>Circle from points</h2>
          <p>
            Did you know that you can make a circle with any three points? Well
            I wanted to prove that for my self so I made this Processing sketch
            to visually confirm it
          </p>
          <video
            src="../assets/circleFromPoints.mp4"
            controls
            muted
            loop
          ></video>
        </div>
        <div id="10Print">
          <h2>10 Print</h2>
          <p>
            10 Print is a classic Processing sketch that creates a random
            pattern of lines, this is a recreation of that sketch.
          </p>
          <img src="../assets/10Print.png" alt="10 Print image" />
        </div>
      </div>
      <FooterComp />
    </div>
  </main>
</template>

<style scoped>
.content {
  display: flex;
}
</style>
