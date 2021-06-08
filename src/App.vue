<template>
  <div id="app" class="bg-black">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss" scoped>
#app {
  color: #fff;
  background-image: url("./assets/images/bg.png");
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
}
</style>