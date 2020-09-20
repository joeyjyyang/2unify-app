import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./App.slice";

export default configureStore({
  reducer: {
    app: appReducer,
  },
});
