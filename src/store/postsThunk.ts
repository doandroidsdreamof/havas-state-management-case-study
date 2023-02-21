import { BlogPostsState } from './../types/interface';
import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getPosts = createAsyncThunk('posts/getPosts', async (url: string) => {
  const response = await axios.get(url);
  return response?.data;
});

const initialState = {
  blogPosts: [],
  loading: 'null',
} as BlogPostsState;

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state, action) => {
        state.loading = 'pending';
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.loading = 'failed';
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.blogPosts = action.payload;
      });
  },
});

export default postSlice.reducer;
