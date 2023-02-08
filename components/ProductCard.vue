<template>
  <div class="card text-white p-8 mx-64 my-10">
    <div class="grid grid-cols-4 grid-rows-none">
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
      <div class="self-center text-right float-right">
        <span>{{ item.quantity * item.price }} Euro</span>
      </div>
      <div class="self-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="float-right cursor-pointer hover:text-red-500 transition-all duration-500"
          @click="itemStore.deleteItem(item)"
        >
          <path d="M3 6h18"></path>
          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
          <line x1="10" y1="11" x2="10" y2="17"></line>
          <line x1="14" y1="11" x2="14" y2="17"></line>
        </svg>
      </div>
      <!-- delete button -->
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
