import { defineStore } from 'pinia';

export const useItemStore = defineStore('itemStore', {
  state: () => ({
    items: [],
  }),
  getters: {},
  actions: {},
});
