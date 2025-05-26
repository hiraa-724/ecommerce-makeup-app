import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // item = { ...product, quantity }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existing = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   items: [],
// };

// export const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       console.log("Payload received in slice:", action.payload);
//       state.items.push(action.payload);
//     },

//     removeFromCart: (state, action) => {
//       // state.items.pop(action.payload)
//       state.items = state.items.filter((item) => item.id !== action.payload);
//     },
//     clearCart: (state) => {
//       state.items = [];
//     },
//   },
// });

// // Action creators are generated for each case reducer function
// export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

// export default cartSlice.reducer;
