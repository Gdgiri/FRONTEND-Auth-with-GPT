import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/index.jsx";

// Create the store using configureStore
const store = configureStore({
  reduce: rootReducer,
  // Optional: add additional middleware or enhancers here
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(customMiddleware),
});

export default store;
