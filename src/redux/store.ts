import { configureStore } from "@reduxjs/toolkit";
import { loginApi } from "../apis/login.api";
import { dashboardApi } from "../apis/dashboard.api";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import authReducer from "../features/authSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [loginApi.reducerPath]: loginApi.reducer,
    [dashboardApi.reducerPath]: dashboardApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([
        loginApi.middleware,
        dashboardApi.middleware])
}); 

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

setupListeners(store.dispatch)