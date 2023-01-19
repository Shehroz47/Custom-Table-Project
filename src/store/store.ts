import { configureStore } from "@reduxjs/toolkit";
import tableReducer from "./tableSlice";

// configureStore create store, have a app state tree, also have middlewere
const store = configureStore({
  reducer: {
    table: tableReducer,
  },
});

// we are getting state type
export type IRootState = ReturnType<typeof store.getState>;
export default store;
