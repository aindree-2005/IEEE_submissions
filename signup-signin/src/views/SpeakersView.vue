<template>
  <div class="events">
    <div class="container">
      <div class="events-header">
        <h1>Speaker Sessions!</h1>
      </div>
      <div class="row" id="eventContainer">
        <div v-for="(speaker, index) in speakers" :key="index" class="col-lg-6">
          <div class="event-box">
            <h3>{{ speaker.title }}</h3>
            <p id="date">Date: {{ speaker.date }}</p>
            <p class="event-desc">{{ speaker.desc }}</p>
            <div class="btnx">
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
      speakers: [
        { title: "Alice Smith", date: "7th June, 2024", desc: "Join Alice Smith as she discusses 'The Future of AI' and explores its potential impact on various industries. Learn about the latest advancements, challenges, and ethical considerations in AI development." },
        { title: "Bob Johnson", date: "7th June, 2024", desc: "Discover insights from Bob Johnson on 'Empowering Women in Tech'. Explore strategies to promote gender diversity, inclusivity, and career advancement in the technology sector." },
        { title: "Charlie Brown", date: "8th June, 2024", desc: "Stay updated on the latest 'Cybersecurity Trends' with Charlie Brown. Gain valuable insights into emerging threats, best practices, and technologies shaping the cybersecurity landscape." },
        { title: "Diana Garcia", date: "8th June, 2024", desc: "Unlock 'Reverse Engineering Strategies' with Diana Garcia. Dive deep into techniques for analyzing, understanding, and reconstructing complex systems to enhance your problem-solving skills." }
      ]
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
body{
  height:100vh;
  display: flex;
}
.events {
  background-color: #3a0930;
  padding: 50px 0;
}

.container {
  width: 90%;
  margin: 0 auto;
}

.events-header {
  text-align: center;
  margin-bottom: 40px;
}

.event-box {
  border: 3px solid #3a0930;
  padding: 30px;
  margin-bottom: 40px;
  font-family: "Urbanist", sans-serif;
  background-image: linear-gradient(to right, #611d61, #750869, #570232);
}

.event-box:hover {
  padding: 50px;
  box-shadow: #f9edf9 2px 2px;
}

h3, h1 {
  font-weight: 800;
  font-style: bold;
  font-size: 5rem;
  color: #f9edf9;
  margin-top: 0;
}

h1 {
  color: #f3ebf0;
}

#date, .event-desc {
  font-weight: 500;
  font-style: normal;
  font-size: 1.5rem;
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
  justify-content: space-evenly;
  margin-top: 20px;
}

.btn {
  font-size: 1.5rem;
}

@media only screen and (max-width: 768px) {
  h3 {
    font-weight: 600;
    font-style: bold;
    font-size: 2.5rem;
    color: #f9edf9;
  }
  h1{
    font-size:2.8rem;
  }
  body{
    height:100vh;
  }
}
</style>
