import { defineStore } from 'pinia';

export const useItemStore = defineStore('itemStore', {
  state: () => ({
    items: [],
  }),
  getters: {},
  actions: {
    async getItemsFromServer() {
      const client = useSupabaseClient();
      const { data } = await client.from('items').select();
      this.items = data;
    },
  },
});
