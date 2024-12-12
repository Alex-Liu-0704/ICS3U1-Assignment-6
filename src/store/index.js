import { ref } from "vue"
import { defineStore } from "pinia";

export const useStore = defineStore('store', () => {
  const firstName = ref('');
  const lastName = ref('');
  const email = ref('');
  const password = ref('');
  const cart = ref(new Map());

  function $reset() {
    firstName.value = '';
    lastName.value = '';
    email.value = '';
    password.value = '';
    cart.value = new Map();
  };

  return { firstName, lastName, email, password, cart, $reset }
})