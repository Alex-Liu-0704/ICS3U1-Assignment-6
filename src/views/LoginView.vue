<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import { RouterLink, useRouter } from 'vue-router';
import { ref } from 'vue';
import { useStore } from "../store"

const store = useStore();
const router = useRouter();
const email = ref('');
const password = ref('');

const handleLogin = () => {
  if (password.value === "password") {
    store.email = email.value;
    router.push("/movies");
  } else {
    alert("Invalid Password");
  }
};
</script>

<template>
  <Header />
  <div class="login-container">
    <div class="form-container">
      <h2>Login to Your Account</h2>
      <form @submit.prevent="handleLogin()">
        <input type="email" placeholder="Email" class="input-field" required />
        <input v-model:="password" type="password" placeholder="Password" class="input-field" required />
        <button type="submit" class="button login">Login</button>
      </form>
      <p>Don't have an account? Register now!</p>
      <RouterLink to="/register" class="button register">Register</RouterLink>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
.login-container {
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 1)), url("/src/assets/hero.avif");
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  padding: 60px;
  box-sizing: border-box;
}

.form-container {
  background-color: rgba(0, 0, 0, 0.8);
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vw;
}

h2 {
  color: white;
  font-size: 35px;
  margin-bottom: 20px;
}

.input-field {
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  background-color: #333;
  border: 2px solid #444;
  border-radius: 5px;
  color: white;
  font-size: 16px;
}

.button {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  margin-bottom: 20px;
}

.login {
  background-color: rgb(143, 0, 0);
  border: 2px solid rgb(143, 0, 0);
  color: white;
  margin-top: 15px;
  transition: transform 0.2s ease;
}

.login:hover {
  transform: scale(1.02)
}

p {
  color: white;
  padding: 15px;
  font-size: 20px;
}

.register {
  display: block;
  text-align: center;
  font-size: 18px;
  padding: 12px;
  background-color: #333;
  color: white;
  border: 2px solid #444;
  border-radius: 5px;
  transition: transform 0.15s ease;
  max-width: 553.42px;
}

.register:hover {
  background-color: rgb(97, 0, 0);
  border: 2px solid rgb(150, 0, 0);
  transform: scale(1.02)
}
</style>