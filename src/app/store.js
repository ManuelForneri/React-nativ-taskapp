import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

import { tasksApi } from "../services/tasksServices";
import { authApi } from "../services/authServices";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [tasksApi.reducerPath]: tasksApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tasksApi.middleware, authApi.middleware),
});

setupListeners(store.dispatch);
