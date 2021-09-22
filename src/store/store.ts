import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { cepApi } from "./cepApi";

export const store = configureStore({
  reducer: { [cepApi.reducerPath]: cepApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cepApi.middleware),
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
