<template>
  <div>
    <div class="flex justify-evenly m-4">
      <button class="btn" @click="logOut">Sign Out</button>
    </div>
    <ItemForm></ItemForm>
    <ul>
      <li v-for="item in itemStore.items" :key="item.id">
        <ProductCard :item="item" />
      </li>
    </ul>
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
