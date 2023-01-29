<template>
  <div class="m-3 p-2 flex justify-center align-middle">
    <div>
      <NuxtLink to="/" class="homebtn">Home</NuxtLink>
    </div>
  </div>
  <div>
    <slot />
  </div>
</template>

<script setup>
import { useItemStore } from '~~/stores/itemStore';

const itemStore = useItemStore();
itemStore.getItemsFromServer();
</script>

<style scoped>
.homebtn {
  font-size: 18px;
  color: #e1e1e1;
  font-family: inherit;
  font-weight: 800;
  cursor: pointer;
  position: relative;
  border: none;
  background: none;
  text-transform: uppercase;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 400ms;
  transition-property: color;
}

.homebtn:focus,
.homebtn:hover {
  color: #fff;
}

.homebtn:focus:after,
.homebtn:hover:after {
  width: 100%;
  left: 0%;
}

.homebtn:after {
  content: '';
  pointer-events: none;
  bottom: -2px;
  left: 50%;
  position: absolute;
  width: 0%;
  height: 2px;
  background-color: #fff;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 400ms;
  transition-property: width, left;
}
</style>
