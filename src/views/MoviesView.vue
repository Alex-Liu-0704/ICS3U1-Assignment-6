<script setup>
import Header from "../components/Header.vue";
import Genres from "../components/Genres.vue";
import Footer from "../components/Footer.vue";

const genresList = [
  {
    id: 28,
    genreName: 'Action'
  },
  {
    id: 16,
    genreName: 'Animation'
  },
  {
    id: 14,
    genreName: 'Fantasy'
  },
  {
    id: 36,
    genreName: 'History'
  },
  {
    id: 10752,
    genreName: 'War'
  }
];
</script>

<template>
  <Header />
  <Genres :genres="genresList" />
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