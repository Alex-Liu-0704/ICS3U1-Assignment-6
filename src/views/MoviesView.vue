<script setup>
import Header from "../components/Header.vue";
import Genres from "../components/Genres.vue";
import Footer from "../components/Footer.vue";

const genresList = [
  { genreName: 'Action', id: 28 },
  { genreName: 'Animation', id: 16 },
  { genreName: 'Fantasy', id: 14 },
  { genreName: 'History', id: 36 },
  { genreName: 'War', id: 10752 }
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