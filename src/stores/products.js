import create from "zustand";

export const useProductsStore = create((set) => ({
  isLoading: false,
  setLoading: (payload) => set((state) => ({ isLoading: payload })),
  visibleItems: 20,
  loadMoreItems: () => set((state) => ({ visibleItems: state.visibleItems + 20 })),
}));
