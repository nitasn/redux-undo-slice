import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const slice = createSlice({
  name: "age",
  initialState,
  reducers: {
    beOneYearOlder: (state) => {
      state.value += 1;
    },
    noop: () => {},
  },
});

export const { beOneYearOlder, noop } = slice.actions;

export default slice.reducer;
