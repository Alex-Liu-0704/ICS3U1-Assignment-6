<!-- <script setup>
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();
const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_API_KEY}`);

function getMovieDetails(id) {
    router.push(`/movies/${id}`)
}
</script>

<template>
  <div class="movie-gallery">
    <h1>Now Playing</h1>
    <div class="movie-list">
      <div v-for="movie in response.data.results" :key="movie.id" class="movie-card" @click="getMovieDetails(movie.id)">
        <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="Movie Poster" class="movie-poster" />
        <p class="movie-title">{{ movie.title }}</p>
      </div>
    </div>
  </div>
</template> -->

<script setup>
import Header from "../components/Header.vue";
import Genres from "../components/Genres.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <Header />
  <Genres />
  <Footer />
</template>

<style scoped>
.header-container {
  position: relative;
  background-color: rgb(14, 14, 14);
}

.genres-container {
  background-color: rgb(14, 14, 14);
}
</style>