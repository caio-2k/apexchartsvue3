<template>
  <!-- ENTIRE SCREEN -->
  <div class="home flex flex-col h-screen">
    <!-- NAVBAR  -->
    <nav class="flex justify-end p-10">
      <router-link to="/">Home</router-link>
    </nav>
    <!-- END NAVBAR -->

    <!-- BOX MAIN -->
    <main class="flex flex-col justify-center items-center h-full">
      <!-- CARD CONTAINER -->
      <div
      class="card-container">
        <div
          class="bg-indigo-800 text-white font-bold rounded-lg shadow-lg p-10 animate__animated animate__fadeInDown animate_faster"
        >
          <div class="text-lg font-medium text-white antialiased">
            Click
            <a
              class="b-word hover:text-indigo-200 transition duration-500 ease-in-out"
              href="https://samuelsson.dev/upgrade-all-dependency-versions-in-package-json-with-yarn/"
              target="_blank"
              >here</a
            >
            to see how update the packages of this repository after cloned.
          </div>
        </div>
      </div>
      <!-- END CARD MAIN -->
    </main>
    <!-- END BOX MAIN -->
  </div>
  <!-- END ENTIRE SCREEN -->
</template>

<script>
export default {
  name: 'Tutorial'
}
</script>

<style scoped lang="scss">
.b-word {
  border-bottom: 2px solid rgb(140, 200, 60);
}
nav {
  > a {
    font-size: 1em;
    font-weight: 300;
    letter-spacing: 0.2em;
    color: #04d361;
    text-transform: uppercase;
    text-decoration: none;
    -webkit-transition: color 0.15s ease;
    -moz-transition: color 0.15s ease;
    transition: color 0.15s ease;
    &:hover {
      color: #0ff577;
      text-shadow: none;
      border: none;
    }
  }
}
</style>