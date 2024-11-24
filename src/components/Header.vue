<template>
    <header>
        <div class="navdiv">
            <div class="logo"><a href="index.html">Cine<span class="highlight">Nime</span></a></div>
            <ul> 
                <li><a href="index.html" class="home-button">Home</a></li>
                <li><a href="" class="about-button">About</a></li>
                <li><a href="" class="trending-button">Trending</a></li>
                <li><a href="" class="movies-button">Movies</a></li>
                <li><a href="" class="contact-button">Contact</a></li>
                <button class="sign-up"><a href="">SIGN UP</a></button>
                <button class="sign-in"><a href="">SIGN IN</a></button>
            </ul>
        </div>
    </header>
</template>

<style scoped>
header {
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
    /* text-decoration: underline 3.5px; */
}

.navdiv ul{
    overflow: hidden;
    list-style: none;
}

.navdiv li {
    float: left;
}

.navdiv li a {
    color: white;
    font-size: 15px;
    /* font-weight: bold; */
    padding: 19px 25px; /* hard code this value during media queries */
    display: block;
}

.navdiv li a:hover {
    background-color: rgba(17, 14, 14, 0.7);
}

.navdiv button {
    background-color: rgb(143, 0, 0);
    padding: 8px;
    border-radius: 30px;
    margin: 10.5px 0px; /* hard code this value during media queries */
    margin-left: 10px;
    width: 100px;
    border-style: solid;
    border-color:white;
    border-width: 1px;
    transition: transform 0.3s ease;
}

.navdiv button a {
    color: white;
    /* font-weight: bold; */
    font-size: 15px;
}

.navdiv .sign-in {
    margin-right: 20px;
}

.navdiv button:hover {
    background-color: rgb(97, 0, 0);
    transform: scale(1.05); 
}
</style>