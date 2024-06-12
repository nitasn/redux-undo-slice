import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const slice = createSlice({
  name: "age",
  initialState,
  reducers: {
    beOneYearOlder: (state) => {
      state.value = Math.floor(state.value) + 1;
    },
    growTinyFraction: (state) => {
      if (state.value === Math.round(state.value)) {
        state.value += 0.1;
      } else {
        state.value = Number(String(state.value) + "1");
      }
    },
  },
});

export const { beOneYearOlder, growTinyFraction } = slice.actions;

export default slice.reducer;
