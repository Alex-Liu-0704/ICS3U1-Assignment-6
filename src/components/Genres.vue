<script setup>
import axios from "axios";
import { ref, onMounted } from 'vue';
import { useRouter } from "vue-router";

const props = defineProps(["genres"]);
const router = useRouter();
const selectedGenre = ref(28);
const response = ref(null);

async function getMovieByGenre() {
  response.value = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=${selectedGenre.value}`);
};

function getMovieDetails(id) {
  router.push(`/movies/${id}`);
};

onMounted(async () => {
  response.value = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=${selectedGenre.value}`);
});
</script>

<template>
  <div class="movie-gallery">
    <h1 class="movie-section-title">Explore Movies by Genre</h1>
    <select v-model="selectedGenre" @change="getMovieByGenre">
      <option v-for="genre of genres" :value="genre.id">{{ genre.genreName }}</option>
    </select>
    <div v-if="response" class="movie-list">
      <div v-for="movie in response.data.results" :key="movie.id" class="movie-card" @click="getMovieDetails(movie.id)">
        <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="Movie Poster" class="movie-poster" />
        <p class="movie-title">{{ movie.title }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.movie-section-title {
  font-size: 40px;
  display: flex;
  justify-content: center;
  padding: 15px;
}

select {
  background-color: #333;
  color: white;
  padding: 10px;
  border: 2px solid #444;
  border-radius: 5px;
  font-size: 1rem;
  width: 100%;
  margin: 10px 0;
  box-sizing: border-box;
}

select:focus {
  border-color: #e50914;
  outline: none;
  margin-bottom: 150px;
  transition: margin 0.15s ease;
}

.movie-gallery {
  padding: 20px;
  color: white;
  background-color: #141414;
}

.movie-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.movie-card {
  background-color: #222;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.2s ease;
  width: 220px;
}

.movie-card:hover {
  transform: scale(1.01);
  opacity: 85%;
  border: 2px solid white
}

.movie-poster {
  width: 100%;
  height: auto;
}

.movie-title {
  padding: 10px;
  text-align: center;
  font-size: 1.1rem;
  color: white;
}
</style>