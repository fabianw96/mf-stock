<template>
  <div>
    <div v-for="item in itemStore.items">
      {{ item.name }}
    </div>
    <button @click="logOut">Sign Out</button>
  </div>
</template>

<script setup>
import { useItemStore } from '~~/stores/itemStore.js';
definePageMeta({
  middleware: 'auth',
});

const itemStore = useItemStore();

const client = useSupabaseAuthClient();
const router = useRouter();
const user = useSupabaseUser();
const loading = ref(false);
const newItem = ref('');

const logOut = () => {
  client.auth.signOut();
  router.push('/');
};
</script>

<style scoped></style>
