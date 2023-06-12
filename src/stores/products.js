import create from "zustand";

export const UseProductsStore = create((set) => ({
  products: [],
  setProducts: (payload) => set((state) => ({ products: payload })),
  isLoading: false,
  setLoading: (payload) => set((state) => ({ isLoading: payload })),
  visibleProducts: 20,
  loadMoreProducts: () => set((state) => ({ visibleProducts: state.visibleProducts + 20 })),
}));
