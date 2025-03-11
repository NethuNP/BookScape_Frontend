import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../../Redux/features/authSlice";
import { apiSlice } from "@/app/Redux/apiSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware() .concat(apiSlice.middleware),

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
