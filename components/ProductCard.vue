<template>
  <div class="card text-white p-8 mx-64 my-10">
    <div class="flex justify-around">
      <a
        :href="item.uri"
        class="hover:text-primary hover:underline transition-all duration-500"
        >{{ item.name }}</a
      >
      <button @click="itemStore.increaseQuantity(item)">+</button>
      <p>{{ item.quantity }}</p>
      <button @click="">-</button>
      <span>{{ item.quantity * item.price }} Euro</span>
    </div>
  </div>
</template>

<script setup>
import { useItemStore } from '~~/stores/itemStore';

const itemStore = useItemStore();
const { item } = defineProps(['item']);
</script>

<style scoped>
.card {
  border-radius: 100px;
  background: #111827;
  box-shadow: -40px 40px 80px #0e131f, 40px -40px 80px #141d2f;
}
</style>
