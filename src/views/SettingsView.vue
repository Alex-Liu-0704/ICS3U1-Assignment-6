<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import { useStore } from '../store';
// import { ref, onMounted } from 'vue';

const store = useStore();
// const firstName = ref('');
// const lastName = ref('');
// console.log(store.firstName);
// console.log(store.lastName);
// console.log(store.email);

// onMounted(async () => {
//   firstName.value = store.firstName;
//   lastName.value = store.lastName;
// });

// const nameChanges = () => {
//   store.firstName = firstName.value;
//   store.lastName = lastName.value;
// };
</script>

<template>
  <Header />
  <div class="settings-container">
    <h1>Settings</h1>
    <p>First Name: <input type="text" v-model="store.firstName"></p>
    <p>Last Name: <input type="text" v-model="store.lastName"></p>
    <p>Email: {{ store.email }}</p>
  </div>
  <Footer />
</template>

<style scoped>
.header-container {
  position: relative;
  background-color: rgb(14, 14, 14);
}

.settings-container {
  height: 100vh;
}
</style>