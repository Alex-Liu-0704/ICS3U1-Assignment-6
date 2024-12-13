<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import { useStore } from '../store';
import { ref } from 'vue';

const store = useStore();

const firstName = ref(store.firstName ? store.firstName : '');
const lastName = ref(store.lastName ? store.lastName : '');

const saveChanges = () => {
  store.firstName = firstName.value;
  store.lastName = lastName.value;
  alert('Changed saved!');
};
</script>

<template>
  <Header />
  <div class="settings-container">
    <h1>Settings</h1>
    <div class="user-info">
      <label for="firstName">Change First Name:</label>
      <input v-model="firstName" type="text" placeholder="First Name" class="input-field" />
      <label for="lastName">Change Last Name:</label>
      <input v-model="lastName" type="text" placeholder="Last Name" class="input-field" />
      <label for="email">Email:</label>
      <input type="email" v-model="store.email" readonly placeholder="Email" class="input-field" />
      <button @click="saveChanges()" class="button login">Save Changes</button>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
/* .header-container {
  position: relative;
  background-color: rgb(14, 14, 14);
} */

.settings-container {
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

h1 {
  padding: 30px;
}

.user-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;
}
</style>