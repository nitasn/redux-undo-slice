import { configureStore } from "@reduxjs/toolkit";
import age, { growTinyFraction } from "./slices/age";
import counter from "./slices/counter";
import { withUndo } from "./undo";

export const store = configureStore({
  reducer: {
    ...withUndo({ counter }),
    ...withUndo({ age }, { ignore: { growTinyFraction } }),
  },
});
