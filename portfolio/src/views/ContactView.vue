<template>
  <div class="contact" style="background-color: #f5f5dc;">
    <h1 >Hi. Welcome to my page</h1>
    <form @submit.prevent="submitForm" class="needs-validation" novalidate>
      <div class="mb-5 sm-6" id ="ok">
        <label for="name" class="form-label" id="hi">Name:</label>
        <input type="text" class="form-control" id="name" v-model="cont.name">
      </div>
      <div class="mb-5 sm-6" id ="ok">
        <label for="email" class="form-label" id="hi">Email:</label>
        <input type="email" class="form-control" id="email" v-model="cont.email" required>
      </div>
      <div class="mb-3 sm-6" id ="ok">
        <label for="message" class="form-label" id="hi">Message:</label>
        <textarea class="form-control" id="message" v-model="cont.message" rows="4" required></textarea>
      </div>
      <button type="submit" class="btn btn-danger" id ="button">Submit</button>
    </form>
  </div>
</template>
<script>
/* eslint-disable */

export default {
  data() {
    return {
      cont: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    // eslint-disable-next-line
    submitForm() {
      console.log(this.cont);
      this.cont = {
        name: '',
        email: '',
        message: ''
      };
      console.warn('Hello!')
    }
  }
};
</script>

<style >
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css');
@import url('https://fonts.googleapis.com/css2?family=Libre+Caslon+Display&display=swap');
#ok{
  width:60%;
  margin: 0 auto;
}
body,h1{
  font-family: "Libre Caslon Display", serif;
}
#hi{
  font-family: "Libre Caslon Display", serif;
  font-size: 1.2rem;

}
#button{
  margin-bottom: 3rem;
}
</style>