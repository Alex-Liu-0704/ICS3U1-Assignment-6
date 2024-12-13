<script setup>
import { RouterLink } from 'vue-router';
import { useStore } from '../store';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

function logOut() {
  router.push("/");
  store.$reset();
};
</script>

<template>
  <div class="header-container">
    <div class="navdiv">
      <div v-if="!store.email" class="logo">
        <RouterLink to="/">Cine<span class="highlight">Nime</span></RouterLink>
      </div>
      <div v-else class="logo">
        <RouterLink to="/">Cine<span class="highlight">Nime</span></RouterLink><span class="welcome-message">Welcome {{
          store.firstName }}</span>
      </div>
      <ul>
        <li>
          <RouterLink to="/" class="home-button">Home</RouterLink>
        </li>
        <!-- <li>
          <RouterLink to="/movies" class="trending-button">Trending</RouterLink>
        </li> -->
        <li>
          <RouterLink to="/movies" class="movies-button">Movies</RouterLink>
        </li>
        <!-- <li>
          <RouterLink to="/" class="contact-button">Contact</RouterLink>
        </li> -->
        <li v-if="!store.email">
          <RouterLink to="/register" class="button sign-up">SIGN UP</RouterLink>
          <RouterLink to="/login" class="button sign-in">SIGN IN</RouterLink>
        </li>
        <li v-else>
          <RouterLink to="/cart" class="button cart">CART</RouterLink>
          <RouterLink to="/settings" class="button settings">SETTINGS</RouterLink>
          <button @click="logOut()" class="button log-out">LOG OUT </button>
        </li>
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
  padding: 19px 25px;
  display: block;
}

.navdiv li a:hover {
  background-color: rgba(17, 14, 14, 0.7);
}

.navdiv .button {
  background-color: rgb(143, 0, 0);
  padding: 6.5px;
  border-radius: 30px;
  margin: 10.5px 0px;
  margin-left: 10px;
  width: 100px;
  border: 2px solid rgb(143, 0, 0);
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

.navdiv .log-out {
  margin-right: 20px;
  background-color: transparent;
}

.navdiv .log-out:hover {
  background-color: transparent;
}
</style>