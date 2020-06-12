import { createSlice } from "@reduxjs/toolkit";

export const fridge = createSlice({
  name: "fridge",
  initialState: {
    items: [
      { id: 1, name: "Milk", needsMore: false, category: "drink", quantity: 1 },
      { id: 2, name: "Butter", needsMore: true, category: "food", quantity: 3 },
      {
        id: 3,
        name: "Cheese",
        needsMore: false,
        category: "food",
        quantity: 5,
      },
    ],
  },
  reducers: {
    addItem: (state, action) => {
      const { name, category, quantity } = action.payload;
      state.items.push({
        id: Date.now(),
        name,
        category,
        quantity,
        // when item was added
        startDate: Date.now(),
      });
    },
    removeItem: (state, action) => {
      // find item remove from the items array
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    removeAll: (state, action) => {
      state.items = [];
    },
    toggleNeedsMore: (state, action) => {
      console.log(action.payload);
      const foundItem = state.items.find((item) => item.id === action.payload);

      // toggle the value of needsMore
      if (foundItem) {
        foundItem.needsMore = !foundItem.needsMore;
      }
    },
  },
});
