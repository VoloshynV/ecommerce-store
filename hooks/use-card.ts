import toast from "react-hot-toast";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { Product } from "@/types";

interface CardStore {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

export const useCard = create(
  persist<CardStore>(
    (set, get) => ({
      items: [],
      addItem: (data) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
          return toast("Item already added to the cart");
        }
        set({ items: [...currentItems, data] });
        toast.success("Item added to the cart");
      },
      removeItem: (id) => {
        const currentItems = get().items;
        const newItems = currentItems.filter((item) => item.id !== id);
        set({ items: newItems });
        toast.success("Item removed from the cart");
      },
      removeAll: () => {
        set({ items: [] });
      },
    }),
    {
      name: "card-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
