import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { tasksApi } from "./services/tasksServices";

export default configureStore({
  reducer: {
    counter: counterReducer,
    [tasksApi.reducerPath]: tasksApi.reducer,
  },
});
