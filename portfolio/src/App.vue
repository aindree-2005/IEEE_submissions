<template>
  <div id="app">
    <Navbar/>
    <router-view />
  </div>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css';
import Navbar from './components/NavBar.vue'; // Import the Navbar component

export default {
  name: 'App',
  components: {
    Navbar
  } // Added closing curly brace here
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Libre+Caslon+Display&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif, "Libre Caslon Display", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #4d3319;
  margin-top: 0; 
  background-color: #f5f5dc;
}
body {
  background-color: #f5f5dc;
  font-family: "Libre Caslon Display", serif;
}
</style>
