<template>
  <div class="card text-white p-8 mx-64 my-10">
    <div class="grid grid-cols-3 grid-rows-none">
      <a
        :href="item.uri"
        class="hover:text-primary hover:underline transition-all duration-500"
        >{{ item.name }}</a
      >
      <div class="flex justify-center gap-4">
        <button @click="itemStore.increaseQuantity(item)">+</button>
        <p class="self-center">{{ item.quantity }}</p>
        <button @click="itemStore.decreaseQuantity(item)">-</button>
      </div>
      <span class="self-center text-right"
        >{{ item.quantity * item.price }} Euro</span
      >
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
  overflow: hidden;
}
</style>
