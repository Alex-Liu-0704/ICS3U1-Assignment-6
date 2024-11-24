<template>
    <section>
        <div class="featured-title">Featured Movies</div>
        <div class="movie-container">
            <div class="movie-item">
                <img src="/src/assets/movie poster 1.jpg" alt="movie1">
                <p>Captain America: Civil War</p>
                <p2>(2016)</p2>
            </div>
            <div class="movie-item">
                <img src="/src/assets/movie poster 2.jpg" alt="movie2">
                <p>Transformers One</p>
                <p2>(2024)</p2>
            </div>
            <div class="movie-item">
                <img src="/src/assets/movie poster 3.png" alt="movie3">
                <p>Spy x Family Code: White</p>
                <p2>(2023)</p2>
            </div>
            <div class="movie-item">
                <img src="/src/assets/movie poster 4.jpg" alt="movie4">
                <p>Kung Fu Panda 4</p>
                <p2>(2024)</p2>
            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    position: relative;
    padding: 100px 0px 150px 0px;
    text-align: center;
    color: white;
}

.featured-title {
    font-size: 36px;
    padding: 40px;
    font-weight: bold;
}

.movie-container {
    display: flex;
    align-items: stretch;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 5px;
    padding: 0 5px;
}

.movie-item {
    text-align: center;
    color: white;
}

.movie-item img {
    width: 300px;
    height: 450px;
    border-radius: 10px;
    margin-top: 20px;
    transition: transform 0.3s ease;
}

.movie-item img:hover { 
    transform: scale(1.05);
    opacity: 0.85;
}

.movie-item p {
    padding: 20px;
    padding-bottom: 0px;
    font-size: 18px;
}

.movie-item p2 {
    padding: 10px;
    padding-top: 0px;
    font-size: 18px;
}
</style>