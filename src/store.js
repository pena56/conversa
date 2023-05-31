import { create } from "zustand";

export const useStore = create(() => ({
  currentUser: undefined,
}));
