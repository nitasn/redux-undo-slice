import { configureStore } from "@reduxjs/toolkit";

import { 
  persist, 
  persistenceMiddleware, 
  LoadSlicesFromLocalStorage 
} from "persist-redux-slice";

import counter from "./slices/counter";

export const store = configureStore({
  reducer: {
    counter: persist({ counter }),
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(persistenceMiddleware);
  },
});

store.dispatch(LoadSlicesFromLocalStorage);