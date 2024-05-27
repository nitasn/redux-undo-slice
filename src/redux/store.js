import { configureStore } from "@reduxjs/toolkit";

import { withUndo } from "./undo";

import age from "./slices/age";
import counter from "./slices/counter";

export const store = configureStore({
  reducer: {
    ...withUndo({ age }),
    counter,
  },
});
