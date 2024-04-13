<template>
    <div >
     <div id="signup">
      <h1 >Sign Up</h1>
      <p><input type="text" placeholder="Email" v-model="email" /></p>
      <p><input type="password" placeholder="Password" v-model="password" /></p>
      <p><button @click="signup">Submit</button></p>
      <p><button @click="signInWithGoogle">Sign In With Google</button></p>
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
          .then((userCredential) => {
            console.log("Successfully signed up user");
            router.push("/events"); // Redirect to "/events" route after successful sign-up
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
body h1 { color: rgba(216, 123, 222, 0.918); text-decoration: none; margin-left: 20px; font-size: 2rem; font-family: "Urbanist", sans-serif; font-weight: 200; font-style: normal; }
body #signup { width: 65%; margin: 0 auto; }
</style>

  
  