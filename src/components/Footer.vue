<template>
  <div class="footer-container">
    <div class="footer-top">
      <div class="footer-contact">
        <ul>
          <li>
            <h3>Contact Us</h3>
          </li>
          <li>
            <p>Email: cinenime@gmail.com</p>
          </li>
          <li>
            <p>Phone: 1-123-456-7890</p>
          </li>
          <li>
            <p>Address: 2621 Midland Ave, Scarborough</p>
          </li>
        </ul> 
      </div>
      <div class="footer-links">
        <ul>
          <li>
            <h3>Links</h3>
          </li>
          <li><a href="" class="home-button">Home</a></li>
          <li><a href="" class="about-button">About</a></li> 
          <li><a href="" class="trending-button">Trending</a></li> 
          <li><a href="" class="movies-button">Movies</a></li> 
          <li><a href="" class="contact-button">Contact</a></li> 
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 CineNime. All rights reserved</p>
    </div>
  </div>
</template>

<style scoped>
.footer-container {
  color: white;
  background-color: #141414;
  padding-top: 50px;
  height: 350px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

ul {
  list-style-type: none;
}

li {
  margin-top: 20px;
}

li a {
  color: white;
}

li a:hover {
  text-decoration: underline;
}

li p:hover {
  text-decoration: underline;
}

h3 {
  font-size: 20px;
  margin-bottom: 15px;
  text-align: left;
}

p {
  font-size: 15px;
}

.footer-top {
  display: flex;
  justify-content: center;
  gap: 200px;
}

.footer-contact,
.footer-links {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.footer-bottom {
  margin-top: auto;
  text-align: center;
  padding-bottom: 30px;
}
</style>