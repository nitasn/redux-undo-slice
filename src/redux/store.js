import { configureStore } from "@reduxjs/toolkit";
import age from "./slices/age";
import counter from "./slices/counter";
import { withUndo } from "./undo";
import { growTinyFraction } from "./slices/age";

export const store = configureStore({
  reducer: {
    ...withUndo({ age }, { ignore: { growTinyFraction } }),
    counter,
  },
});
