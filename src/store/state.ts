import { configureStore } from "@reduxjs/toolkit";
import coachReducer from "../components/coach/store/coach.slice";

export const store = configureStore({
  reducer: {
    coach: coachReducer,
  },
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
