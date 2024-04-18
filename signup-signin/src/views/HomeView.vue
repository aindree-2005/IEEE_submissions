<template>
  <div class="container">
    <div class="text-center">
      </div>
    <div class="home">
      <div class="first-box">
        <div class="left">
          <img src="./Pair programming-bro.svg" class="coders" alt="IEEE Logo">
          <img src="./Pair programming-rafiki.svg" style="width:300px;height:auto;" alt="IEEE Logo">
        </div>
        <div class="right">
          <ul style="color: black;">
            <li><img src="./ieee.png" class="logo" alt="IEEE Logo"></li>
            <li><p class="caption">Presents</p></li>
            <li><span class="logo2"><span style="color:#f767f7">/</span><span style="color:#784b84">/</span>doubleslash</span></li>
            <hr style="margin-right: 60px; margin-left: 60px;">
            <li><span class="ok">Code. <span style="color:#784b84">Commit</span>. Create</span></li>
            <li><p class="ok2">6th<span style="color:#784b84"> to </span><span style="color:#784b84">7th June 2024</span></p></li>
            <li><button class="discord-button">Join our Discord</button></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
}
</script>

<style>
body {
  font-family: "Urbanist", sans-serif;
  font-weight: 200;
  font-style: normal;
  height:120vh;
}

.first-box {
  display: flex;
  background-color: black;
  width: 85%;
  margin: auto;
  margin-top: 10%;
  padding-top: 12px;
  border-radius: 10px;
  border: 2px dashed white;
  position: relative;
  margin-bottom: 10%;
}

.left,
.right {
  flex: 1 1 auto;
}

.right {
  display: inline-flexbox;
  align-items: center;
  padding-left: 12px;
  padding-right: 8px;
  margin-right: 20px;
  color: rgba(216, 123, 222, 0.918);
  text-decoration: none;
  text-align: center; /* Center text on smaller screens */
}

.logo {
  width: 175px;
  height: auto;
}

.caption {
  display: block;
  color: rgba(216, 123, 222, 0.918);
  font-family: "Urbanist", sans-serif;
  font-weight: 200;
  font-style: normal;
  font-size: 1.8vw; /* Responsive font size */
}

.logo2 {
  font-family: "Urbanist", sans-serif;
  font-weight: 800;
  font-style: bold;
  font-size: 5rem;
  color: #f9edf9;
}

.ok {
  font-family: "Urbanist", sans-serif;
  font-weight: 800;
  font-size: 3rem;
  color: #f9edf9;
}

.ok2 {
  font-family: "Urbanist", sans-serif;
  font-weight: 800;
  font-size: 5rem;
  color: #f0aff0;
}

.discord-button {
  padding: 10px 20px;
  font-size: 1.5rem;
  background-color: #7289da;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.discord-button:hover {
  background-color: #5865f2;
}

.coders {
  width: 100%;

  height: auto;
  margin: 0 auto;
}

/* Media Query for smaller screens */
@media only screen and (max-width: 768px) {
  .first-box {
    width: 70%; 
    width:400px;
  }

  .first-box {
    grid-template-columns: 1fr; 
  }
  .left{
    display: none;
  }

  .right {
    text-align: center; 
  }
  .logo2,.ok,.ok2{
    font-size:1.5rem;
    margin-right: 22px;
  }
  .caption {
    font-size: 1.5rem;
  }
  button{
    font-size:4px;
    padding: 4px 12px;
  }
}
</style>
