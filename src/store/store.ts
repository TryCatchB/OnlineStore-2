import { configureStore } from "@reduxjs/toolkit";
import { electronicsSlice } from "../slices/electronicsSlice";

export const store = configureStore({
  reducer: {
    [electronicsSlice.reducerPath]: electronicsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(electronicsSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
