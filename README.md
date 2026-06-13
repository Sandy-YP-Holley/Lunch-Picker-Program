# Lunch Picker Program 🧺

A comprehensive JavaScript menu management application that leverages array manipulation techniques to dynamically add, remove, randomly select, and display lunch options.

---

## 🧭 Project Architecture

The program manages a `lunches` data state through specialized functional utilities, strictly enforcing error-handling for empty states.

1. **`addLunchToEnd` / `addLunchToStart`:** Appends new dishes using `.push()` and `.unshift()`.
2. **`removeLastLunch` / `removeFirstLunch`:** Safely removes and logs elements using `.pop()` and `.shift()` only if the menu contains items.
3. **`getRandomLunch`:** Uses `Math.random()` and `Math.floor()` to compute a random index and select a lunch option.
4. **`showLunchMenu`:** Evaluates the state and formats array items into a clean, comma-separated string using `.join(", ")`.

---
