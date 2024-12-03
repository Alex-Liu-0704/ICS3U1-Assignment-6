<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const props = defineProps({ movieId: { type: Number, required: true } });
const response = ref(null);
const backgroundImage = ref("");

onMounted(async () => {
  response.value = await axios.get(`https://api.themoviedb.org/3/movie/${props.movieId}?api_key=${import.meta.env.VITE_API_KEY}&append_to_response=videos`);
  backgroundImage.value = `https://image.tmdb.org/t/p/w1280${response.value.data.backdrop_path}`; //change to original pixel size only if it works on school desktop
});
</script>

<template>
  <div v-if="response" class="details-container">
    <div class="movie-background" :style="{ backgroundImage: `url(${backgroundImage})` }">
      <div class="movie-info">
        <div class="left-info">
          <img :src="`https://image.tmdb.org/t/p/w500${response.data.poster_path}`" alt="Movie Poster"
            class="movie-poster" />
        </div>
        <div class="right-info">
          <h1 class="movie-title">{{ response.data.original_title }}</h1>
          <p class="movie-tagline"> "{{ response.data.tagline }}"</p>
          <p class="movie-release-date">Release Date: {{ response.data.release_date }}</p>
          <p class="movie-origin-country">Origin Country: {{ response.data.origin_country[0] }}</p>
          <p class="movie-runtime"> {{ response.data.runtime }} minutes</p>
          <p class="movie-average"> TMDB Rating: {{ response.data.vote_average }}/10</p>
          <a class="movie-site" :href="response.data.homepage" target="_blank">Official Movie Site</a>
          <p class="movie-overview">{{ response.data.overview }}</p>
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
  background-color: rgba(0, 0, 0, 0.85);
  z-index: 0;
}

.movie-info {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 750px;
  padding: 0 100px;
}

.movie-poster {
  width: 300px;
  border-radius: 10px;
}

.right-info {
  padding-left: 50px;
}

.movie-title {
  padding-bottom: 10px;
}

.movie-release-date,
.movie-origin-country,
.movie-runtime,
.movie-average {
  font-size: 14px;
  padding: 10px 0;
}

.movie-tagline {
  font-size: 17px;
  padding-top: 0px;
  padding-bottom: 20px;
}

.movie-site {
  display: block;
  width: 177px;
  margin-top: 12px;
  margin-bottom: 12px;
  padding: 15px;
  background-color: rgb(143, 0, 0);
  border: 1px solid rgb(143, 0, 0);
  color: white;
  border-radius: 5px;
  transition: transform 0.2s ease
}

.movie-overview {
  font-size: 17px;
  padding: 10px 0;
}

.movie-site:hover {
  background-color: rgb(97, 0, 0);
  transform: scale(1.02);
}

.trailers-title {
  font-size: 2rem;
  margin-top: 40px;
  margin-bottom: 30px;
  text-align: center;
}

.trailers-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  padding: 0 50px;
}

.trailer-tile {
  background-color: #222;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.2s;
  width: 200px;
}

.trailer-tile:hover {
  transform: scale(1.05);
  opacity: 85%;
}

.trailer-thumbnail {
  width: 100%;
  height: auto;
}
</style>