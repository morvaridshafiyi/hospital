import { configureStore } from '@reduxjs/toolkit';
import todoReducer  from "./slices/forms"

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});