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
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
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
        ]
      };
    },
    methods: {
      submitForm() {
        console.log('Form submitted:', this.formData);
      }
    }
  };
  </script>
  
  <style scoped>
  .registration-form {
    max-width: 600px;
    margin: 0 auto;
    padding: 40px;
    background-color: #f9f9f9;
    border-radius: 5px;
    display: flexbox;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: inline-block;
    margin-right: 10px;
  }
  
  input[type="checkbox"] {
    margin-right: 5px;
  }
  
  </style>
  