import {create} from "zustand"

export const storeCounter = create((set) => ({
    number: 0,
    increase: () => set((state) => ({ number: state.number + 1 })),
    decrease: () => set((state) => ({ number: state.number - 1 })),
}))