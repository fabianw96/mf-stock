<template>
  <form @submit.prevent="parseItem">
    <div class="flex justify-around rounded-md">
      <label class="text-white self-center" for="name">Name</label>
      <input
        type="text"
        id="name"
        v-model="name"
        placeholder="Enter name"
        required
      />
      <label class="text-white self-center" for="price">Price</label>
      <input
        type="text"
        id="price"
        v-model="price"
        placeholder="Enter price"
        required
      />
      <label class="text-white self-center" for="quantity">Quantity</label>
      <input
        type="number"
        id="quantity"
        v-model="quantity"
        placeholder="Enter quantity"
        required
      />
      <label class="text-white self-center" for="uri">URI</label>
      <input
        type="text"
        id="uri"
        v-model="uri"
        placeholder="Enter uri"
        required
      />
    </div>
    <div class="flex justify-center m-4">
      <button class="btn" type="submit">Add Item</button>
    </div>
  </form>
</template>

<script setup>
import { useItemStore } from '~~/stores/itemStore.js';
const newItem = ref({});
const name = ref('');
const price = ref('');
const quantity = ref();
const uri = ref('');

const itemStore = useItemStore();

const parseItem = () => {
  newItem.value = {
    name: name.value,
    price: price.value,
    quantity: quantity.value,
    uri: uri.value,
  };
  itemStore.items.push(newItem.value);
  itemStore.addItem(newItem.value);
};
</script>

<style scoped></style>
