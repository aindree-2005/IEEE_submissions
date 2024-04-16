<template>
  <div class="events">
    <div class="container">
      <div class="events">
        <h1>This is an events page</h1>
      </div>
      <div class="row" id="eventContainer">
        <!-- Event boxes will be dynamically added here -->
        <div v-for="(event, index) in events" :key="index" class="col-lg-6">
          <div class="event-box">
            <h3>{{ event.title }}</h3>
            <p>Date: {{ event.date }}</p>
            <p class="event-desc">{{ event.desc }}</p>
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
        { title: "GenerationAI", date: "June 6th, 2024", desc: "Description for Event 1" },
        { title: "DevIX", date: "June 6th, 2024", desc: "Description for Event 2" },
        { title: "Cybersec Showdown", date: "June 7th, 2024", desc: "Description for Event 3" },
        { title: "Revelation", date: "June 8th, 2024", desc: "Description for Event 4" }
      ]
    }
  }
}
</script>

<style scoped>
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css');
.event-box {
  border: 3px solid #3a0930;
  padding: 20px;
  margin-bottom: 20px;
}
.event-desc {
  display: none;
}
.event-box:hover .event-desc {
  display: block;
}
body {
  font-family: "Urbanist", sans-serif;
  font-weight: 200;
  font-style: normal;
}

.first-box {
  display: flex;
  background-color: black;
  width: 85%;
  margin: auto;
  margin-top: 10%;
  border-radius: 10px;
  border: 2px dashed white;
  position: relative;
}

.left,
.right {
  flex: 1 1 auto;
}

.right {
  display: inline-block;
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
  font-size: 1.8vw;
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
    width: 90%; 
    width:600px;
  }

  .first-box {
    grid-template-columns: 3fr; /* Stack image and text on smaller screens */
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