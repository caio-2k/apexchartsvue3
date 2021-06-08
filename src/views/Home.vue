<template>
  <!-- ENTIRE SCREEN -->
  <div class="home flex flex-col h-screen">
    <!-- NAVBAR  -->
    <nav class="flex justify-end p-10">
      <router-link to="/tutorial">How do I update packages?</router-link>
    </nav>
    <!-- END NAVBAR  -->

    <!-- BOX MAIN -->
    <main class="flex flex-col justify-center items-center h-fulll">
      <!-- CARD CONTAINER -->
      <div
      class="card-container">
      <div
        class="bg-white text-black font-bold rounded-lg shadow-lg p-10 animate__animated animate__fadeInDown animate_faster"
      >
      <apexchart
          height="300"
          type="area"
          :options="options"
          :series="series"
        ></apexchart>
      </div>
      </div>
      <!-- END CARD CONTAINER -->
    </main>
    <!-- END BOX MAIN -->
  </div>
  <!-- END ENTIRE SCREEN -->
</template>

<script>
export default {
  name: 'Home',

  data() {
    return {
      name: "App",
      // Datos de la gráfica No: 1
      options: {
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],

      // Datos de la gráfica No: 2

      optionsDos: {
        chart: {
          type: "donut",
        },
        labels: ["Apple", "Mango", "Orange", "Watermelon"],
      },

      seriesDos: [44, 55, 13, 33],
    };
  }
}
</script>

<style scoped lang="scss">

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
