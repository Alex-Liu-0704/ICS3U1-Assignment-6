<script setup>
import axios from "axios";
import { useRouter } from "vue-router";
import { ref } from "vue";

let genres = [
    { genre: 'Action', id: 28 },
    { genre: 'Animation', id: 16 },
    { genre: 'Fantasy', id: 14 },
    { genre: 'History', id: 36 },
    { genre: 'War', id: 10752 }
];

const chosenGenre = ref(null);
const moviesOnDisplay = ref([]);
const router = useRouter();

async function fetchMovies() {
    if (chosenGenre.value) {
        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=${chosenGenre.value}`);
        moviesOnDisplay.value = response.data.results.slice(0, 9);
    }
}

function getMovieDetails(id) {
    router.push(`/movies/${id}`);
}
</script>

<template>
    <div class="genres-container">
        <div class="genres-heading">
            <p>Filter movies by genre</p>
        </div>
        <div class="">
            
        </div>
    </div>
</template>

<style scoped>
</style>