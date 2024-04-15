<template>
  <div id="app">
    <Navbar/>
    <router-view />
  </div>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css';
import Navbar from './components/Navbar.vue'; 
export default {
  name: 'App',
  components: {
    Navbar
  } 
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Libre+Caslon+Display&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif, "Libre Caslon Display", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 0; 
  background-color: rgb(225, 43, 249)
}
body {
  background-color: rgb(225, 43, 249);
  font-family: "Urbanist", sans-serif;
    font-weight: 200;
    font-style: normal;
}
</style>