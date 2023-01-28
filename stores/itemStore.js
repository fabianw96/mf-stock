import { defineStore } from 'pinia';

export const useItemStore = defineStore('itemStore', {
  state: () => ({
    items: [],
  }),
  getters: {},
  actions: {
    async getItemsFromServer() {
      const client = useSupabaseClient();

      const { data } = await useAsyncData('items', async () => {
        const { data } = await client.from('items').select();
        return { data };
      });
      console.log(data);

      this.items = data;
    },
  },
});
