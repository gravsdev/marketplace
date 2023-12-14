import { create } from "zustand";

export const useAnimationStore = create((set) => ({
  menuVisible: false,
  activeLink: "link-one",

  setMenuVisible: () => set((state) => ({ menuVisible: !state.menuVisible })),
  setActiveLink: (id) => set(() => ({ activeLink: id })),
}));

export const useSlidingCards = create((set) => ({
  position: 0,
  cardNumber: 0,

  setSliderInc: () =>
    set((state) => ({
      position: state.position - 100,
      cardNumber: state.cardNumber + 1,
    })),
  setSliderDec: () =>
    set((state) => ({
      position: state.position + 100,
      cardNumber: state.cardNumber - 1,
    })),
}));
