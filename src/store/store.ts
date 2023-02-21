import { configureStore } from '@reduxjs/toolkit';
import asyncRequest from './postsThunk';
import tracksSlice from './reducers/tracksSlice';



export const store = configureStore({
  reducer: {
     posts:asyncRequest,
     tracks:tracksSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
