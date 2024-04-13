<template>
  <div class="skills">
    <h1 id="hi">My Skills</h1>
  </div>
  
  <!-- Flex layout with 8 boxes -->
  <div class="container mt-5">
    <div class="row">
      <!-- First row -->
      <div class="col-md-4 mb-4">
        <div class="box ">
          <i class="fa-brands fa-vuejs fa-3x" style="color: beige; padding-top: 10px;"></i>
          <p style="font-size:small; color:whitesmoke">I have worked extensively in web develpment. Currently, I am learning Vue.js before I move on to learn React.I have also delved into Bootstrap, Tailwind Typed.Js, GSAP
          </p>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="box">
          <i class="fa-brands fa-python fa-3x" style="color: beige; padding-top: 10px;"></i>
          <p style="font-size:small; color:whitesmoke">My knowledge in Python has helped me in learning data structures, algorithms, and
            data analysis. I have also learned to leverage Flask to create web applications with Python.
          </p>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="box">
          <i class="fa-brands fa-bootstrap fa-3x" style="color: beige; padding-top: 10px;"></i>
          <p style="font-size:small; color:whitesmoke">I have learned Bootstrap CSS and Tailwind css to easily design sophisticated
            components for web apps.
          </p>
        </div>
      </div>
      
      <!-- Second row -->
      <div class="col-md-4 mb-4">
        <div class="box">
          <i class="fa-brands fa-dribbble fa-3x" style="color: beige; padding-top: 10px;"></i>
          <p style="font-size:small; color:whitesmoke">I am a passionate graphic designer, proficient in Illustrator and Canva. Also,
            I have worked with Photoshop, and Figma considerably.
          </p>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="box">
          <i class="fa-brands fa-kaggle fa-3x" style="color: beige; padding-top: 10px;"></i>
          <p style="font-size:small; color:whitesmoke"> My experience in Machine Learning fostered from the various hackathons
           I took part in. Having worked in NLP and image classification, I am currently learning GenAI using Langchain and Gemini
          </p>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="box">
          <i class="fa-solid fa-headphones fa-3x" style="color: beige; padding-top: 10px;"></i>
          <p style="font-size:small; color:whitesmoke"> My communication skills have helped me in various debating
            and MUN events. It has helped me gain considerable experience in public relations

          </p>
        </div>
      </div>
    </div>
  </div>
  
  <div class="bg-brown footer mt-5">
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
export default {
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
};
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

.box {
  height: 155px;
  margin-left:40px;
  margin-right:40px;
  background-color: rgb(127, 92, 71);
  box-shadow: #db3585 10px 10px;
  border-radius: 2%;
  font-family: "Libre Caslon Display", serif;
  font: size 1.2rem;
}
.box:hover {
  height: 160px;
  margin-left:40px;
  margin-right:40px;
  background-color:#db3585 ;
  box-shadow: rgb(127, 92, 71) 10px 10px;
  border-radius: 6%;
  font-family: "Libre Caslon Display", serif;
}
@media only screen and (max-width: 600px) {
  #hi {
    font-size: 6rem;
  }
  #ok{font-size:4rem;}
  #hi:hover{font-size:8rem}
}
</style>
