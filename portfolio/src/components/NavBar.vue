<template>
    <nav class="navbar">
      <div class="navbar-left">
        <span class="logo">Aindree's Portfolio</span>
      </div>
      <div class="navbar-right">
        <router-link to="/" class="nav-link">About</router-link>
        <router-link to="/experience" class="nav-link">Experience</router-link>
        <router-link to="/skills" class="nav-link">Skills</router-link>
        <router-link to="/contact" class="nav-link">Contact</router-link>
      </div>
    </nav>
  </template>
  
<script>
export default {
  name: 'Navbar'
}
</script>
  
  <style scoped>
  .navbar {
    background-color: #f5f5dc;
    position: sticky;
    top: 0;
    box-shadow: 0 2px 4px rgba(222, 139, 123, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    font-family: "Libre Caslon Display", serif;
  }
  
  .navbar-left {
    font-size: 1.8rem;
    color: #4d3319;
  }
  
  .navbar-right {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    padding-left:12px;
    padding-right:6px;
  }
  
  .nav-link {
    font-weight: bold;
    color: #4d3319;
    text-decoration: none;
    margin-left: 20px;
  }
  
  .nav-link:hover {
    text-decoration: underline;
    font-size: 2rem;
    color:#f5f5dc ;
    background-color:#482504 ;
  }
  .nav-link:active{
    text-decoration: underline;
    font-size: 2rem;
    color:#f5f5dc ;
    background-color:#482504 ;
    border-color: #f5f5dc;
    border: spacing 3px;
    border-radius: 40%;
  }
  </style>
  