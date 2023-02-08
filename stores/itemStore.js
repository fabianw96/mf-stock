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
      // console.log(data);
    },
    async addItem(itemData) {
      const client = useSupabaseClient();
      const { error } = await client.from('items').insert(itemData);
      if (error) {
        console.log(error);
      }
    },
    async increaseQuantity(item) {
      const client = useSupabaseClient();

      const { data, error } = await client
        .from('items')
        .update({ quantity: item.quantity + 1 })
        .eq('id', item.id)
        .select();

      this.items = this.items.map((i) => {
        if (i.id === item.id) {
          i.quantity++;
        }
        return i;
      });

      if (error) {
        console.log(error);
      }
    },
    async decreaseQuantity(item) {
      const client = useSupabaseClient();

      const { data, error } = await client
        .from('items')
        .update({ quantity: item.quantity - 1 })
        .eq('id', item.id)
        .select();

      this.items = this.items.map((i) => {
        if (i.id === item.id) {
          i.quantity--;
        }
        return i;
      });

      if (error) {
        console.log(error);
      }
    },
    async deleteItem(item) {
      const client = useSupabaseClient();

      await client.from('items').delete().eq('id', item.id);

      this.items = this.items.filter((i) => i.id !== item.id);
    },
  },
});
