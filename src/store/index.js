import { configureStore, createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increment(state, action) {
      state.counter++;
    },
    decrement(state, action) {
      state.counter--;
    },
    addByTen(state, action) {
      state.counter += action.payload;
    },
    subByTen(state, action) {
      state.counter -= action.payload;
    },
    reset(state, action) {
      state.counter = 0;
    },
  },
});

export const actions = counterSlice.actions;
const store = configureStore({ reducer: counterSlice.reducer });
export default store;
