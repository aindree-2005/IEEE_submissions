<template>
  <div class="events">
    <div class="container">
      <div class="events">
        <h1>Take your pick!</h1>
      </div>
      <div class="row" id="eventContainer">
        <div v-for="(event, index) in events" :key="index" class="col-lg-6">
          <div class="event-box">
            <h3>{{ event.title }}</h3>
            <p id ="date">Date: {{ event.date }}</p>
            <p class="event-desc">{{ event.desc }}</p>
            <div class="col-md-6 btnx">
              <button class="btn btn-danger" @click="signup">Register</button>
              <button class="btn btn-secondary">Feedback</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      events: [
        { title: "GenerationAI", date: "June 6th, 2024", desc: "Join our exciting generative AI hackathon where participants unleash creativity to develop cutting-edge roasting and memeing software. Explore the art of AI-driven humor in a collaborative environment. Compete, collaborate, and innovate for a chance to revolutionize digital jesting in this dynamic 40-word challenge!" },
        { title: "DevIX", date: "June 6th, 2024", desc: "Embark on a six-hour journey of empowerment at our female-only web dev hackathon. Unleash your coding prowess, network with like-minded women, and build transformative digital solutions. Empowering diversity and innovation in a supportive environment. Join us!" },
        { title: "CyberTrain", date: "June 7th, 2024", desc: "Immerse yourself in an adrenaline-fueled cybersecurity hackathon, featuring an 8-hour marathon of challenges and Capture The Flag (CTF) competitions. Dive deep into digital defenses, collaborate with experts, and fortify your skills in this high-stakes event. Join the battle for digital security supremacy!" },
        { title: "Revelation", date: "June 8th, 2024", desc: "Unravel the mysteries of software in our reverse engineering coding challenge. Decode, analyze, and reconstruct complex systems within constraints. Test your problem-solving skills and ingenuity in this mind-bending quest. Are you ready to crack the code?" }
      ],
    }
  },
  methods: {
    signup() {
      this.$router.push('/signup');
    }
  }
}
</script>

<style scoped>
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css');
.event-box {
  border: 3px solid #3a0930;
  padding: 30px;
  margin-bottom: 40px;
  font-family: "Urbanist", sans-serif;
  background-image: linear-gradient(to right, #611d61,#750869, #570232);
  
}
.event-box:hover{
  padding:50px;
  box-shadow: #f9edf9 2px 2px;
}
h3,h1{
  font-weight: 800;
  font-style: bold;
  font-size: 5rem;
  color: #f9edf9;

}
h1{
  color:#570232;
}
#date,.event-desc{
  font-weight: 500;
  font-style: normal;
  font-size:1.5 rem;
  color: #fcadfc;

}
.event-desc {
  display: none;
  color: #f9edf9;
  
}
.event-box:hover .event-desc {
  display: block;
}
.btnx {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  content-align:center;
}

body {
  font-family: "Urbanist", sans-serif;
  font-weight: 200;
  background-color: #3a0930;
  font-style: normal;
}

/* Media Query for smaller screens */
@media only screen and (max-width: 768px) {
  .first-box {
    width: 90%; 
    width:600px;
  }
  h1{
    font-size:2.8rem;
  }

  .first-box {
    grid-template-columns: 3fr; /* Stack image and text on smaller screens */
  }
  h3{
  font-weight: 600;
  font-style: bold;
  font-size: 2.5rem;
  color: #f9edf9;

}
}
</style>