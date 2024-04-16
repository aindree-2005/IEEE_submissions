<template>
  <nav class="navbar">
    <div class="navbar-left">
      <span class="logo"><span style ="color:#f767f7">/</span><span style ="color:#784b84">/</span>doubleslash</span>
    </div>
    <div class="navbar-right">
      <router-link to="/" class="nav-link" exact>home</router-link>
      <router-link to="/about" class="nav-link">about</router-link>
      <router-link to="/events" class="nav-link">events</router-link>
      <router-link to="/speakers" class="nav-link">speakers</router-link>
    </div>
  </nav>
</template>

<script>
export default {
name: 'Navbar'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap');

.navbar {
position: relative;
top: 0;
left: 0%;
width: 100%;
background-color: #1b021a;
box-shadow: 0 8px 8px rgba(216, 123, 222, 0.918);
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px;
font-family: "Urbanist", sans-serif;
font-weight: 200;
font-style: normal;
}

.navbar-left {
color: rgba(216, 123, 222, 0.918);
margin-right: 14px;
}

.navbar-right {
display: flex;
align-items: center;
padding-left: 12px;
padding-right: 18px;
margin-right: 20px;
}

.nav-link {
color: rgba(216, 123, 222, 0.918);
text-decoration: none;
margin-left: 20px;
font-size: 2rem;
font-family: "Urbanist", sans-serif;
font-weight: 200;
font-style: normal;
}

.nav-link:hover {
text-decoration: underline;
font-size: 2rem;
color: #783083;
background-color: #eb95ef;
font-weight: 500;
font-style: normal;
margin-top: auto;
}

.nav-link:active,
.router-link:active {
text-decoration: underline;
font-size: 2rem;
color: white;
text-decoration: underline 8px 8px;
}

.logo {
font-family: "Urbanist", sans-serif;
font-weight: 800;
font-style: bold;
font-size: 3rem;
color: #f9edf9;
}
</style>
