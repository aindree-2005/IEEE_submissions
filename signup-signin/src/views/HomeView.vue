<template>
  <div class="home">
    <SignUp />
  </div>
</template>

<script>
import SignUp from '@/components/SignUp.vue';

export default {
  name: 'HomeView',
  components: {
    SignUp
  }
}
</script>
<style>
      body {
        background-color:#1b021a;
      }
</style>
