import { create } from "zustand";
import { persist } from "zustand/middleware";

const counterStore = create((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));

// This will just toggle, but when we refresh the page it will return to it's default state.
// export const themeToggle = create((set) => ({
//   theme: "white",
//   dark: () => set({ theme: "dark" }),
//   light: () => set({ theme: "white" }),
//   toggle: () =>
//     set((state) => ({
//       theme: state.theme === "white" ? "dark" : "white",
//     })),
// }));

// This will save your theme in localStorage, so when you reload the page this will restore it's value automatically. For example, if you set the theme to light mode and when you refresh the webpage, it will automatically reset the theme to light mode. It store under the key "theme-storage".
export const useThemeStore = create(
  persist(
    (set) => ({
      theme: "white",

      dark: () => set({ theme: "dark" }),
      light: () => set({ theme: "white" }),
      toggle: () =>
        set((state) => ({
          theme: state.theme === "white" ? "dark" : "white",
        })),
    }),
    {
      name: "theme-storage", // key in localStorage
    }
  )
);

export const useValues = create((set) => ({
  name: "",
  email: "",
  setName: (newName) =>
    set({
      name: newName,
    }),
  setEmail: (newEmail) =>
    set({
      email: newEmail,
    }),
}));

export default counterStore;
