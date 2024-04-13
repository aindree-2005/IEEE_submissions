<template>
    <div>
      <div id="signup-container">
        <h1>Sign Up</h1>
        <div id="signup-form">
          <p><input type="text" placeholder="Email" v-model="email" /></p>
          <p><input type="password" placeholder="Password" v-model="password" /></p>
          <p><button @click="signup">Submit</button></p>
          <p><button @click="signInWithGoogle">Sign In With Google</button></p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  /* eslint-disable */
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  
  export default {
    setup() {
      const email = ref("");
      const password = ref("");
      const router = useRouter();
  
      const signup = () => {
        createUserWithEmailAndPassword(getAuth(), email.value, password.value)
          .then(() => {
            console.log("Successfully signed up user");
            router.push("/events");
          })
          .catch((error) => {
            console.log(error.code);
            alert(error.message);
          });
      };
  
      const signInWithGoogle = () => {
        // Implement sign-in with Google logic here
      };
  
      return {
        email,
        password,
        signup,
        signInWithGoogle
      };
    }
  };
  </script>
  
  <style scoped>
  
  #signup-container {
    background-color: #783083;
    padding: 20px;
    border-radius: 10px;
    width: 65%;
    margin: 0 auto;
    margin-top:70px;
    margin-bottom:70px;
  }
  
  #signup-form {
    color: #783083;
  }
  
  #signup-form input[type="text"],
  #signup-form input[type="password"] {
    width: 50%;
    padding: 10px;
    margin-bottom: 10px;
    
  }
  
  #signup-form button {
    padding: 10px 20px;
    background-color: #fefcff;
    color: rgb(63, 6, 58);
    border: none;
    border-radius: 5px;
    font-family: "Urbanist", sans-serif;
    font-weight: 200;
    cursor: pointer;
  }
  
  #signup-form button:hover {
    background-color: rgb(63, 6, 58);
  }
  h1{font-size:2rem;
    font-family: "Urbanist", sans-serif;
    font-weight: 400;
    color: white;}
  </style>
  