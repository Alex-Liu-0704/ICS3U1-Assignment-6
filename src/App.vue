<!-- <script setup>
// make all of this in homepage view instead
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import Feature from "./components/Feature.vue";
import Footer from "./components/Footer.vue";
import { RouterView } from 'vue-router';
</script>

<template>
    <Header />
    <Hero />
    <Feature />
    <Footer />
</template>

<style scoped>
* {
    background-color: rgb(14, 14, 14);
    color: #ffffff;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin: 0;
    padding: 0;
    height: 100%;
}
</style> -->

<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <Suspense>
    <RouterView />
  </Suspense>
</template>

<style scoped>
</style>
