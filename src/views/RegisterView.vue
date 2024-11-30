<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
  <Header />
  <div class="register-container">
    <div class="form-container">
      <h2>Create an Account</h2>
      <form>
        <input type="text" placeholder="First Name" class="input-field" required>
        <input type="text" placeholder="Last Name" class="input-field" required>
        <input type="email" placeholder="Email" class="input-field" required>
        <input type="password" placeholder="Password" class="input-field" required>
        <input type="password" placeholder="Re-enter Password" class="input-field" required>
        <button type="submit" class="button register">Register</button>
      </form>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
.register-container {
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

.register {
  background-color: rgb(143, 0, 0);
  border: 2px solid rgb(143, 0, 0);
  color: white;
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  margin-bottom: 20px;
  margin-top: 10px;
  transition: transform 0.2s ease
}

.register:hover {
  transform: scale(1.02)
}
</style>