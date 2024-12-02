<script setup>
import axios from "axios";
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";

const router = useRouter();
const response = ref(null)

// copied from google to shuffle and array and get different movies each refresh //
function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

onMounted(async () => {
  response.value = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_API_KEY}`);
  shuffle(response.value.data.results)
})

function getMovieDetails(id) {
  router.push(`/movies/${id}`)
}
</script>

<template>
  <div class=featured-container v-if="response">
    <div class="featured-title">Featured Movies</div>
    <div class="movie-list">
      <div v-for="movie in response.data.results.slice(0, 4)" :key="movie.id" class="movie-card"
        @click="getMovieDetails(movie.id)">
        <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="Movie Poster" class="movie-poster" />
        <p class="movie-title">{{ movie.title }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.featured-container {
  position: relative;
  padding: 100px 0px 150px 0px;
  text-align: center;
  color: white;
  background-color: #141414;
}

.featured-title {
  font-size: 36px;
  padding: 40px;
  font-weight: bold;
}

.movie-list {
  display: flex;
  align-items: stretch;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 5px;
  padding: 0 5px;
}

img {
  text-align: center;
  color: white;
  width: 300px;
  height: 450px;
  border-radius: 10px;
  margin-top: 20px;
  transition: transform 0.3s ease;
}

img:hover {
  transform: scale(1.02);
  opacity: 0.85;
  border: 2px solid white
}

.movie-title {
  padding: 20px;
  padding-bottom: 0px;
  font-size: 18px;
  max-width: 300px;
}
</style>
