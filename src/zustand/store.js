import { create } from "zustand";

export const darkMode = create ((set)=> ({

    darkTheme: false,
    setDarkTheme: () => set((state) => ( {darkTheme: !state.darkTheme}))

}))

