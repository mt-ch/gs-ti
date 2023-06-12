import create from "zustand";

export const useProductStore = create((set) => ({
  isLoading: false,
  setLoading: (payload) => set((state) => ({ isLoading: payload })),
  selectedSize: null,
  setSelectedSize: (payload) => set((state) => ({ selectedSize: payload })),
}));
