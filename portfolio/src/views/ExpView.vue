<template>
  <div class="skills">
    <h1 id="hi">Experience</h1>
  </div>
  <div id="info" style=" display:block;justify-content: center;">
    <div v-for="(item, index) in work" :key="index" class="work-item" >
        <div id ="tryok" style=" display: block; border: 4px dashed #db3585; padding: 10px; width:70%; margin-left:auto;margin-right:auto; margin-top:2rem; background-color:blanchedalmond;">
            <p id="ok2"><b>Role: </b>
            <span style="color:#331c06; font-family:Arial, serif;">{{ item.title }}</span></p> 
            <p  id="ok2"><b>Company </b><span style="color:#331c06; font-family:Arial, serif;">{{ item.company }}</span></p>  <br>         
            <p  id="ok2"><b>Time</b><span style="color:#331c06; font-family:Arial, serif;">{{ item.duration }}</span></p><br>
            <p  id="ok2"><b>Description<br></b><span style="color:#331c06; font-family:Arial, serif;">{{ item.description }}</span></p><br>
            
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
  data() {
    return {
      linkedin: 'https://www.linkedin.com/in/aindree-chatterjee-b93279201/',
      github: 'https://github.com/aindree-2005',
      resume: 'https://drive.google.com/drive/folders/1sviq7HwK_tgm1xooMjANk_hLuFi-85HA',
      work: [
        {
          title: "Graphic Designer",
          company: "GDSC Jadavpur University",
          position: "Part-time",
          duration: "Sep 2023 - Present",
          durationMonths: "8 mos",
          location: "Greater Kolkata Area · Hybrid",
          description: "As a member of the extended Graphic Design team, I utilize tools like Adobe Photoshop and Adobe Illustrator to create designs for social media content and posters."
        },
        {
          title: "Graphic Designer",
          company: "JUSC",
          position: "Part-time",
          duration: "Feb 2024- Present",
          durationMonths: "3 mos",
          location: "Greater Kolkata Area · Hybrid",
          description: "As a member of the Graphic Design team, I utilize tools like Adobe Photoshop and Adobe Illustrator to create designs for social media content and posters."
        },
        {
          title: "Open Source Contributor (Code Peak '23)",
          company: "NJACK, IIT Patna",
          position: "Part-time",
          duration: "Dec 2023 - Jan 2024",
          durationMonths: "2 mos",
          location: "Remote",
          description: "CODE PEAK is a month-long program that helps students understand the paradigm of Open Source contribution and gives them real-world software development experience. I primarily contribute in projects related to machine learning, deep learning and natural language processing. Additionally, I also work on frontend and UI/UX tasks throughout the coding period."
        },
        {
          title: "First Runner Up (Codepeak 2023)",
          company: "Kolkata, West Bengal, India",
          duration: "Dec 2023 - Jan 2024",
          durationMonths: "2 mos",
          description: "Finished 2nd on the overall leaderboard for Codepeak 2023"
        },
        {
          title: "Open Source Contributor (KWOC)",
          company: "Kharagpur Open Source Society",
          position: "Part-time",
          duration: "Dec 2023 - Jan 2024",
          durationMonths: "2 mos",
          location: "India · Remote",
          skills: ["HTML", "Graphic Design", "Other skills"],
          description: "Contributed to open-source projects as part of Kharagpur Winter of Code (KWOC)."
        },
        {
          title: "Open Source Contributor",
          company: "Hacktoberfest",
          position: "Part-time",
          duration: "Oct 2023 - Oct 2023",
          durationMonths: "1 mo",
          location: "Remote",
          skills: ["HTML", "Machine Learning", "Other skills"],
          description: "Participated in Hacktoberfest 2023, contributing to open-source projects on platforms like GitHub. Gained experience in Python, HTML, CSS, and JavaScript."
        },
        {
          title: "Technical Writing Intern",
          company: "hello ML",
          position: "Internship",
          duration: "Jan 2021 - Mar 2021",
          durationMonths: "3 mos",
          description: "Wrote articles on various tech topics, ranging from algorithms to the latest news in Computer Science and Robotics."
        }
      ]
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
info h1,#bruh{
  font-family: "Libre Caslon Display", serif;
  font-size: 2rem;
  color:#331c06; 
  text-align: left;
  margin-left:20px;
 
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
  font-family: "Libre Caslon Display", serif;
  font-size:x-large
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
#tryok:hover{
  background-color: white;
  box-shadow:#db3585 3px px;
}

</style>
