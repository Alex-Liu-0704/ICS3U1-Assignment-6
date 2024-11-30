<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const props = defineProps({ movieId: { type: Number, required: true } });
const response = ref(null);
const backgroundImage = ref("")

onMounted(async () => {
  response.value = await axios.get(`https://api.themoviedb.org/3/movie/${props.movieId}?api_key=${import.meta.env.VITE_API_KEY}&append_to_response=videos`);
  backgroundImage.value = `https://image.tmdb.org/t/p/w1280${response.value.data.backdrop_path}`; //change to original pixel size only if it works on school desktop
});
</script>

<template>
  <div v-if="response" class="details-container">
    <div class="movie-background" :style="{ backgroundImage: `url(${backgroundImage})` }">
      <div class="movie-info">
        <img :src="`https://image.tmdb.org/t/p/w500${response.data.poster_path}`" alt="Movie Poster" class="movie-poster" />
        <div class="movie-text">
          <h1 class="movie-title">{{ response.data.original_title }}</h1>
          <p class="movie-overview">{{ response.data.overview }}</p>
          <p class="movie-release-date">Release Date: {{ response.data.release_date }}</p>
          <!-- <p class=""> {{ response.data. }}></p> -->
          <a class="movie-site" :href="response.data.homepage" target="_blank">Official Movie Site</a>
        </div>
      </div>
    </div>

    <h2 class="trailers-title">Trailers</h2>
    <div class="trailers-container">
      <div v-for="trailer in response.data.videos.results" :key="trailer.id" class="trailer-tile">
        <a :href="`https://www.youtube.com/watch?v=${trailer.key}`" target="_blank">
          <img :src="`https://img.youtube.com/vi/${trailer.key}/hqdefault.jpg`" alt="Trailer"
            class="trailer-thumbnail" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.details-container {
  background-color: #141414;
  color: white;
}

.movie-background {
  position: relative;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}

.movie-background::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 0;
}

.movie-info {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}



.trailers-title {
  font-size: 2rem;
  margin-top: 40px;
  margin-bottom: 20px;
  text-align: center;
}

.trailers-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  /* Space between trailer tiles */
}

.trailer-tile {
  background-color: #222;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.2s;
  width: 200px;
  /* Fixed width for trailer tiles */
}

.trailer-tile:hover {
  transform: scale(1.05);
  /* Scale effect on hover */
}

.trailer-thumbnail {
  width: 100%;
  /* Full width of the tile */
  height: auto;
  /* Maintain aspect ratio */
}
</style>