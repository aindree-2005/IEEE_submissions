<template>
  <div class="contact" style="background-color: #f5f5dc;">
    <h1>Hi. Welcome to my page</h1>
    <form @submit.prevent="submitForm" class="needs-validation" novalidate>
      <div class="mb-5 sm-6" id="ok">
        <label for="name" class="form-label" id="hi">Name:</label>
        <input type="text" class="form-control" id="name" v-model="cont.name">
      </div>
      <div class="mb-5 sm-6" id="ok">
        <label for="email" class="form-label" id="hi">Email:</label>
        <input type="email" class="form-control" id="email" v-model="cont.email" required>
      </div>
      <div class="mb-3 sm-6" id="ok">
        <label for="message" class="form-label" id="hi">Message:</label>
        <textarea class="form-control" id="message" v-model="cont.message" rows="4" required></textarea>
      </div>
      <button type="submit" class="btn btn-danger" id="button">Submit</button>
    </form>
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
export default {
  data () {
    return {
      cont: {
        name: '',
        email: '',
        message: ''
      },
      linkedin: 'https://www.linkedin.com/in/aindree-chatterjee-b93279201/',
      github: 'https://github.com/aindree-2005',
      resume: 'https://drive.google.com/drive/folders/1sviq7HwK_tgm1xooMjANk_hLuFi-85HA',
    };
  },
  methods: {
    submitForm() {
      console.log(this.cont);
      this.cont = {
        name: '',
        email: '',
        message: ''
      };
      console.warn('Hello!');
    },
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
  width: 60%;
  margin: 0 auto;
}

body,
h1 {
  font-family: "Libre Caslon Display", serif;
}

#hi {
  font-family: "Libre Caslon Display", serif;
  font-size: 1.2rem;
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
