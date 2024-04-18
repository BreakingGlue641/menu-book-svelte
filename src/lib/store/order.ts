import { derived, writable } from "svelte/store";

export const saladCounter = writable(0);
export const pizzaCounter = writable(0);
export const wineCounter = writable(0);
export const coffeeCounter = writable(0);

// #1
export const totalOrderCount = derived(
    [saladCounter, pizzaCounter, wineCounter, coffeeCounter],
    (c) => {
        return c[0] + c[1] + c[2] + c[3];
    }
);
