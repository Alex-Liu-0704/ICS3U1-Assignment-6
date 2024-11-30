<script setup>
import { RouterLink } from 'vue-router';
import { useRouter } from "vue-router";

const router = useRouter();

function navigateToHome() {
  router.push('/')
};
</script>

<template>
  <div class="header-container">
    <div class="navdiv">
      <div class="logo">
        <a @click="navigateToHome">Cine<span class="highlight">Nime</span></a>
      </div>
      <ul>
        <li><a href="" class="home-button">Home</a></li>
        <li><a href="" class="about-button">About</a></li>
        <li><a href="" class="trending-button">Trending</a></li>
        <li><a href="" class="movies-button">Movies</a></li>
        <li><a href="" class="contact-button">Contact</a></li>
        <RouterLink to="/register" class="button sign-up">SIGN UP</RouterLink>
        <RouterLink to="/login" class="button sign-in">SIGN IN</RouterLink>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.header-container {
  z-index: 4;
  position: absolute;
  left: 0;
  right: 0;
  background: none;
  height: 56px;
}

.navdiv {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(34, 31, 31, 0.7);
}

.logo a {
  font-size: 25px;
  font-weight: 700;
  color: white;
  margin-left: 20px;
}

.highlight {
  color: rgb(143, 0, 0);
  text-shadow: 1px 1px 1px white, -1px -1px 1px white, 1px -1px 1px white, -1px 1px 1px white;
  /* text-decoration: underline 3.5px; */
}

.navdiv ul {
  overflow: hidden;
  list-style: none;
}

.navdiv li {
  float: left;
}

.navdiv li a {
  color: white;
  font-size: 15px;
  /* font-weight: bold; */
  padding: 19px 25px;
  /* hard code this value during media queries */
  display: block;
}

.navdiv li a:hover {
  background-color: rgba(17, 14, 14, 0.7);
}

.navdiv .button {
  background-color: rgb(143, 0, 0);
  padding: 8px;
  border-radius: 30px;
  margin: 10.5px 0px;
  /* hard code this value during media queries */
  margin-left: 10px;
  width: 100px;
  border: 1px solid rgb(143, 0, 0);
  transition: transform 0.3s ease;
  display: inline-flex;
  color: white;
  font-size: 15px;
  justify-content: center;
  align-items: center;
}

.navdiv .button:hover {
  background-color: rgb(97, 0, 0);
  transform: scale(1.05);
}

.navdiv .sign-in {
  margin-right: 20px;
}

.navdiv .sign-up {
  margin-right: 5px;
}
</style>