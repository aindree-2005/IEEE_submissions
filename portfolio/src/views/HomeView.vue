<template>
  <div class="home">
    <h1 id="hi">Hi, I'm Aindree!</h1>
    <h2 id="ok">I like <span id="typed"></span></h2>
    <div class="chobi">
      
      <div class="text" style="position: absolute right;  padding-left: 10px;">
        <img src="./code.svg" alt="Code Image" style="width: 50%; height: 50%; ">
        <p id="bruh"> Currently, I am pursuing dual degrees:
          <span id="ok2"><b>BE(ETCE) from Jadavpur University</b></span> and <span id="ok2"><b>BS in Data Science from IITM</b></span>
          My previous experiences revolved around e-learning, content creation, editing, and writing. 
          I possess a strong enthusiasm for coding and actively contribute to STEM-based projects, 
          utilizing both code-intensive and non-code methods such as documentation, user research,
          and graphics design. Additionally, I have acquired expertise in non-profit management 
          and administrative tasks.
        </p>
      </div>
    </div>
  </div>

  <div class="bg-brown footer">
    <div class="container">
      <div class="row">
        <div class="text-white">
          <span>Created by Aindree Chatterjee 2024</span>
        </div>
      </div>
      <br><br>
      <div class="row">
        <div class="text-center">
          <button v-if="github" class="social-button" @click="open('github')">
            <i class="fab fa-github"></i>
          </button>
          <button v-if="linkedin" class="social-button" @click="open('linkedin')">
            <i class="fab fa-linkedin"></i>
          </button>
          <button v-if="resume" class="social-button" @click="open('resume')">
            <i class="fa fa-file"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Typed from 'typed.js';

export default {
  name: 'HomeView',
  mounted() {
    new Typed('#typed', {
      strings: [
        "Web Development",
        "Graphic Design",
        "Machine Learning",
        "Creating New Projects",
        "Creative Writing"
      ],
      typeSpeed: 30,
      loop: true 
    });
  },
  data () {
    return {
      linkedin: 'https://www.linkedin.com/in/aindree-chatterjee-b93279201/',
      github: 'https://github.com/aindree-2005',
      resume: 'https://drive.google.com/drive/folders/1sviq7HwK_tgm1xooMjANk_hLuFi-85HA',
    };
  },
  methods: {
    open(link) {
      window.open(this[link], "_blank");
    },
  },
}
</script>


<style scoped>
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css');
@import url('https://fonts.googleapis.com/css2?family=Libre+Caslon+Display&display=swap');

#ok {
  font-size: 7rem;
  color: rgb(127, 92, 71); 
  margin: 0 auto;
  text-shadow:#331c06;
  font-family: "Libre Caslon Display", serif;
}

body,
h1 {
  font-family: "Libre Caslon Display", serif;
  
  font-family: "Libre Caslon Display", serif;
}
#bruh{
  font-family: "Libre Caslon Display", serif;
  font-size: 2rem;
  color:#331c06; 
  margin: 0 auto;
  font-family: "Libre Caslon Display", serif;
}

#hi {
  font-family: "Libre Caslon Display", serif;
  font-size: 10rem;
  margin:0 auto
}
#hi:hover {
  font-family: "Libre Caslon Display", serif;
  font-size: 12rem;
  margin:0 auto;
  color:#db3585;
  transition: font-size 0.3s ease;
  transition:color 1s ease-in-out;
}
#ok2{
  color:#db3585;
}

#button {
  margin-bottom: 3rem;
}
.footer {
    background-color: #331c06; 
    color: #fff; 
    padding: 20px;
}
  
.container {
    max-width: 1200px; 
    margin: 0 auto; 
}
  
.row {
    display: flex;
    flex-wrap: wrap;
}
  
.text-white {
    color: white;
}
  
.text-center {
    text-align: center;
}
  
.social-button {
    background-color: rgb(127, 92, 71); 
    border-radius: 50%; 
    border-spacing: 1.2rem;
    padding: 1.2rem;
    color: inherit;
    cursor: pointer;
    margin-left: 10px;
}
  
.social-button i {
    font-size: 1.5rem; 
    color:whitesmoke
}
.row {
  display: flex;
  flex-wrap: wrap;
}
</style>
