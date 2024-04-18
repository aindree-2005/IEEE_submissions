<template>
  <div class="registration-form">
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="formData.name" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" required>
      </div>
      <div class="form-group">
        <label for="phone">Phone Number:</label>
        <input type="tel" id="phone" v-model="formData.phone" required>
      </div>
      <div class="form-group">
        <p>Select Events:</p>
        <div v-for="(event, index) in events" :key="index">
          <input type="checkbox" :id="'event-' + index" v-model="formData.selectedEvents" :value="event.title">
          <label :for="'event-' + index">{{ event.title }}</label>
        </div>
      </div>
      <div class="form-group">
        <p>Select Speaker Sessions:</p>
        <div v-for="(session, index) in speakerSessions" :key="index">
          <input type="checkbox" :id="'session-' + index" v-model="formData.selectedSessions" :value="session.title">
          <label :for="'session-' + index">{{ session.title }}</label>
        </div>
      </div>
      <button type="submit" class="btn btn-primary" @click="submitForm">Submit</button>
    </form>
    <div v-if="success" class="success-message">
      We have received your application! Thank you for registering.
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        phone: '',
        selectedEvents: [],
        selectedSessions: []
      },
      events: [
        { title: "GenerationAI" },
        { title: "DevIX" },
        { title: "CyberTrain" },
        { title: "Revelation"}
      ],
      speakerSessions: [
        { title: "Alice Smith" },
        { title: "Bob Johnson" },
        { title: "Charlie Brown" },
        { title: "Diana Garcia"}
      ],
      success:false
    };
  },
  methods: {
    submitForm() {
      console.log('Form submitted:', this.formData);
      alert('Form submitted');
      axios.post('http://localhost:3000/attendees', this.formData)
      .then(() =>this.success=true)
    }
  }
};
</script>

<style scoped>
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css');
.registration-form {
  max-width: 600px;
  margin: 0 auto;
  margin-top:40px;
  margin-bottom: 40px;
  padding: 40px;
  background-color: #f0aff0;
  border-radius: 5px;
  display: flexbox;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: inline-flex;
  margin-right: 10px;
  
}

input[type="checkbox"] {
  margin-right: 5px;
}

</style>
