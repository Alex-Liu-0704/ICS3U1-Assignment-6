<script setup>
import { RouterLink } from 'vue-router';
</script>
  
  <template>
  <div class="hero-container">
    <div class="slogan">
        <h1>World-class streaming website for <span class="highlight">Movies, Anime, & so much more</span></h1>
    </div>
    <div class="hero-sign-up">
      <form>
        <label for="email">Interested in accessing our diverse database? Become a member now.</label><br>
        <input type="email" name="email" placeholder="Email address" required>
        <RouterLink to="/register" class="button register">Get Started   ></RouterLink>
      </form>
    </div>
  </div>
  </template>

<style scoped>
.hero-container {
  position: relative;
  top: 0;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 1),rgba(0, 0, 0, 0.65),rgba(0, 0, 0, 1)), url("/src/assets/hero.avif");
  background-attachment: fixed;
  background-size: cover; 
  background-position: center;  
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1; 
  padding: 60px;
  box-sizing: border-box;
}

.highlight {
  color: rgb(143, 0, 0);
  text-shadow: 1px 1px 1px white, -1px -1px 1px white, 1px -1px 1px white, -1px 1px 1px white;
}

.slogan {
  width: 100%;   
  max-width: 1000px;
  color: white;
  padding-bottom: 20px;
  font-size: 25px;
  text-align: center;
}

.hero-sign-up{
  text-align: center;
}

.hero-sign-up form {
  align-items: center;
  justify-content: center;
  max-width: 682px;
  margin: 0 auto;
  padding: 10px 20px;
}

.hero-sign-up label {
  color: white;
  font-size: 18px;
  padding-bottom: 7px;
  display: block;
}

.hero-sign-up input[type="email"] {
  color:#ccc;
  background-color: rgba(31, 31, 31, 0.63);
  width: 100%;
  max-width: 400px;
  padding: 15px;
  font-size: 16px;
  border: 2px solid #444;
  border-radius: 5px;
  margin-right: 5px;
}

.button {
  display: inline-block;
  color:#ffffff;
  background-color: rgb(143, 0, 0);
  padding: 15px;
  font-size: 16px;
  border: 2px solid rgb(143, 0, 0);
  border-radius: 5px;
  transition: transform 0.3s ease;
}

.button:hover {
  background-color: rgb(97, 0, 0);
  transform: scale(1.03);
}
</style>
